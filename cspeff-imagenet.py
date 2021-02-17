from cspefficientnet import EfficientNetB7

import cspefficientnet
import tensorflow as tf

#from tensorflow.keras.applications import EfficientNetB7
from tensorflow.keras.callbacks import ModelCheckpoint

import numpy as np
import os
import PIL
import PIL.Image
import tensorflow_datasets as tfds
import glob


train_ds = tf.data.Dataset.list_files(str('imagenet/train/*.JPEG'), shuffle=False)
val_ds = tf.data.Dataset.list_files(str('imagenet/val/*.JPEG'), shuffle=False)
print('loading train data paths')

for f in train_ds.take(5):
    print(f.numpy())

print('loading val data paths')
for f in val_ds.take(5):
    print(f.numpy())

train_x = glob.glob('imagenet/train/*.JPEG')
train_y = [i.split('/')[-1].split('_')[0] for i in train_x]

class_ids = np.array(list(set(train_y)))
print(class_ids[:5])


img_height = 224
img_width = 224
batch_size = 256

def get_label(file_path):
    part = tf.strings.split(file_path, os.path.sep)[-1]
    label = tf.strings.split(part, '_')[0]
    one_hot = label == class_ids
    # Integer encode the label
    one_hot = tf.dtypes.cast(one_hot, dtype = tf.int16)
    return tf.argmax(one_hot)

def decode_img(img):
    # convert the compressed string to a 3D uint8 tensor
    img = tf.image.decode_jpeg(img, channels=3)
    # resize the image to the desired size
    return tf.image.resize(img, [img_height, img_width])

def process_path(file_path):
    label = get_label(file_path)
    # load the raw data from the file as a string
    img = tf.io.read_file(file_path)
    img = decode_img(img)
    return img, label

train_ds = train_ds.map(process_path)
train_ds = train_ds.batch(batch_size)
val_ds = val_ds.map(process_path)
val_ds = val_ds.batch(batch_size)

for image, label in train_ds.take(1):
    print("Image shape: ", image.numpy().shape)
    print("Label: ", label.numpy())

checkpoint = ModelCheckpoint("best_model_csp.hdf5", monitor='loss', verbose=1,
    save_best_only=True, mode='auto', period=1)


model = EfficientNetB7(weights='imagenet', classes=1000)
optim = tf.keras.optimizers.RMSprop()
model.compile(optimizer=optim, loss='sparse_categorical_crossentropy', metrics=['accuracy'])
callbacks = [tf.keras.callbacks.TensorBoard(log_dir='./logs_csp', histogram_freq=1), checkpoint]
model.fit(train_ds, batch_size=256, epochs=50, validation_data=val_ds, callbacks=callbacks)

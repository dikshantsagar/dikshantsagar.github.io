

(function($){
    $(function(){
  
      
  
      $('.sidenav').sidenav();
      $('.fixed-action-btn').floatingActionButton();

      var age = new Date().getFullYear() - 1999;
      $('#age').html(age.toString());
      
      $('#home').fadeIn('slow');
      
    
  
    }); // end of document ready
  
  })(jQuery); 




  function home(){

    $('#about').fadeOut('fast');
    $('#skills').fadeOut('fast');
    $('#work').fadeOut('fast');
    $('#contact').fadeOut('fast');
    $('#home').fadeIn('slow');
    $('.sidenav').sidenav('close');
  }

  function about(){
    $('#home').fadeOut('fast');
    $('#skills').fadeOut('fast');
    $('#work').fadeOut('fast');
    $('#contact').fadeOut('fast');
    $('#about').fadeIn('slow');
    $('.sidenav').sidenav('close');

  }

  function skills(){
    $('#home').fadeOut('fast');
    $('#about').fadeOut('fast');
    $('#work').fadeOut('fast');
    $('#contact').fadeOut('fast');
    $('#skills').fadeIn('slow');
    $('.sidenav').sidenav('close');
  }

  function work(){
    $('#home').fadeOut('fast');
    $('#about').fadeOut('fast');
    $('#skills').fadeOut('fast');
    $('#contact').fadeOut('fast');
    $('#work').fadeIn('slow');
    $('.sidenav').sidenav('close');

  }
  function contact(){
    $('#home').fadeOut('fast');
    $('#about').fadeOut('fast');
    $('#skills').fadeOut('fast');
    $('#work').fadeOut('fast');
    $('#contact').fadeIn('slow');
    $('.sidenav').sidenav('close');

  }
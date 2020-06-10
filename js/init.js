

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
    $('#home').fadeIn('slow');
    $('#about').fadeOut('fast');
    $('#skills').fadeOut('fast');
    $('#work').fadeOut('fast');
    $('#contact').fadeOut('fast');
    $('.sidenav').sidenav('close');
  }

  function about(){
    $('#home').fadeOut('fast');
    $('#about').fadeIn('slow');
    $('#skills').fadeOut('fast');
    $('#work').fadeOut('fast');
    $('#contact').fadeOut('fast');
    $('.sidenav').sidenav('close');

  }

  function skills(){
    $('#home').fadeOut('fast');
    $('#about').fadeOut('fast');
    $('#skills').fadeIn('slow');
    $('#work').fadeOut('fast');
    $('#contact').fadeOut('fast');
    $('.sidenav').sidenav('close');
  }

  function work(){
    $('#home').fadeOut('fast');
    $('#about').fadeOut('fast');
    $('#skills').fadeOut('fast');
    $('#work').fadeIn('slow');
    $('#contact').fadeOut('fast');
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
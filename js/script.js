// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  $(document).ready(function(){
    $("#submit").click(function(){
      $(this).prop('disabled', true);
    });
    });
  

  $(document).ready(function(){
    $("#submit").click(function () {
      if ($(this).is(':checked')) {
        $("#submit").attr('disabled', false);
      } else {
        $("#submit").attr('disabled', true);
        alert("Must agree to terms and conditions to submit");
      }
    });
    });
  });

  
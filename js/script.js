// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });

// $(document).ready(function(){
//   $('#input-terms').click(function () {
//       //check if checkbox is checked
//       if ($(this).is(':checked')) {
            
//           $('#submit').removeAttr('disabled'); //enable input
            
//       } else {
//           $('#submit').attr('disabled', true); //disable input
//           alert("Must agree to terms and conditions to submit");
//       }
//   });
//   });

function validate() {
  if (document.getElementById('terms').checked) {
      $('#submit').attr('disabled', false);
  } else {
    alert("You didn't check it! Let me check it for you.");
    $('#submit').attr('disabled', true);
  }
}

validate();
$(document).ready(function() {
    $('.dropdown-button').click(function() {
      $('.dropdown-list').toggle();
    });
    
    $('.dropdown-list li a').click(function(e) {
      e.preventDefault();
      var selectedOption = $(this).text();
      $('.dropdown-button').text(selectedOption);
      $('.dropdown-list').hide();
    });
  });



  


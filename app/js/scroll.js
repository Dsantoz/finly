$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  if(wScroll > $('#developer').offset().top -300) {
    $('#developer .dev').each(function(i){
      setTimeout(function(){
        $('#developer .dev').eq(i).addClass('show');
      }, 300 * (i + 1) );
    });
  } else {
    $('#developer .dev').removeClass('show');
    };

    if(wScroll > $('#pages').offset().top -300) {
      $('#pages .card').each(function(){
        setTimeout(function(){
          $('#pages .card').addClass('cShow');
        }, 300 );
      });
    } else {
      $('#pages .card').removeClass('cShow');
      };
});

$(window).on('load', function(){
  $('#mainHeader, .titleText').addClass('tShow');
});

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  if(wScroll > $('#aboutUs').offset().top -300) {
    $('#aboutUs .card').each(function(i){
      setTimeout(function(){
        $('#aboutUs .card').eq(i).addClass('show');
      }, 300 * (i + 1) );
    });
  } else {
    $('#aboutUs .card').removeClass('show');
    };
  });

  function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}
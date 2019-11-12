
// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

//slider moving 
$('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1
});

/***************** scroll to the top of the page***************** ***************** */ 
const scrollToTheTop = document.getElementById("scrollToTheTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTheTop.style.display = "block";
  } else {
    scrollToTheTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// the if href match current web url, the tab shows active
const currentLocation = window.location.href;
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
if (link.href === currentLocation) {
    link.classList.add("active");
}
});

// when scrolling down, the header disappear
var prevScrollpos = window.pageYOffset;
var timeout = null;
var isScrolling = false;

// hide the header when scrolling down, show it when scrolling up or not scrolling
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // scrolling up
    document.getElementById("header").style.top = "0";
    isScrolling = false;
  } else if (!isScrolling) {
    // not scrolling or scrolling down
    document.getElementById("header").style.top = "-100px";
    isScrolling = true;
  }
  prevScrollpos = currentScrollPos;
}

// bind the showHeader function to mousemove and keydown events
document.addEventListener("mousemove", showHeader);
document.addEventListener("keydown", showHeader);

// show the header if the user is not scrolling
function showHeader() {
  if (!isScrolling) {
    document.getElementById("header").style.top = "0";
    isScrolling = false;
  }
}

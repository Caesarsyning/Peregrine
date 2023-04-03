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
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

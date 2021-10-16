// js for navication bar on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//  js for  menubtn $ navigation bar
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

const navigationItems = document.querySelectorAll(".navigation a");

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});
//
const scrollBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 300);
});
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
//
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelector(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeigth = window.innerHeight;
    var revealTop = reveal[i].getBoundingClientRect().top;
    var revealPoint = 50;
    if (revealTop < windowHeigth - revealPoint) {
      reveals[i].classlist.add("active");
    }
  }
}

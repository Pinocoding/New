// js for navication bar on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//  js for  menubtn $ menu
const menubtn=document.querySelector(".menu-btn");
const navigation=document.querySelector(".navigation);

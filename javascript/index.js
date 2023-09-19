let appendNumber = 600;
let prependNumber = 1;
const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".movenext",
    prevEl: ".moveback",
  },
});

let video = document.querySelector("#aboutvido");
let playicon = document.querySelector(".about-video  .playicon");
let a = 1;
video.addEventListener("click", () => {
  if (a == 1) {
    video.play();
    playicon.style.visibility = "hidden";
    a = 0;
  } else {
    video.pause();
    playicon.style.visibility = "visible";
    a = 1;
  }
});

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

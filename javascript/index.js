let appendNumber = 600;
let prependNumber = 1;
const swiper1 = new Swiper(".swiper", {
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


// var swiper = new Swiper(".slide-container", {
//   slidesPerView: 4,
//   spaceBetween: 20,
//   slidesPerGroup: 4,
//   loop: true,
//   centerSlides: true,
//   fadeEffect: true,
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     520: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1000: {
//       slidesPerView: 4,
//     },
//   },
// });

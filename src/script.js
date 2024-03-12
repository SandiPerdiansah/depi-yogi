const data = [
  { id: 1, image: '../assets/img/gallery/1.jpg' },
  { id: 2, image: '../assets/img/gallery/2.jpg' },
  { id: 3, image: '../assets/img/gallery/3.jpg' },
  { id: 4, image: '../assets/img/gallery/4.jpg' },
  { id: 5, image: '../assets/img/gallery/5.jpg' },
  { id: 6, image: '../assets/img/gallery/6.jpg' },
  { id: 7, image: '../assets/img/gallery/7.jpg' },
  { id: 8, image: '../assets/img/gallery/8.jpg' },
];

const swiperImageSlider = ((dataSwipperImage) => {
  dataSwipperImage.map((item) => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML += /* html */ `<div class="swiper-slide" id="${item.id}"><img src="${item.image}" alt="yogi dan depi"></div>`;
  });
})(data);

const imageFull = document.querySelector('.imageFull');
const swiperSlide = document.querySelectorAll('.swiper-slide');
swiperSlide.forEach((item) => {
  item.addEventListener('click', () => {
    const image = data.find((items) => items.id == parseInt(item.getAttribute('id')));
    imageFull.innerHTML = /* html */ `<img src="${image.image}" alt="yogi dan depi" class="w-full h-full object-cover rounded-[inherit]" />`;
  });
});

document.querySelectorAll('#btnCopy').forEach((btn) => {
  btn.addEventListener('click', () => {
    const contentCopy = btn.querySelector('p').innerText;
    navigator.clipboard.writeText(parseInt(contentCopy));
    btn.innerHTML = /* html */ `<i class="bx bx-check"></i> <p>copied</p>`;

    document.addEventListener('DOMContentLoaded', () => {
      btn.innerHTML = /* html */ `<i class="bx bx-copy"></i> <p>${String(contentCopy)}</p>`;
    });
  });
});

// swiper
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// countdown
simplyCountdown('#simply-countdown', {
  year: 2024,
  month: 4,
  day: 4,
  hours: 8,
  minutes: 0,
  seconds: 0,
  words: {
    days: { singular: 'hari', plural: 'hari' },
    hours: { singular: 'jam', plural: 'jam' },
    minutes: { singular: 'menit', plural: 'menit' },
    seconds: { singular: 'detik', plural: 'detik' },
  },
});

// animate on scroll
AOS.init();

import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper";
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
]);

export const sliderProps = {
  testimonial: {
    loop: true,
    spaceBetween: 30,
    autoplay: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 500,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  },
};

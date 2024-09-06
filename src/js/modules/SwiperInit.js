import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

class InitSliders {
  constructor() {
    this.reviewsSliderInstance = null;
    this.hiddenSlides = [];

    this.initializeSlider();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  createSwiperInstance(sliderSelector, params) {
    const sliderElement = document.querySelector(sliderSelector);

    if (!sliderElement) return null;

    return new Swiper(sliderElement, {
      slidesPerView: params.slidesPerView || 1,
      slidesPerGroup: params.slidesPerGroup || 1,
      spaceBetween: params.spaceBetween || 0,
      loop: params.loop || false,
      autoHeight: true,
      navigation: {
        nextEl: params.nextEl,
        prevEl: params.prevEl,
      },
      ...params.settings,
    });
  }

  initializeSlider() {
    this.handleResponsiveSlider();
  }

  handleResponsiveSlider() {
    const windowWidth = window.innerWidth;
    const isMobile = windowWidth < 768;

    if (isMobile) {
      const slidesPerView = 1;

      this.hideHiddenSlides();

      if (!this.reviewsSliderInstance) {
        this.reviewsSliderInstance = this.createSwiperInstance('.js-reviews-slider-mobile-init', {
          loop: true,
          nextEl: '.js-swiper-button-next-1',
          prevEl: '.js-swiper-button-prev-1',
          settings: {
            slidesPerView: slidesPerView,
            spaceBetween: 0,
          },
        });
      } else {
        this.reviewsSliderInstance.params.slidesPerView = slidesPerView;
        this.reviewsSliderInstance.update();
      }
    } else {
      if (this.reviewsSliderInstance) {
        this.reviewsSliderInstance.destroy(true, true);
        this.reviewsSliderInstance = null;
      }
      this.restoreHiddenSlides();
    }
  }

  hideHiddenSlides() {
    const hiddenSlides = document.querySelectorAll('.js-reviews-slider-mobile-init .swiper-slide-hidden');

    hiddenSlides.forEach(slide => {
      const index = [...slide.parentNode.children].indexOf(slide);
      this.hiddenSlides.push({ slide, index });
      slide.remove();
    });
  }

  restoreHiddenSlides() {
    const sliderContainer = document.querySelector('.js-reviews-slider-mobile-init .swiper-wrapper');

    if (!sliderContainer) return;

    this.hiddenSlides.sort((a, b) => a.index - b.index);

    this.hiddenSlides.forEach(({ slide, index }) => {
      const refSlide = sliderContainer.children[index];
      if (refSlide) {
        sliderContainer.insertBefore(slide, refSlide);
      } else {
        sliderContainer.appendChild(slide);
      }
    });

    this.hiddenSlides = [];
  }

  handleResize() {
    this.handleResponsiveSlider();
  }
}

export default InitSliders;

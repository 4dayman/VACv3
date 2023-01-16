<template>
  <div>
    <swiper
      class="swiper_wrapper"
      :slides-per-view="1"
      :space-between="30"
      :loop="false"
      navigation
      grabCursor
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        class="slide"
        v-for="image in images"
        :key="image.id"
        :model="image.model"
      >
        <img
          :src="image.imgUrl"
        >
        <h1>{{ image.model }}</h1>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [
        { id: 1, model: 'SUV', imgUrl: require("@/assets/main_swiper/SUV.png") },
        { id: 2, model: 'CAR', imgUrl: require("@/assets/main_swiper/CAR.png") },
        { id: 3, model: 'TRUCK', imgUrl: require("@/assets/main_swiper/TRUCK.png") },
        { id: 4, model: 'VAN', imgUrl: require("@/assets/main_swiper/VAN.png") },
      ],
    }
  },
  methods: {
    onSwiper() {
      console.log()
    },
    onSlideChange(image) {
      this.$emit('carModel', image )
    },
  }

};
</script>

<style lang="scss">
.swiper_wrapper {
  max-width: 600px;
  display: flex;
  overflow: hidden;
  transition: all 0.4s ease;
  @media (max-width: 1024px) {
    max-width: 500px;
  }
  @media (max-width: 768px) {
    max-width: 470px;
  }
  @media (max-width: 460px) {
    max-width: 320px;
  }

}

.swiper-slide {
  padding: 0 70px;
  @media (max-width: 460px) {
    padding: 0 40px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.swiper-button-prev,
.swiper-button-next {
    color:#7481FF;
    margin-top: 0;
    transform: translateY(-50%);
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background: #fff;
    transition: opacity .4s ease-in;
    opacity: 0.8;
    @media (max-width: 460px) {
      width: 35px;
      height: 35px;
  }

}
.swiper-button-prev:after,
.swiper-button-next:after {
 font-size: 20px;
 font-weight: 700;
  @media (max-width: 460px) {
    font-size: 15px;
  }
}
.swiper-button-prev:after {
  transform: translatex(-10%);

}
.swiper-button-next:after {
  transform: translatex(10%);
}

</style>
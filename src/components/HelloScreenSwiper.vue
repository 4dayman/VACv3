<template>
  <div class="main_swiper">
    <Swiper
      class="swiper_wrapper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      :loop="false"
      :navigation="{nextEl: '.nextbtn', prevEl: '.prevbtn'}"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide
        class="slide"
        v-for="item in swiper_data"
        :key="item.id"
        :model="item.model"
      >
        <img
          :src="item.imgUrl"
        >
      </SwiperSlide>
    </Swiper>
      <div class="swiper_nav">
        <div 
        class="swiper-button-prev prevbtn"
        @click="prevSlide" 
        >
        </div>
        <div 
        class="swiper-button-next nextbtn"
        @click="nextSlide" 
        >
        </div>
      </div>
  </div>
</template>

<script>
// import Swiper core and required modules
  import { Navigation } from 'swiper';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    swiper_data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentSlide: 0,
      isActivePrev: true,
      isActiveNext: false,
    }
  },
    methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
        this.isActiveNext = false
        // console.log(this.currentSlide)
        this.$emit('carModel', this.swiper_data[this.currentSlide].model )
      }
      if (this.currentSlide === 0) {
        this.isActivePrev = true
      }
    },
    nextSlide() {
      if (this.currentSlide < this.swiper_data.length - 1){
        // console.log(this.currentSlide)
        this.isActivePrev = false
        
        this.currentSlide++
        this.$emit('carModel', this.swiper_data[this.currentSlide].model )
      }
      if (this.currentSlide === this.swiper_data.length - 1) {
        this.isActiveNext = true
      }
    },
  },
  setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log("slide change")
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation],
      };
  },

}
</script>

<style lang="scss">
.main_swiper{
  position: relative;
}
.swiper_wrapper {
  z-index: 1;
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
.swiper_nav{
  width: 100%;
  display: flex;
  justify-content: space-between;
  // position: relative;
  position: absolute;
  top: 50%;
  // z-index: 1;
}
.swiper_arrows{
  z-index: 1;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.prevbtn,
.nextbtn {
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
.prevbtn:after,
.nextbtn:after {
 font-size: 20px;
 font-weight: 700;
  @media (max-width: 460px) {
    font-size: 15px;
  }
}
.prevbtn:after {
  transform: translatex(-10%);
}
.nextbtn:after {
  transform: translatex(10%);
}
.nextbtn{}
</style>
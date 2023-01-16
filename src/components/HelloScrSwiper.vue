<template>
  <div class="cars_siper_wrapper">
    <div class="cars_swiper" :style="{'margin-left': '-' + (100 * currentSlide) + '%'}">
      <HelloScrSwiperItem
        v-for="item in swiper_data"
        :key="item.id"
        :item_data="item"
      />
    </div>
    <div class="cars_swiper_nav">
      <button 
        class="cars_swiper_arrow prev_arrow" 
        @click="prevSlide" 
        :class="isActivePrev ? 'inactive' : ''"
      >
        <img src="@/assets/main_swiper/ArrowDefault.png" alt="">
      </button>
      <button 
        class="cars_swiper_arrow next_arrow" 
        @click="nextSlide" 
        :class="isActiveNext ? 'inactive' : ''"
        >
        <img src="@/assets/main_swiper/ArrowDefault.png" alt="">
      </button>
    </div>
  </div>
</template>

<script>
import HelloScrSwiperItem from '@/components/HelloScrSwiperItem.vue'
export default {
  components: {
    HelloScrSwiperItem,
  },
  props: {
    swiper_data: {
      type: Array,
      default: () => []
    },
    interval: {
      type: Number,
      default: 0
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
  // mounted() {
  //   if (this.interval > 0) {
  //     let vm = this;
  //     setInterval( function () {
  //       vm.nextSlide()
  //     }, 1000)
  //   }
  // }
}
</script>

<style lang="scss">
.cars_siper_wrapper{
  max-width: 600px;
  overflow: hidden;
  position: relative;
  @media (max-width: 640px) {
    max-width: 480px;
  }
  @media (max-width: 520px) {
    max-width: 320px;
  }

}
.cars_swiper{
  display: flex;
  gap: 0;
  transition: all ease 0.5s;
}
.cars_swiper_nav{
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
}
.cars_swiper_arrow{
  border-radius: 50%;
  opacity: 0.8;
  &:hover{
    cursor: pointer;
  }
}
.cars_swiper_arrow.inactive{
  opacity: 0.4;
}
.prev_arrow{
  rotate: 180deg;
}
</style>
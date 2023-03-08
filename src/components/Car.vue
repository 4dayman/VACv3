<template>
    <div class="car_wrapper">
        <div class="car_title">
            <h2>{{ car.make }} {{ car.model }} {{ car.modelDesc }}</h2>
            <p>Watching now {{ randomNumber }} people</p>
        </div>
        <div class="car">
            <div class="car_swiper">
                <swiper
                    :loop="true"
                    :spaceBetween="10"
                    :navigation="{ prevEl: '.prevCar', nextEl: '.nextCar' }"
                    :thumbs="{ swiper: thumbsSwiper }"
                    :modules="modules"
                    class="mySwiper2"
                >
                    <swiper-slide>
                        <img :src="carUrl" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img :src="carUrl1" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img :src="carUrl2" alt="">
                    </swiper-slide>
                </swiper>
                <swiper
                    @swiper="setThumbsSwiper"
                    :loop="true"
                    :spaceBetween="10"
                    :slidesPerView="3.7"
                    :freeMode="true"
                    :centeredSlides="true"
                    :watchSlidesProgress="true"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide>
                        <img :src="carUrl" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img :src="carUrl1" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img :src="carUrl2" alt="">
                    </swiper-slide>
                </swiper>
                <div class="car_nav">
                    <div class="swiper-button-prev prevCar"></div>
                    <div class="swiper-button-next nextCar"></div>
                </div>
                <div class="slide_swap_nav">
                    <button class="swap_btn" :class="exterior ? 'active' : ''" @click="getExterior">Exterior</button>
                    <button class="swap_btn" :class="interior ? 'active' : ''" @click="getInterior">Interior</button>
                </div>
            </div>
            <div class="car_desc">
                <div class="desc_price">
                    <p>Price</p>
                    <span>{{ car.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} $</span>
                </div>
                <div class="desc_body">
                    <div class="desc_body_body">
                        <p>Body</p>
                        <span>{{ car.body }}</span>
                    </div>
                    <div class="desc_body_body">
                        <p>Year</p>
                        <span>{{ car.year }}</span>
                    </div>
                    <div class="desc_body_body">
                        <p>Transmission</p>
                        <span>{{ car.transmition }}</span>
                    </div>
                    <div class="desc_body_body">
                        <p>Kilometres </p>
                        <span>{{ car.kilometres.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}</span>
                    </div>
                </div>
                <div class="separation"></div>
                <div class="desc_detail">
                    <div class="desc_price detail_title">
                        <p>Detail</p>
                    </div>
                    <div class="desc_detail_body">
                        <h4>Rear wheel drive</h4>
                        <h4>2500-4000 rpm</h4>
                        <h4>6 cylinders</h4>
                        <h4>0-100 in 2.7 s.</h4>
                        <h4>11 l. per 100 km.</h4>
                        <h4>Power steering</h4>
                        <h4>Rear wheel drive</h4>
                        <h4>2500-4000 rpm</h4>
                    </div>
                </div>
                <div class="separation"></div>
                <div class="desc_desc">
                    <div class="desc_price detail_title">
                        <p>Description</p>
                    </div>
                    <p>Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day.</p>
                    <p>The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.</p>
                    <button>Request more information</button>
                </div>
            </div>
        </div>
        <CalculateCar :price ="price"/>
    </div>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';
import CalculateCar from './CalculateCar.vue';

export default {
    components: {
    Swiper,
    SwiperSlide,
    CalculateCar
},
    props: {
        cars: {
            type: Array,
            default: () => []
        },
        
    },
    data() { 
        return { 
            thumbsSwiper: this.swiper,
            carUrl: this.cars[this.$route.params.id - 1].url,
            carUrl1: this.cars[this.$route.params.id - 1].url1,
            carUrl2: this.cars[this.$route.params.id - 1].url2,
            exterior: true,
            interior: false,
            price: 0,
            Number: '',
            car: null,
        }
    },
    methods: {
        setThumbsSwiper(swiper) {
            this.thumbsSwiper = swiper;
        },
        getInterior() { 
            this.carUrl = this.cars[this.$route.params.id - 1].url3
            this.carUrl1 = this.cars[this.$route.params.id - 1].url4
            this.carUrl2 = this.cars[this.$route.params.id - 1].url5
            this.interior = true
            this.exterior = false
        },
        getExterior() { 
            this.carUrl = this.cars[this.$route.params.id - 1].url
            this.carUrl1 = this.cars[this.$route.params.id - 1].url1
            this.carUrl2 = this.cars[this.$route.params.id - 1].url2
            this.interior = false
            this.exterior = true
        },
    },
    setup() {
        return {
            modules: [FreeMode, Navigation, Thumbs],
        };
    },
    computed: {
        randomNumber() {
           return this.Number = Math.round(Math.random() * 100)
        },
    },
    created() {
        const car = this.cars.find(car => car.id == this.$route.params.id)
        if (car) {
            this.car = car
            this.price = car.price
        }
    }

}
</script>

<style lang="scss">
.car_wrapper {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 20px;
    margin-top: 40px;
    @media (max-width: 500px) {
        margin-top: 20px;
    }
    @media (max-width: 360px) {
        margin-top: 0px;
    }

}
.car {
    display: grid;
    grid-template-columns: 1fr 1fr;
    transition: all 0.4s;
    gap: 50px;
    margin-bottom: 285px;
    @media (max-width: 1024px) {
        margin-bottom: 160px;
        grid-template-columns: 1fr;
    }
    @media (max-width: 460px) {
        margin-bottom: 80px;
    }
}
.car_title{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    h2{
        font-weight: 700;
        font-size: 45px;
        line-height: 140.5%;
        color: #41456B;
        @media (max-width: 500px) {
            font-size: 30px;
        }
        @media (max-width: 360px) {
            font-size: 28px;
        }
    }
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 159%;
        color: #606276;
    }
}
.car_swiper{
    position: relative;
    // max-width: 90vw;
    // height: 366px;
    margin: 0 auto;
    max-height: 477px;
    max-width: 90vw;
    @media (max-width: 1024px) {
        overflow: hidden;
    }
    @media (min-width: 1025px) {
    max-width: 650px;
    }
}
.mySwiper2 {
  height: 366px;
  margin: 0 auto;
  padding: 0;
    @media (max-width: 500px) {
        height: 180px;
    }
}
.mySwiper2 .swiper-slide{
    padding: 0;
    cursor: pointer;
}
.mySwiper {
    // max-width: 650px;
//   height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
    width: 100%;
    height: 90px;
    opacity: 0.8;
    padding: 0;
    cursor: pointer;
    border-radius: 2px;
    overflow: hidden;
    @media (max-width: 500px) {
        height: 70px;
    }
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
  border: 2px solid #7481FF;
}

.swiper-slide img {
//   display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.car_nav{
    bottom: 60px;
    position: absolute;
    width: 100%;
    @media (max-width: 500px) {
        bottom: 40px;
    }
}
.prevCar,
.nextCar {
    z-index: 2;
    color:#fff;
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background: rgba(116, 130, 255, 0.8);
    @media (max-width: 500px) {
        width: 35px;
      height: 35px;
  }
}
.nextCar{
    right: 0px;
}
.prevCar{
    left: 0px;
}
.prevCar:after,
.nextCar:after {
 font-size: 20px;
 font-weight: 700;
 transition: all ease 0.5s;
  @media (max-width: 460px) {
    font-size: 15px;
  }
}
.prevCar:after {
  transform: translatex(-10%);
}
.nextCar:after {
  transform: translatex(10%);
}
.slide_swap_nav{
    position: absolute;
    left: 23px;
    bottom: 129px;
    z-index: 2;
    display: flex;
    gap: 7px;
    @media (max-width: 500px) {
        bottom: 99px;
        left: 10px;
    }
}
.swap_btn{
    padding: 10px 19px;
    background: rgba(215, 215, 215, 0.2);
    border-radius: 2px;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color:#fff;
}
.swap_btn.active{
    background: #fff;
    color: #41456B;
}
.desc_price{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 159%;
        color: #606276;
    }
    span{
        font-weight: 700;
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
        color: #7481FF;
    }
}
.desc_body {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
}
.desc_body_body{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 159%;
        color: #606276;
    }
    span{
        font-weight: 700;
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
        color: #41456B;
    }
}
.separation{
    width: 100%;
    height: 1px;
    background: #D7D7D7;
    margin: 60px 0;
}
.detail_title {
    margin-bottom: 20px;
}
.desc_detail_body{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    h4{
        text-align: left;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456B;
    }
}
.desc_desc {
    margin-bottom: 40px;
    // display: flex;
    // flex-direction: column;
    // justify-content: flex-start;
    p{
        text-align: left;
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #606276;
    }
    button{
        margin-top: 40px;
        padding: 16px 21px;
        font-weight: 700;
        font-size: 16px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #FFFFFF;
        background: #7481FF;
        border-radius: 2px;
        display: flex;
    }
}
</style>
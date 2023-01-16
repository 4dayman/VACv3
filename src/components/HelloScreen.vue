<template>
    <div class="container">
        <div class="hello_screen">
            <img class="hello_bg" src="@/assets/Bg.png" alt="">
            <div class="content">
                <div class="content_top">
                    <div class="content_head">
                        The easiest way to buy a car in Canada
                    </div>
                    <div class="content_right">
                        <HelloScreenSwiper 
                            :swiper_data="cars"
                            @carModel="showModel"
                        />
                    </div>
                </div>
                <div class="content_btn">
                    <main-button class="white max">Request a {{ this.model }}</main-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainButton from '@/components/UI/MainButton.vue'
import HelloScreenSwiper from '@/components/HelloScreenSwiper.vue'
export default {
    components: {
        MainButton,
        HelloScreenSwiper
    },
    data() {
        return {
            cars: [
                { id: 1, model: 'SUV', imgUrl: require("@/assets/main_swiper/SUV.png") },
                { id: 2, model: 'CAR', imgUrl: require("@/assets/main_swiper/CAR.png") },
                { id: 3, model: 'TRUCK', imgUrl: require("@/assets/main_swiper/TRUCK.png") },
                { id: 4, model: 'VAN', imgUrl: require("@/assets/main_swiper/VAN.png") },
            ],
            model: 'SUV'
        }
    },

    methods: {
        showModel(data){
            return this.model = data
        }
    }
}
</script>


<style lang="scss" scoped>
    .container {
        width: 100%;
    }
    .hello_screen {
        position: relative;
        height: 600px;
        transition: all 0.4s ease;
            @media (max-width: 1024px) {
                height: 725px;
            }
            @media (max-width: 460px) {
                height: 505px;
            }
        .hello_bg {
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
        }
    }
    .content {
        max-width: 1230px;
        padding: 0 15px;
        margin: 0 auto;
        @media (max-width: 768px) {
        }

    }
    .content_top {
        padding-top: 120px;
        display: flex;
        align-items: flex-start;
        @media (max-width: 1024px) {
            align-items: center;
            padding-top: 60px;
            flex-direction: column;
        }
        @media (max-width: 460px) {
            padding-top: 0px;

        }
    }
    .content_right {
        @media (max-width: 768px) {
            margin-top: 40px;
        }
        @media (max-width: 460px) {
            margin-top: 0px;

        }
    }
    .content_btn {
        margin-top: 40px;
        display: flex;
        @media (max-width: 1024px) {
            justify-content: center;
        }
    }
    .content_head {
        z-index: 1;
        max-width: 534px;
        font-weight: 800;
        font-size: 60px;
        line-height: 108.5%;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        text-align: left;
        margin-bottom: 60px;
        @media (max-width: 768px) {
            max-width: 600px;
            text-align: center;
            margin-top: 61px;
        }
        @media (max-width: 460px) {
            font-size: 35px;
        }
    }
    .max {
        width: 200px;
        z-index: 1;
    }
</style>
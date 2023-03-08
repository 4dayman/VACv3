<template>
    <div class="inventory">
        <Header onCarBtnHide quizHide />
        <div class="quiz_id">
            <div class="quiz_id_card_item">
                <div class="quiz_id_card_content_img">
                    <Swiper
                        class="swiper"
                        :modules="modules"
                        :slides-per-view="1"
                        :space-between="0"
                        :scrollbar="{ draggable: true }"
                    >
                        <SwiperSlide class="slide">
                            <img :src="cars[this.$route.params.id - 1].url" alt="">
                        </SwiperSlide>
                        <SwiperSlide class="slide">
                            <img :src="cars[this.$route.params.id - 1].url1" alt="">
                        </SwiperSlide>
                        <SwiperSlide class="slide">
                            <img :src="cars[this.$route.params.id-1].url2" alt="">
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div class="quiz_id_card_content_text">
                    <router-link :to="{ path: `/car/${cars[this.$route.params.id - 1].id}` }">
                        <span>{{ cars[this.$route.params.id - 1].make }} {{ cars[this.$route.params.id - 1].model }} {{ cars[this.$route.params.id - 1].modelDesc }}</span>
                    </router-link>
                    <h4>$ {{ cars[this.$route.params.id - 1].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}</h4>
                    <div class="info">
                        <p>{{ cars[this.$route.params.id - 1].year }} year</p>
                        <p>|</p>
                        <p>{{ cars[this.$route.params.id - 1].body }}</p>
                        <p>|</p>
                        <p>{{ cars[this.$route.params.id - 1].transmition }}</p>
                    </div>
                    <p>{{ cars[this.$route.params.id - 1].kilometres.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} km</p>
                </div>
            </div>
            <Quiz :cars="cars" />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Quiz from '@/components/Quiz.vue'
import cars from '../mocks/cars'
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/scrollbar';
export default {
    components: {
        Header,
        Footer,
        Quiz,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Scrollbar],
        };
    },

    data() {
        return {
            index: 0,
            cars,
        }
    },
}

</script>


<style lang="scss">
.inventory {
    margin-top: 80px;
    display: grid;
    grid-template: 1fr / 1fr;
}

.quiz_id{
    margin: 0 auto;
    max-width: 934px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 60px;
    @media (max-width: 1024px) {
        max-width: 420px;
        grid-template-columns: 1fr;
    }
}
.quiz_id_card_item {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
    margin-bottom: 20px;
    background: #FFFFFF;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
    align-self: flex-start;
    @media (max-width: 1024px) {
        grid-row: 2;
    }
}
.quiz_id_card_content_img{
    .slide{
        cursor: pointer;
        height: 216px;
        padding: 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
.swiper-scrollbar{
    background: rgba(255, 255, 255, 0.2);
    border-radius: 28px;
    cursor: pointer;
}
.swiper-scrollbar-drag {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 28px;
}
.quiz_id_card_content_text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 20px;
    text-align: left;
    span {
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456B;
        @media (max-width: 460px) {
            font-size: 18px;
        }
    }
    h4 {
        margin-top: 10px;
        margin-bottom: 20px;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #7481FF;
    }
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #41456B;
    }
    .info {
        display: flex;
        column-gap: 20px;
        flex-wrap: wrap;
    }
}
</style>
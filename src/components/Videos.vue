<template>
    <div class="videos_wrapper">
        <div class="videos">
            <div class="swiper_wrap">
                <swiper class="videos_main"
                    :modules="modules"
                    :slides-per-view="1"
                    :slides-per-group="1"
                    :space-between="40"
                    :pagination="{ clickable: true }"
                    :grid="{ rows: 4, fill: true }"
                    :grabCursor="true"
                    :breakpoints="{
                        '768': {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            grid: {rows: 4, fill: true}

                        },
                        '1024': {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            grid: {rows: 2, fill: true}
                        }
                    }"
                >

                    <swiper-slide 
                        v-for="(video, index) in videos"
                        :key="index"
                        class="videos_slide"
                        @click="indexNo(index)"
                    >
                        <div class="video_play">
                            <img src="../assets/Video_play.svg" alt="">
                        </div>
                        <router-link to="">
                            <div class="videos_content_img">
                                <img :src="video.url" alt="">
                            </div>
                            <div class="videos_content_text">
                                <span>{{video.title}}</span>
                            </div>
                         </router-link>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
import {Grid, Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import "swiper/css/bundle"
import 'swiper/css/grid'




export default {
    components: {
        Swiper,
        SwiperSlide
    },
    methods: {
        indexNo(index) {
            console.log(index)
            this.$emit('blogIndex', index)
        },
        
    },
    props: {
        videos: {
        type: Array,
        default: () => []
        }
    },
    setup() {
      return {
        modules: [Grid, Pagination ],
      }
    }
}
</script>
<style lang="scss">
.videos_wrapper{
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.videos{
    margin-top: 40px;
    margin-bottom: 40px;
    padding-bottom: 40px;
}
.videos_main{
    padding: 20px;
    max-width: 100vw;
    margin: 0 auto;
}
.swiper_wrap {
    position: relative;
}
.videos_slide {
    width: 100%;
    position: relative;
    background: #FFFFFF;
    border-radius: 5px;
    min-height: 416px;
    padding: 0px;
    @media (max-width: 1175px) {
        min-height: 395px;
    }
    @media (max-width: 1023px) {
        min-height: 360px;
    }
    @media (max-width: 791px) {
        min-height: 395px;
    }
    @media (max-width: 767px) {
        min-height: 360px;
    }
}
.video_play {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 53px;
    height: 53px;
    transform: translate(-50%, -50%);
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.videos_content_img {
    margin: -5px;
    height: 326px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.videos_content_text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 20px 30px 0px 0px;
    @media (max-width: 460px) {
        padding: 20px 10px 30px 10px;
    }

    span {
        max-width: 300px;
        text-align: left;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456B;
        @media (max-width: 460px) {
            font-size: 18px;
        }

    }
}
.swiper-horizontal>.swiper-pagination-bullets{
    bottom: 0px;
}
.swiper-pagination-bullet{
    background: #606276;
    opacity: 0.3;
}
.swiper-pagination-bullet-active{
    background: #606276;
    opacity: 1;
}
</style>
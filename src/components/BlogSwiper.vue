<template>
    <div class="interesting_wrapper">
        <div class="interesting">
            <div class="swiper_wrap">
                <swiper class="interesting_main"
                    :modules="modules"
                    :slides-per-view="1"
                    :slides-per-group="1"
                    :space-between="22"
                    :pagination="{ clickable: true }"
                    :grid="{ rows: 6, fill: true }"
                    :grabCursor="true"
                    :breakpoints="{
                        '768': {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            grid: {rows: 4, fill: true}

                        },
                        '1024': {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            grid: {rows: 3, fill: true}
                        }
                    }"
                >

                    <swiper-slide 
                        v-for="(blog, index) in blogs"
                        :key="index"
                        class="slide"
                        @click="indexNo(index)"
                    >
                        <router-link to="/article">
                            <div class="content_img">
                                <img :src="blog.url" alt="">
                            </div>
                            <div class="content_text">
                                <p>{{blog.date}}</p>
                                <span>{{blog.title}}</span>
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
        blogs: {
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
.interesting_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.interesting{
    margin-top: 40px;
    margin-bottom: 40px;
    padding-bottom: 40px;
}
.interesting_title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;
}
.title{
    text-align: left;
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456B;
    @media (max-width: 560px) {
        font-size: 30px;
    }
}
.interesting_main{
    padding: 20px;
    max-width: 95vw;
    margin: 0 auto;
}
.swiper_wrap {
    position: relative;
}
.slide {
    background: #FFFFFF;
    border-radius: 5px;
    min-height: 360px;
    padding: 5px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;
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
.content_img {
    margin: -5px;
    height: 230px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.content_text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 30px 30px 30px 30px;
    @media (max-width: 460px) {
        padding: 20px 10px 30px 10px;
    }

    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #606276;
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
.bottom_btn {
    display: none;
        width: 90%;
    @media (max-width: 460px) {
        display: flex;
        align-items: center;
        justify-content: center;
        display: block;
        max-height: 35px;
        padding: 10px;
        margin: 0 auto;
    }
}
.top_btn {
    @media (max-width: 460px) {
        display: none;
    }
}
.prevBlog,
.nextBlog {
    color:#fff;
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background: rgba(116, 130, 255, 0.8);

    @media (max-width: 460px) {
        width: 35px;
      height: 35px;
  }
}
.nextBlog{
    right: 30px;
    @media (max-width: 768px) {
        right: 25px;
    }

    @media (max-width: 460px) {
        right: 20px;
    }
}
.prevBlog{
    left: 30px;
    @media (max-width: 768px) {
        left: 25px;
    }

    @media (max-width: 460px) {
        left: 20px;
    }
}
.prevBlog:after,
.nextBlog:after {
 font-size: 20px;
 font-weight: 700;
 transition: all ease 0.5s;
  @media (max-width: 460px) {
    font-size: 15px;
  }
}
.prevBlog:after {
  transform: translatex(-10%);
}
.nextBlog:after {
  transform: translatex(10%);
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
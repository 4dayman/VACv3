<template>
    <div class="interesting_wrapper">
        <div class="interesting">
            <div class="interesting_title">
                <div class="title">Interesting to read</div>
                <router-link to="/blog" class="top_btn">
                    <main-button class="white">All Articles</main-button>
                </router-link>
            </div>
            <div class="swiper_wrap">
                <swiper class="interesting_main"
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="50"
                    :navigation="{nextEl: '.nextBlog', prevEl: '.prevBlog'}"
                    :breakpoints="{
                        '768': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '1024': {
                            slidesPerView: 3,
                            spaceBetween: 20,
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
                <div class="blog_nav">
                    <div class="swiper-button-prev prevBlog"></div>
                    <div class="swiper-button-next nextBlog"></div>
                </div>
                <router-link to="/blog" class="">
                    <main-button class="white bottom_btn">All Articles</main-button>
                </router-link>

            </div>
        </div>
    </div>
</template>
<script>
import MainButton from './UI/MainButton.vue'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

export default {
    components: {
        MainButton,
        Swiper,
        SwiperSlide
    },
    methods: {
        indexNo(index) {
            console.log(index)
            this.$emit('blogIndex', index)
        }
    },
    props: {
        blogs: {
        type: Array,
        default: () => []
        }
    },
    setup() {
      return {
        modules: [Navigation]
      }
    }
}
</script>
<style lang="scss" scoped>
.interesting_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.interesting{
    margin-top: 220px;
    margin-bottom: 40px;
    @media (max-width: 1024px) {
        margin-top: 160px;
    }
    @media (max-width: 768px) {
        margin-top: 80px;
    }
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
    margin: 0 auto;
    max-width: 90vw;
    // padding: 0 18px 30px 18px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
        max-width: 90vw;
        margin-bottom: 30px;
        border-radius: 5px;
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
        padding: 0;
    }
}
.swiper_wrap {
    position: relative;
}
.slide {
    background: #FFFFFF;
    border-radius: 5px;
    min-height: 360px;
    padding: 5px;
    box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    @media (max-width: 1193px) {
        min-height: 395px;
    }
    @media (max-width: 1023px) {
        min-height: 360px;
    }
    @media (max-width: 832px) {
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
    padding: 30px;
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
    right: 20px;
    @media (max-width: 768px) {
        right: 40px;
    }

    @media (max-width: 460px) {
        right: 0px;
    }
}
.prevBlog{
    left: 20px;
    @media (max-width: 768px) {
        left: 40px;
    }

    @media (max-width: 460px) {
        left: 0px;
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

</style>
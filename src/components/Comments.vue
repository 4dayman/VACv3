<template>
    <div class="comments_wrapper">
        <div class="comments">
            <div class="comments_title">
                What our client say about us!
            </div>
            <div class="comments_swiper">
                <swiper
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="30"
                    :navigation="{prevEl: '.commentsPrev', nextEl: '.commentsNext'}"
                    @swiper="onSwiper1"
                    @slideChange="onSlideChange1"
                >
                    <swiper-slide
                        class="comments_slide"
                        v-for="item in comments"
                        :key="item.id" 
                    >
                        <div class="slide_content">
                            <div class="slide_img">
                                <img :src="item.url" alt="no img">
                            </div>
                            <div class="slide_text">
                                <h3>{{ item.author }}</h3>
                                <p>{{ item.description }}</p>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="comments_swiper_nav">
                        <div class="swiper-button-prev commentsPrev"></div>
                        <div class="swiper-button-next commentsNext"></div>
                    </div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';  
import 'swiper/css';
import 'swiper/css/navigation';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
        comments: [
            {
                id: 1,
                author: 'Laura Chaisson',
                description: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.',
                url: require("@/assets/Comments_slide.png")
            },
            {
                id: 2,
                author: 'Laura Chaisson',
                description: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.',
                url: require("@/assets/Comments_slide.png")
            },
            {
                id: 3,
                author: 'Laura Chaisson',
                description: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.',
                url: require("@/assets/Comments_slide.png")
            }
        ]
    }
  },
  setup() {
      const onSwiper1 = (swiper) => {
      };
      const onSlideChange1 = () => {
      };
      return {
        onSwiper1,
        onSlideChange1,
        modules: [Navigation],
      };
    },
}
</script>

<style lang="scss" scoped>
.comments_wrapper{
    max-width: 1270px;
    padding: 0 24px;
    margin: 0 auto;
    transition: all ease 0.5s;
    overflow: hidden;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.comments{
    transition: all ease 0.5s;
    margin-bottom: 220px;
    @media (max-width: 1024px) {
        margin-bottom: 160px;
    }
    @media (max-width: 768px) {
        margin-bottom: 80px;
    }

}
.comments_title{
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456B;
    margin-bottom: 60px;
    text-align: left;
    transition: all ease 0.5s;
    @media (max-width: 460px) {
        font-size: 30px;
        margin-bottom: 30px;
    }

}
.comments_swiper{
    margin: 0 auto;
    max-width: 90vw;
    padding: 10px;
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    @media (max-width: 760px) {
        max-width: 89vw;
    }
}
.comments_slide{
    height: 100%;
    width: 100%;
}
.slide_content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all ease 0.5s;
    @media (max-width: 768px) {
        flex-direction: column;
    }
}
.slide_img{
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    max-width: 460px;
    max-height: 322px;
    margin-left: -70px;
    margin-right: 40px;
    transition: all ease 0.5s;
    @media (max-width: 1024px) {
        max-width: 301px;
    }
    @media (max-width: 768px) {
        max-width: 140%;
        margin-right: -70px;
        margin-left: -70px;
        flex: 1 1 auto;
    }
    @media (max-width: 460px) {
        max-width: 140%;

    }


    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.slide_text{
    max-width: 640px;
    text-align: left;
    // margin-left: 40px;
    transition: all ease 0.5s;
    @media (max-width: 375px) {
        margin: 0 -20px;
    }

    h3{
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #606276;
        margin-top: 20px;
    }
    p{
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456B;
        margin-top: 11px;
        margin-bottom: 20px;
        @media (max-width: 460px) {
            font-size: 18px;
        }
    }
}

.commentsPrev,
.commentsNext {
    color:#fff;
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background: rgba(116, 130, 255, 0.8);
    @media (max-width: 768px) {
        top: 30%;
    }

    @media (max-width: 460px) {
        width: 35px;
      height: 35px;
  }
}
.commentsNext{
    @media (max-width: 460px) {
        right: 3%;
    }
}
.commentsPrev{
    @media (max-width: 460px) {
        left: 3%;
    }
}
.commentsPrev:after,
.commentsNext:after {
 font-size: 20px;
 font-weight: 700;
 transition: all ease 0.5s;
  @media (max-width: 460px) {
    font-size: 15px;
  }
}
.commentsPrev:after {
  transform: translatex(-10%);
}
.commentsNext:after {
  transform: translatex(10%);
}

</style>

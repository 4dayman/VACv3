<template>
  <div class="article">
      <Header/>
      <div>
        <img :src="blog.url" alt="">
        <div class="article_wrapper">
          <router-link to="/blog" class="back_btn">
            <img src="../assets/Arrow-Bottom.svg" alt="arrow">
            <span>back</span>
          </router-link>
          <div class="article_content">
            <p class="date">{{  blog.date}}</p>
            <h3>{{ blog.title }}</h3>
            <p>{{blog.article1}}</p>
            <p class="article2">{{blog.article2}}</p>
            <div class="article_topImg">
                <div v-if="blog.img1" class="topImg">
                    <img :src="blog.img1" alt="" >
                </div>
                <div v-if="blog.img2" class="topImg">
                    <img :src="blog.img2" alt="" >
                </div>
            </div>
            <h4 v-if="blog.subtitle">{{blog.subtitle}}</h4>
            <p v-if="blog.article3" class="article3">{{blog.article3}}</p>
            <div v-if="blog.img3" class="midleImg">
                <img :src="blog.img3" alt="" >
            </div>
            <p v-if="blog.article3" class="article3">{{blog.article3}}</p>
            <h4 v-if="blog.subtitle">{{blog.subtitle}}</h4>
            <p v-if="blog.article3" class="article3">{{blog.article3}}</p>
            <h5 v-if="blog.subtitle">{{blog.subtitle}}</h5>
            <p v-if="blog.article4" class="article4">{{blog.article4}}</p>
            <h5 v-if="blog.subtitle">{{blog.subtitle}}</h5>
            <p v-if="blog.article4" class="article4">{{blog.article4}}</p>
            <div v-if="blog.img4" class="midleImg">
                <img :src="blog.img4" alt="" >
            </div>
            <p v-if="blog.article5" class="article5">{{blog.article5}}</p>
            <p v-if="blog.article3" class="article3">{{blog.article3}}</p>
          </div>
        </div>
        <interesting-read 
            :blogs="blogs"
        />
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import InterestingRead from '@/components/InterestingRead.vue'
import blogs from '../mocks/blogs'
export default {
components: {
  Header,
  Footer,
  InterestingRead,
},
methods: {
},

data() {
    return {
        index: 0,
        blogs,
        blog: null
    }
  },
  created() {
    const blog = blogs.find(blog => blog.id == this.$route.params.id)
    if (blog) {
      this.blog = blog
    }
  }

}

</script>


<style lang="scss" scoped>
  .article {
    margin-top: 80px;
    display: grid;
    grid-template: 1fr / 1fr;

  }
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  .article_wrapper {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .back_btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 45px;
    img{
      width: 10px;
      height: 16px;
      object-fit: cover;
      margin-left: 15px;
      @media (max-width: 768px) {
        z-index: 2;
        margin-left: 15px;
      }
    }
    span {
      margin-left: 10px;
      font-weight: 700;
      font-size: 16px;
      line-height: 14px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #606276;
      @media (max-width: 768px) {
        display: none;
      }
      @media (max-width: 460px) {
        z-index: 2;
        display: block;
      }
    }
  }
  .article_content {
    padding: 60px;
    background: #fff;
    border-radius: 5px 5px 0px 0px;
    margin: -130px 100px 220px 100px;
    position: relative;
    text-align: left;
    transition: all 0.4s ease;
    @media (max-width: 768px) {
        margin: -130px 15px 160px 15px;
    }
    @media (max-width: 460px) {
        padding: 0;
        margin: -22px 15px 80px 15px;
    }
    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #606276;
        margin-bottom: 2px;
    }
    h3{
        font-weight: 700;
        font-size: 45px;
        line-height: 140.5%;
        color: #41456B;
        margin-bottom: 20px;
        @media (max-width: 460px) {
            font-size: 30px;
        }
    }
    h4{
        margin-top: 40px;
        font-weight: 700;
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
        color: #41456B;
    }
    h5{
        margin-top: 20px;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456B;
    }
  }
.article2{
    margin-top: 60px;
}
.article3 {
    margin-top: 20px;
}
.article4,
.article5 {
    margin-top: 5px;
}
.date {
    @media (max-width: 460px) {
        text-align: right;
    }
}
.article_topImg {
    margin-top: -30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
}
.midleImg {
    margin-top: 20px;
    height: 496px;
    img{
        height: 100%;
    }
}
</style>
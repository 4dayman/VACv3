<template>
  <div class="about">
      <Header/>
      <div>
        <HeadComp msg="Our blog"/>
        <Blogs
          :blogs="blogs"
          :size="9"
        />
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HeadComp from '@/components/HeadComp.vue'
import Blogs from '@/components/Blogs.vue'
import Footer from '@/components/Footer.vue'
import blogs from '../mocks/blogs'

export default {
components: {
  Header,
  HeadComp,
  Blogs,
  Footer,
},
methods: {
  blogIndex(data) {
    console.log(data)
    return this.index = data
  }
},

data() {
    return {
        index: 0,
        blogs
    }
},
}

</script>


<style lang="scss" scoped>
  .about {
    margin-top: 80px;
    display: grid;
    grid-template: 1fr / 1fr;

  }
</style>
<template>
  <div class="home">
    <Header/>
    <div>
    <HelloScreen/>
    <HowDoesItWork /> 
    <FiveSteps/>
    <Advantages/>
    <Inventory/>
    <Metrics/>
    <Comments/>
    <Calculator/>
    <interesting-read
      :blogs="blogs"
    />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

import HelloScreen from '@/components/HelloScreen.vue'
import HowDoesItWork from '@/components/HowDoesItWork.vue'
import FiveSteps from '@/components/FiveSteps.vue'
import Advantages from '@/components/Advantages.vue'
import Inventory from '@/components/Inventory.vue'
import Metrics from '@/components/Metrics.vue'
import Comments from '@/components/Comments.vue'
import Calculator from '@/components/Calculator.vue'
import Footer from '@/components/Footer.vue'
import InterestingRead from '@/components/InterestingRead.vue'

import blogs from '../mocks/blogs'

export default {
  name: 'HomeView',
  components: {
    Header,
    HelloScreen, 
    HowDoesItWork, 
    FiveSteps, 
    Advantages, 
    Inventory, 
    Metrics,
    Comments,
    Calculator,
    Footer,
    InterestingRead,
  },
   data() {
    return {
      blogs
    }
   }
}
</script>

<style lang="scss" scoped>
  .home {
    margin-top: 80px;
    @media (max-width: 360px) {
      margin-top: 55px;
    }
  }
</style>

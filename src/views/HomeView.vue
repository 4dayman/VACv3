<template>
  <div class="home">
    <Header/>
    <HelloScreen/>
    <HowDoesItWork /> 
    <FiveSteps/>
    <Advantages/>
    <Inventory/>
    <Metrics/>
    <Comments/>
    <Calculator/>
    <!-- <HeadComp>Some text</HeadComp> -->
    <div class="">Home Page</div>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
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
// import HeadComp from '@/components/HeadComp.vue'
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
    // HeadComp
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

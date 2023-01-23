<template>
  <div class="about">
      <Header/>
      <div>
        <HeadComp msg="About VAC"/>
        <OurMission/>
        <GetDreamCar/>
        <VacComp/>
        <BestPrice/>
        <OurQualified/>
        <Comments/>
        <Calculator/>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HeadComp from '@/components/HeadComp.vue'
import OurMission from '@/components/OurMission.vue'
import GetDreamCar from '@/components/GetDreamCar.vue'
import VacComp from '@/components/VacComp.vue'
import BestPrice from '@/components/BestPrice.vue'
import OurQualified from '@/components/OurQualified.vue'
import Comments from '@/components/Comments.vue'
import Calculator from '@/components/Calculator.vue'
import Footer from '@/components/Footer.vue'

export default {
components: {
  Header,
  HeadComp,
  OurMission,
  GetDreamCar,
  VacComp,
  BestPrice,
  OurQualified,
  Comments,
  Calculator,
  Footer,
}
}

</script>


<style lang="scss" scoped>
  .about {
    margin-top: 80px;
    display: grid;
    grid-template: 1fr / 1fr;
  }
</style>
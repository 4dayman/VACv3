<template>
  <div class="about">
      <Header/>
      <div>
        <HeadComp msg="Loan rates"/>
        <CreditPolicy/>
        <RatesLoan/>
        <Benefits/>
        <Calculator/>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HeadComp from '@/components/HeadComp.vue'
import CreditPolicy from '@/components/CreditPolicy.vue'
import RatesLoan from '@/components/RatesLoan.vue'
import Benefits from '@/components/Benefits.vue'
import Calculator from '@/components/Calculator.vue'
import Footer from '@/components/Footer.vue'

export default {
components: {
  Header,
  HeadComp,
  CreditPolicy,
  RatesLoan,
  Benefits,
  Calculator,
  Footer
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
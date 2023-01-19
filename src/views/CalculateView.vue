<template>
  <div class="calculate">
        <Header/>
        <div>
        <HeadComp msg="Use our free calculator!"/>
        <Calculator/>

        </div>
        <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Calculator from '@/components/Calculator.vue'
import HeadComp from '@/components/HeadComp.vue'
import Footer from '@/components/Footer.vue'

export default {
components: {
  Header, 
  Calculator,
  HeadComp,
  Footer
}
}

</script>


<style lang="scss">
  .calculate {
    margin-top: 80px;
                  display: grid;
  grid-template: 1fr / 1fr;

  }
  .head_slot_text{
font-family: 'Gilroy';
  }
</style>
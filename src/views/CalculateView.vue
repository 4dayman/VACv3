<template>
  <div class="calculate">
        <Header/>
        <HeadComp msg="Use our free calculator!"/>
        <Calculator/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Calculator from '@/components/Calculator.vue'
import HeadComp from '@/components/HeadComp.vue'

export default {
components: {
  Header, 
  Calculator,
  HeadComp,
}
}

</script>


<style lang="scss">
  .calculate {
    margin-top: 80px;
  }
  .head_slot_text{
font-family: 'Gilroy';
  }
</style>
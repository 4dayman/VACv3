<template>
  <div class="about">
      <Header/>
      <div>
        <HeadComp msg="Terms & Conditions"/>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HeadComp from '@/components/HeadComp.vue'
import Footer from '@/components/Footer.vue'

export default {
components: {
  Header,
  HeadComp,
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
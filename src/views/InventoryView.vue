<template>
  <div class="inventory">
      <Header/>
      <div>

      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
components: {
  Header,
  Footer,
}
}

</script>


<style lang="scss" scoped>
  .inventory {
    margin-top: 80px;
          display: grid;
  grid-template: 1fr / 1fr;

  }
</style>
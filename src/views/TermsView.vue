<template>
  <div class="about">
      <Header/>
        <HeadComp msg="Terms & Conditions"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HeadComp from '@/components/HeadComp.vue'

export default {
components: {
  Header,
  HeadComp,
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
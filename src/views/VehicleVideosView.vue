<template>
  <div class="about">
      <Header/>
        <HeadComp msg="Vehicle videos"/>
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
  }
</style>
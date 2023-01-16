<template>
  <div class="about">
      <Header/>
    <h1>This is an about page</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
components: {
  Header,
}
}

</script>


<style lang="scss" scoped>
  .about {
    margin-top: 80px;
  }
</style>
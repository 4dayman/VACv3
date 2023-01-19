<template>
  <div class="page_404">
    <Header/>
      <div class="icon_404">
        <img src="@/assets/Sedan_icon.png" alt="">
      </div>
      <h1>404 page</h1>
      <p>Page not found or such pages do not exist.</p>
      <router-link to="/">
        <main-button class="colored">go home</main-button>
      </router-link>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import MainButton from '@/components/UI/MainButton.vue'


export default {
components: {
  Header,
  MainButton
}
}

</script>


<style lang="scss" scoped>
  .page_404 {
    // margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
      font-weight: 700;
      font-size: 45px;
      line-height: 140.5%;
      color: #41456B;
      margin-bottom: 5px;
    }
    p{
      font-weight: 400;
      font-size: 16px;
      line-height: 180%;
      text-align: center;
      letter-spacing: 0.02em;
      color: #606276;
      max-width: 328px;
      margin-bottom: 60px;
    }
  }
  .icon_404 {
    width: 89px;
    margin-bottom: 20px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
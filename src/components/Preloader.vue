<template>
    <!-- <transition name="fade"> -->
    <div class="preloader" v-if="!isLoaded">
        <div class="preloader_icon">
            <img src="@/assets/preloaderLogo.svg" alt="">
        </div>
        <p>Loading ...</p>
    </div>
    <!-- </transition> -->
</template>

<script>

export default {
    data() {
        return {
            isLoaded: false
        }
    },
    mounted() {
        document.onreadystatechange = () => {
            if(document.readyState == "complete") {
                this.isLoaded = true;
            }
        }
    }
}

</script>


<style lang="scss" scoped>
  .preloader {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
      font-weight: 400;
      font-size: 16px;
      line-height: 180%;
      text-align: center;
      letter-spacing: 0.02em;
      color: #606276;
    }
  }
  .preloader_icon {
    width: 92px;
    margin-bottom: 20px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
<template>
  <div id="app" class="wrapper">
    <router-view />
    <div></div>
    <Preloader/>
  </div>
</template>
<script>
import Preloader from '@/components/Preloader.vue'

export default {
    components: {
    Preloader
  },
  // data() {
  //       return {
  //           items: [],
  //       active: false,
  //       lock: false,
  //       }
  // },


}
</script>


<style lang="scss">
/* Стили шрифтов */
@import '@/fonts/fonts.css';
// @font-face {
//   font-family: 'Gilroy';
//   src: url('@/fonts/Gilroy-Regular.woff');
//   font-weight: normal;
//   font-style: normal;
// }
/* Обнуление */
@import '@/assets/nullstyle.scss';

#app {
  font-family: 'Gilroy';
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // overflow: hidden;
}
.wrapper {
  height: 100vh;
  display: grid;
  grid-template: 1fr / 1fr;
}
</style>

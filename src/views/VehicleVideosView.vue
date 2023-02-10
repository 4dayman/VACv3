<template>
  <div class="about">
      <Header/>
      <div>
        <HeadComp msg="Vehicle videos"/>
        <Videos :videos="videos"/>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HeadComp from '@/components/HeadComp.vue'
import Videos from '@/components/Videos.vue'
import Footer from '@/components/Footer.vue'

export default {
components: {
  Header,
  HeadComp,
  Videos,
  Footer
},
data() {
    return {
        videos: [
          {
            url: require('../assets/Video_1.png'),
            videoUrl: 'https://www.youtube.com/embed/n-RcC2xnor8',
            title: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback',
          },
          {
            url: require('../assets/Video_2.png'),
            videoUrl: 'https://www.youtube.com/embed/fPEnXfcvZ_c',
            title: 'VAC\'s Vehicle Shoot #11: Toyota Highlander',
          },
          {
            url: require('../assets/Video_3.png'),
            videoUrl: 'https://www.youtube.com/embed/CSc-uTgU-_M',
            title: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5',
          },
          {
            url: require('../assets/Video_4.png'),
            videoUrl: 'https://www.youtube.com/embed/4MFro63gMD8',
            title: 'Some Vehicles VAC Offers!',
          },
          {
            url: require('../assets/Video_4.png'),
            videoUrl: 'https://www.youtube.com/embed/4MFro63gMD8',
            title: 'Some Vehicles VAC Offers!',
          },
          {
            url: require('../assets/Video_3.png'),
            videoUrl: 'https://www.youtube.com/embed/CSc-uTgU-_M',
            title: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5',
          },
          {
            url: require('../assets/Video_2.png'),
            videoUrl: 'https://www.youtube.com/embed/fPEnXfcvZ_c',
            title: 'VAC\'s Vehicle Shoot #11: Toyota Highlander',
          },
          {
            url: require('../assets/Video_1.png'),
            videoUrl: 'https://www.youtube.com/embed/n-RcC2xnor8',
            title: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback',
          },
          {
            url: require('../assets/Video_3.png'),
            videoUrl: 'https://www.youtube.com/embed/CSc-uTgU-_M',
            title: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5',
          },
          {
            url: require('../assets/Video_2.png'),
            videoUrl: 'https://www.youtube.com/embed/fPEnXfcvZ_c',
            title: 'VAC\'s Vehicle Shoot #11: Toyota Highlander',
          },
        ]
    }
},

}

</script>


<style lang="scss" scoped>
.about {
  margin-top: 80px;
  display: grid;
  grid-template: 1fr / 1fr;
}
</style>
<template>
    <div class="inventory">
        <Header msg="Inventory"/>
        <div>
            <catalog
                :cars="cars"
            />
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Catalog from '@/components/Catalog.vue'
import cars from '../mocks/cars'

export default {
components: {
  Header,
  Footer,
  Catalog,
},
data() {
    return {
        index: 0,
        cars
    }
},
}

</script>


<style lang="scss" scoped>
.inventory {
    margin-top: 80px;
    display: grid;
    grid-template: 1fr / 1fr;
}
</style>
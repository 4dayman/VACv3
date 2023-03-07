<template>
    <div class="inventory">
        <Header onCarBtnHide quizHide />
        <div>
            <Quiz/>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Quiz from '@/components/Quiz.vue'
import cars from '../mocks/cars'

export default {
    components: {
        Header,
        Footer,
        Quiz
    },
    data() {
        return {
            index: 0,
            cars,
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
.hide{
    display: none;
}
</style>
<template>
    <div class="cars_swiper_item">
            <img :src="item_data.imgUrl" :alt="item_data.model">
    </div>
</template>

<script>
export default {
    props: {
        item_data: {
            type: Object,
            default: () => {}

        }
    }
    
}
</script>

<style lang="scss" scoped>
.cars_swiper_item{
    padding: 0 55px;
    img{
        max-width: 490px;
        object-fit: cover;
        transition: all ease 0.5s;
        @media (max-width: 640px) {
            max-width: 390px;
            padding: 0 ;
        }
        @media (max-width: 520px) {
            max-width: 250px;
            margin-left: -30px;
        }
    }
}
</style>
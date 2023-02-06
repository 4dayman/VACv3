<template>
    <div class="head_wrapper">
        <div class="head_text">
            <h2>{{ msg }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        msg: String
    }
}
</script>

<style lang="scss" scoped>
.head_wrapper{
    background: url('@/assets/headCompBg.png');
    height: 145px;
    margin-bottom: 40px;
    @media (max-width: 460px) {
        height: 116px;
    }

}
.head_text{
    max-width: 1230px;
    padding: 0 24px;
    margin: 0 auto;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 40px;
    @media (max-width: 460px) {
        margin-bottom: 30px;
        padding: 0 20px;
    }
    h2{
        font-weight: 800;
        font-size: 60px;
        line-height: 108.5%;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        text-align: left;
        transition: all ease 0.4s;
        @media (max-width: 460px) {
            font-size: 35px;
            margin-bottom: 30px;
        }
    }
}
</style>
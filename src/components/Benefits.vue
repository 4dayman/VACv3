<template>
    <div class="benefits_wrapper">
        <div class="benefits">
            <div class="benefits_left">
                <h2>Benefits of getting an auto loan with VAC</h2>
                <p>For many people getting a reasonable auto loan is the best way for them to get a new car. However, the benefits of getting the right loan go beyond just being able to drive a nice vehicle.</p>
                <h3>When you work with VAC, there are never any hidden costs or fees! We lay out all the terms and conditions so that you know exactly what details of the loan are before you sign anything.</h3>
                <router-link to="/quiz/0">
                    <main-button class="colored">Request a car</main-button>
                </router-link>
            </div>
            <div class="benefits_right">
                <div class="benefits_right_img">
                    <img src="../assets/FordEscape.png" alt="FordEscape">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MainButton from '../components/UI/MainButton.vue'
export default {
    components: {
        MainButton,
    }
}
</script>
<style lang="scss" scoped>
.benefits_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.benefits{
    margin-top: 60px;
    // max-height: 408px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 49px;
    margin-bottom: 220px;
    @media (max-width: 1024px) {
        margin-bottom: 160px;
        padding: 0 84px;
        grid-template-columns: 1fr;
        row-gap: 60px;
    }
    @media (max-width: 768px) {
        padding: 0px;
        row-gap: 50px;
        margin-bottom: 80px;
    }
}
.benefits_left{
    text-align: left;
    @media (max-width: 460px) {
        display: flex;
        flex-direction: column;
    }
    h2 {
        max-width: 520px;
        font-weight: 700;
        font-size: 45px;
        line-height: 140.5%;
        color: #41456B;
        margin-bottom: 20px;
        @media (max-width: 460px) {
            font-size: 30px;
        }
    }
    h3{
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456B;
        margin-bottom: 60px;
        @media (max-width: 460px) {
        }
    }
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #606276;
        margin-bottom: 20px;
    }
}
.benefits_right{
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.benefits_right_img{
    max-width: 542px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
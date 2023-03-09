<template>
    <div class="mission_wrapper">
        <div class="mission">
            <div class="mission_left">
                <h2>Our credit policy</h2>
                <p>You want to secure a loan that works for your budget. Here at VAC we work with Canada’s largest lenders to help you find the best interest rates and terms for your auto loan.</p>
                <router-link to="/quiz/0">
                    <main-button class="colored">Request a car</main-button>
                </router-link>
            </div>
            <div class="mission_right">
                <div class="mission_right_img">
                    <img src="../assets/main_swiper/TRUCK.png" alt="kia">
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
.mission_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.mission{
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 66px;
    margin-bottom: 220px;
    @media (max-width: 1024px) {
        margin-bottom: 160px;
        padding: 0 84px;
        grid-template-columns: 1fr;
        row-gap: 40px;
    }
    @media (max-width: 560px) {
        padding: 0px;
        row-gap: 30px;
        margin-bottom: 80px;
    }
}
.mission_left{
    padding: 60px;
    background: #FFFFFF;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    text-align: left;
        @media (max-width: 460px) {
            display: flex;
            flex-direction: column;
            padding: 20px;
        }

    h2{
        font-weight: 700;
        font-size: 45px;
        line-height: 140.5%;
        color: #41456B;
        margin-bottom: 20px;
                @media (max-width: 460px) {
                    font-size: 30px;
                    margin-bottom: 10px;
                }

    }
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #606276;
        margin-bottom: 60px;
        @media (max-width: 460px) {
            margin-bottom: 30px;
        }
    }
}
.mission_right{
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.mission_right_img{
    max-width: 542px;
    img{
        width: 100%;
        height: 100%;object-fit: cover;
    }
}
</style>
<template>
    <div class="best_price_wrapper">
        <div class="best_price">
            <div class="best_price_left">
                <h2>Get your dream car</h2>
                <p>We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.</p>
                <p>We also hated how choosing a car and figuring out the financing for the vehicle were treated as totally separate processes! Instead of dealing with a salesperson, then being handed off to a closer, and then shuffled over to a finance manager, we wanted to create a way for people to buy a car and only deal with a single person for the entire process.</p>
            </div>
            <div class="best_price_right">
                <h3>We think that VAC is the best way to buy a car in Canada. Try it for yourself and see how much time and money you can save.</h3>
                <p>There are never any hidden fees or costs. We never ask you to sign anything until we have explained it clearly and you have had a chance to read it.</p>
                <router-link to="/quiz/0">
                    <main-button class="colored">Request a car</main-button>
                </router-link>
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
.best_price_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.best_price{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 101px;
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
.best_price_left{
    text-align: left;

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
        &:not(last-child) {
            margin-bottom: 20px;
        }
        @media (max-width: 460px) {
            &:not(last-child) {
                margin-bottom: 10px;
            }
        }
    }
}
.best_price_right{
    text-align: left;
    @media (max-width: 460px) {
        display: flex;
        flex-direction: column;
    }

    h3{
        font-weight: 700;
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
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
</style>
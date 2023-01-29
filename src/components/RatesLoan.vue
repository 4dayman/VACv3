<template>
    <div class="rates_wrapper">
        <div class="retas_title">Interest rates and loan terms</div>
        <div class="rates">
            <div class="rates_left">
                <div class="rates_subtitle">
                    <img src="../assets/Procent.svg" alt="">
                    <h3>What are my interest rate options?</h3>
                </div>
                <p>We work to secure customized auto loans from Canada’s largest lenders. Your interest rate is critical for determining the total cost of your auto financing. Interest rates are based on many factors including the loan amount, your credit score, and your budget. We help you find the lowest interest rates available for your auto loan.</p>
            </div>
            <div class="rates_right">
                <div class="rates_subtitle">
                    <img src="../assets/Clock.svg" alt="">
                    <h3>How long will my loan term be?</h3>
                </div>
                <p>Our goal is to find the right car and the right loan for you. Because we have relationships with so many different lenders, we can help you find the right term length for your budget. The longer the loan is, often the lower the monthly payments will be—but the more expensive the loan will be overall. Most of the loans we secure for our clients are between 36 and 72 months.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {
    }
}
</script>
<style lang="scss" scoped>
.rates_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
}
.retas_title{
    text-align: left;
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456B;
}
.rates{
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    margin-bottom: 220px;
    @media (max-width: 1024px) {
        margin-bottom: 160px;
        padding: 0 84px;
        grid-template-columns: 1fr;
        row-gap: 40px;
    }
    @media (max-width: 768px) {
        padding: 0px;
        row-gap: 30px;
        margin-bottom: 80px;
    }
}
.rates_subtitle{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    img {
        width: 60px;
        height: 60px;
        margin-right: 20px;
    }
    h3 {
        max-width: 320px;
        font-weight: 700;
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
        color: #41456B;        
    }
}
.rates_left,
.rates_right{
    padding: 60px;
    background: #FFFFFF;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    text-align: left;
    max-height: 413px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 20px;
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
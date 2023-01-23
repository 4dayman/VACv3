<template>
    <div class="vac_wrapper">
        <div class="vac">
            <div class="vac_left">
                <div class="vac_left_img">
                    <img src="../assets/Nissan.png" alt="Nissan">
                </div>
            </div>
            <div class="vac_right">
                <h2>VAC is convenience and transparency</h2>
                <p>We want to make simple for you to find the car you want. We also want to make sure you are 100% comfortable with the terms of the conditions of your auto loan.</p>
                <p>Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.vac_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
}
.vac{
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 84px;
    margin-bottom: 220px;
    @media (max-width: 1024px) {
        margin-bottom: 160px;
        padding: 0 84px;
        // grid-template-columns: 1fr;
        display: flex;
        flex-direction: column-reverse;
        row-gap: 40px;
    }
    @media (max-width: 560px) {
        padding: 0px;
        row-gap: 30px;
        margin-bottom: 80px;
    }
}
.vac_right{
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
.vac_left{
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.vac_left_img{
    // max-width: 542px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
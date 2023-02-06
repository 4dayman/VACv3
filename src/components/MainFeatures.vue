<template>
    <div class="features_wrapper">
        <div class="features">
            <div class="features_left">
                <img src="../assets/FeaturesPhoto.png" alt="">
            </div>
            <div class="features_right">
                <div class="features_right_content">
                    <h2>Main features</h2>
                    <p>We are your one stop shop. We believe that vehicle shopping should be a fun and painless process and with years of experience, we make it just that.</p>
                </div>
                <div class="features_right_cards">
                    <div class="card_item">
                        <h3>7,988+</h3>
                        <p>Sold Cars</p>
                    </div>
                    <div class="card_item">
                        <h3>123</h3>
                        <p>Working Experts</p>
                    </div>
                    <div class="card_item">
                        <h3>1560+</h3>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.features_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.features{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 60px;
    margin-bottom: 220px;
    @media (max-width: 1024px) {
        margin-bottom: 160px;
        padding: 0 84px;
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
.features_left{
    img{
        border-radius: 5px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.features_right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
    }

}
.features_right_content {
    text-align: start;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0 auto;
    }
    @media (max-width: 425px) {
        width: 100%;
    }
    h2 {
        font-weight: 700;
        font-size: 45px;
        line-height: 140.5%;
        color: #41456B;
        margin-bottom: 20px;
        @media (max-width: 768px) {
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
        max-width: 549px;
        margin-bottom: 40px;
        @media (max-width: 768px) {
            margin-bottom: 20px;
        }
    }
}
.features_right_cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
    column-gap: 40px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        row-gap: 10px;
        width: 100%;
    }
}
.card_item {
    width: 280px;
    height: 143px;
    background: #FFFFFF;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 35px;
    @media (max-width: 768px) {
        width: 100%;
        height: 116px;
        margin: 0 auto;
    }
    h3{
        font-weight: 700;
        font-size: 45px;
        line-height: 140.5%;
        color: #41456B;
        margin-bottom: 5px;
        @media (max-width: 768px) {
            font-size: 30px;
        }
    }
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #606276;
    }
}
</style>
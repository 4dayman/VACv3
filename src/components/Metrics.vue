<template>
    <div class="metrics_wrapper">
        <div class="metrics">
            <div class="metrics_top">
                <div class="metrics_top_content">
                    <h2>Happy customers</h2>
                    <p>Since 2017, we have helped thousands of Canadians get their dream vehicles from the comfort of their homes. </p>
                </div>
                <div class="metrics_top_cards">
                    <div class="card_item">
                        <h3>7,988+</h3>
                        <p>Sold Cars</p>
                    </div>
                    <div class="card_item">
                        <h3>16,974+</h3>
                        <p>Vehicles To Choose From</p>
                    </div>
                    <div class="card_item">
                        <h3>123</h3>
                        <p>Experts Across Canada</p>
                    </div>
                </div>
            </div>
            <div class="metrics_bottom">
                <div class="metrics_bottom_content">
                    <p>What are you waiting?
                    Get started right now!</p>
                    <main-button class="colored" >request a car</main-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MainButton from '@/components/UI/MainButton.vue'
export default {
    components: {
        MainButton
    }
}
</script>

<style lang="scss" scoped>
.metrics_wrapper {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.metrics {
    height: 336px;
    margin-bottom: 220px;
    @media (max-width: 1024px) {
        height: 702px;
        margin-bottom: 160px;
    }
    @media (max-width: 768px) {
        height: 668px;
        margin-bottom: 80px;
    }
}
.metrics_top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

}
.metrics_top_content {
    text-align: start;
    @media (max-width: 768px) {
        width: 80%;
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
.metrics_top_cards {
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
        width: 80%;
        height: 116px;
        margin: 0 auto;
    }
    @media (max-width: 425px) {
        width: 100%;
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
.metrics_bottom {
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    @media (max-width: 1024px) {
        max-width: 601px;
        align-items: center;
    }
    @media (max-width: 768px) {
        justify-content: center;
    }

}
.metrics_bottom_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: -160px;
    @media (max-width: 1024px) {
        margin-top: 40px;
    }
    @media (max-width: 768px) {
        margin-top: 20px;
        align-items: stretch;
    }

    p{
        width: 320px;
        font-weight: 700;
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
        color: #41456B;
        text-align: left;
        margin-bottom: 40px;
        @media (max-width: 768px) {
            margin-bottom: 20px;
        }
    }
}
</style>
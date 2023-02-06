<template>
    <div class="calculator_wrapper">
        <div class="calculator">
            <div class="calculator_top">
                <h2>Let’s figure out how much you can afford</h2>
                <p>Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.</p>
            </div>
            <div class="calculator_bottom">
                <div class="calculator_settings">
                    <div class="settings_tab">
                        <main-button 
                            v-for="(button, index) in buttons"
                            :key="index"
                            class="white" 
                            :class="{'active': active === index}"
                            @click="selectTab(index)"
                        >
                            {{button.slot}}
                        </main-button>
                        <!-- <main-button class="white">average</main-button>
                        <main-button class="white">good</main-button> -->
                    </div>
                    <div class="settings_amount">
                        <div class="amount_value">
                            <h4>Loan Amount</h4>
                            <p>$ {{ amountValue }}</p>
                        </div>
                        <div class="amount_fill">
                            <input 
                                class="range" 
                                type="range" 
                                min="10000" 
                                max="200000" 
                                step="500"
                                v-model.number="amountValue"
                                @change="Priceround"
                            >
                            <input 
                                class="fill" 
                                type="range" 
                                min="10000" 
                                max="200000" 
                                step="500"
                                v-model.number="amountValue"
                                @change="Priceround"
                            >
                        </div>
                    </div>
                    <div class="settings_duration">
                        <div class="duration_value">
                            <h4>Loan Duration</h4>
                            <p>{{ amountDuration }} <span>month</span></p>
                        </div>
                        <div class="duration_fill">
                            <input
                                class="range" 
                                type="range"
                                min="6"
                                max="48"
                                step="1"
                                v-model.number="amountDuration"
                                @change="Priceround"
                            >
                            <input
                                class="fill" 
                                type="range"
                                min="6"
                                max="48"
                                step="1"
                                v-model.number="amountDuration"
                                @change="Priceround"
                            >
                        </div>
                    </div>
                </div>
                <div class="calculator_amount">
                    <div class="amount_monthly_weekly_biweekly">
                        <div class="amount_bi_weekly">
                            <h4>Bi-Weekly Payment</h4>
                            <p>$ {{PriceBiWeekly}}</p>
                        </div>
                        <div class="amount_monthly_weekly">
                            <div class="amount_monthly">
                                <h4>Monthly Payment</h4>
                                <p>$ {{PriceMonthly}}</p>
                            </div>
                            <div class="amount_weekly">
                                <h4>Weekly Payment</h4>
                                <p>$ {{PriceWeekly}}</p>
                            </div>
                        </div>
                    </div>
                    <main-button class="colored calcBtn">request a car</main-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MainButton from '@/components/UI/MainButton.vue'

export default {
    components: {
        MainButton,
    },
    data() {
        return {
            buttons: [
                {slot: 'poor', amountValue: 30000, amountDuration: 12},
                {slot: 'average', amountValue: 50000, amountDuration: 18},
                {slot: 'good', amountValue: 70000, amountDuration: 24}
            ],
            amountValue: 30000,
            amountDuration: 12,
            PriceMonthly: 2500,
            PriceBiWeekly: 1250,
            PriceWeekly: 625,
            active: 0
        }
    },
    methods: {
        Priceround() {
            this.PriceMonthly = Math.round(this.amountValue / this.amountDuration)
            this.PriceBiWeekly = Math.round((this.amountValue / this.amountDuration) / 2)
            this.PriceWeekly = Math.round((this.amountValue / this.amountDuration) / 4 )
            return this.PriceMonthly, this.PriceBiWeekly, this.PriceWeekly
        },
        selectTab(index){
            // console.log('Click', index)
            this.amountValue = this.buttons[index].amountValue
            this.amountDuration = this.buttons[index].amountDuration
            this.PriceMonthly = Math.round(this.amountValue / this.amountDuration)
            this.PriceBiWeekly = Math.round((this.amountValue / this.amountDuration) / 2)
            this.PriceWeekly = Math.round((this.amountValue / this.amountDuration) / 4 )
            this.active = index
        }
    }
}
</script>

<style lang="scss" scoped>
.calculator_wrapper{
    max-width: 1230px;
    padding: 0 24px;
    margin: 0 auto;
    transition: all ease 0.5s;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.calculator {
    margin-bottom: 40px;
}

.calculator_top{
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    text-align: left;
    column-gap: 101px;
    margin-bottom: 60px;
    @media (max-width: 560px) {
        grid-template-columns: 1fr;
        row-gap: 10px;
    }
    h2{
        max-width: 500px;
        font-weight: 700;
        font-size: 45px;
        line-height: 140.5%;
        color: #41456B;
        @media (max-width: 560px) {
            font-size: 30px;
            max-width: 320px;
        }

    }
    p{
        max-width: 599px;
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #606276;
    }
}
.calculator_bottom {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 30px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr ;
        
    }
}
.calculator_settings,
.calculator_amount {
    background: #FFFFFF;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 60px 60px 112px 60px;
    @media (max-width: 768px) {
        padding: 40px;
    }
    @media (max-width: 460px) {
        padding: 20px;
    }

}
.calculator_settings{
    gap: 60px;
    max-width: 800px;
    @media (max-width: 768px) {
        width: 100%;
    }
}
.calculator_amount{
    max-width: 370px;
    padding-bottom: 60px;
    @media (max-width: 768px) {
        max-width: 100%;
        padding-bottom: 40px;
    }

    h4{
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #606276;
        margin-bottom: 1px;
    }
}

.settings_amount, 
.settings_duration {
    width: 100%;
    input{
        width: 100%;
    }
}
.duration_fill,
.amount_fill {
    position: relative;
}
.range,
.fill {
    height: 8px;
    -webkit-appearance: none;
    appearance: none;
    background: #d7d7d7;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
}
.range{
    position: relative;
    z-index: 1;
    overflow: hidden;
}
.fill {
    position: absolute;
    left: 0;
    top: 4px;
    height: 8px;
    overflow: visible;
    cursor: pointer;
}
.fill::-webkit-slider-thumb,
.range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background: #7481FF;
    border-radius: 2px;
    cursor: pointer;
    border: 1px solid #FFFFFF;
}
.fill::-webkit-slider-thumb{
    background: #7481FF;
}
.range::-webkit-slider-thumb {
    box-shadow: -407px 0px 0px 400px #7481FF;
}
.amount_value,
.duration_value {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 29px;
    h4{
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456B;
    }
    p{
        font-weight: 700;
        font-size: 25px;
        line-height: 35px;
        text-align: right;
        letter-spacing: 2%;
        color: #41456B;
    }
    span{
        font-weight: 700;
        font-size: 16px;
        line-height: 14px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #606276;
    }
}
.amount_bi_weekly,
.amount_monthly,
.amount_weekly {
    text-align: left;
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456B;
}
.amount_bi_weekly{
    font-size: 45px;
    color: #7481FF;
    margin-bottom: 30px;
}
.amount_monthly {
    margin-bottom: 20px;
}
.amount_weekly{
    margin-bottom: 40px;
}
.amount_monthly_weekly_biweekly{
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    @media (max-width: 560px) {
        flex-direction: column;
        align-items: flex-start;
    }
}
.amount_monthly_weekly{
    @media (max-width: 768px) {
        display: flex;
        gap: 40px;
    }
    @media (max-width: 560px) {
        gap: 10px;
        width: 100%;
        justify-content: space-between;
    }
}
.calcBtn {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    transition: all ease 0.5s;
    @media (max-width: 768px) {
        width: 50%;
    }
    @media (max-width: 560px) {
        width: 100%;
    }
}
</style>
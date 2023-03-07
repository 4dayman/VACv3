<template>
    <div class="quiz_wrapper">
        <div class="quiz">
            <div class="quiz_progres">
                <div class="progres_fill"></div>
            </div>
            <!-- ---- Step #1 ---- -->
            <div class="quiz_change" v-show="step === 1">
                <h2>What's your budget?</h2>
                <p>Find vehicle options that fit your budget.</p>
                <div class="select">
                    <div 
                        v-for="(month, i) in months"
                        :key="i"
                        @click="selectPermonth(i)" 
                        :class="month.selected ? 'active' : ''" 
                        class="select_btn"
                    >{{ month.text }}</div>
                    <div v-show="notSelect" class="select_error">A choice is needed</div>
                </div>
            </div>
            <!-- ---- Step #2 ---- -->
            <div class="quiz_change" v-show="step === 2">
                <h2>What's your employment status?</h2>
                <p>Your employment status will help determine the best vehicle and financing options for you.</p>
                <div class="select">
                    <div 
                        v-for="(status, i) in statuss"
                        :key="i"                         
                        @click="selectStatus(i)" 
                        :class="status.selected ? 'active' : ''" 
                        class="select_btn"
                    >{{ status.text }}</div>
                    <div v-show="notSelect" class="select_error">A choice is needed</div>
                </div>
            </div>
            <!-- ---- Step #3 ---- -->
            <div class="quiz_change" v-show="step === 3">
                <h2>Enter your monthly income</h2>
                <p>Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.</p>
                <div class="select input">
                    <input class="monthly_income" type="text" placeholder="Monthly income">
                    <div v-show="notSelect" class="select_error">Value is required</div>
                </div>
            </div>
            <div class="quiz_continue">
                <button @click="nextStep" class="continue_btn" type="button">Continue</button>
                <button @click="prevStep" v-show="step > 1" class="back_btn" type="button"><img src="../assets/Arrow-Bottom.svg" alt="arrow">Back</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() { 
        return {
            months: [
                {selected: false, text: 'Under $250/Month'},
                {selected: false, text: '$250 - 374/Month'},
                {selected: false, text: '$250 - 374/Month'},
                {selected: false, text: 'Over $500/Month'},
            ],
            statuss: [
                {selected: false, text: 'Employed'},
                {selected: false, text: 'Self-Employed'},
                {selected: false, text: 'Student'},
                {selected: false, text: 'Retired / Pension'},
                {selected: false, text: 'Other'},
            ],
            defaltProgres: 10,
            progresFill: '10%',
            step: 1,
            gotSelect: false,
            notSelect: false,
        }
    },
    methods: {
        nextStep() { 
            if (this.gotSelect) {
                this.step++
                this.progresFill = this.defaltProgres * this.step + '%'
                this.gotSelect = false
            } else { this.notSelect = true}
        },
        prevStep() {
            this.step--
            this.progresFill = this.defaltProgres * this.step + '%'
            this.gotSelect = false
            this.notSelect = false
            this.months = this.months.map((month) => {
                month.selected = false
                return month;
            })
            this.statuss = this.statuss.map((status) => {
                status.selected = false
                return status;
            })
        },
        selectPermonth(i) {
            this.months = this.months.map((month, index) => {
                if (index === i) {
                    month.selected = !month.selected
                    this.gotSelect = true
                    this.notSelect = false
                } else { month.selected = false }
                return month;
            })
        },
        selectStatus(i) {
            this.statuss = this.statuss.map((status, index) => {
                if (index === i) {
                    status.selected = !status.selected
                    this.gotSelect = true
                    this.notSelect = false
                } else { status.selected = false }
                return status;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.quiz_wrapper {
    max-width: 454px;
    margin: 0 auto;
    padding: 0 20px;
}
.quiz{
    margin: 40px 0;

}
.quiz_progres{
    width: 100%;
    height: 8px;
    position: relative;
    overflow-x: hidden;
    background: #F1F1F1;
    border-radius: 2px;
    margin-bottom: 60px;
}
.progres_fill{
    position: absolute;
    top: 0;
    left: 0;
    height: 8px;
    transition: all 0.4s;
    width: v-bind(progresFill);
    background: #7380FF;
    border-radius: 2px;
}
.quiz_change {
    text-align: left;
    transition: all 0.4s;
    h2{
        font-weight: 700;
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
        color: #41456B;
        margin-bottom: 5px;
    }
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 159%;
        color: #7C7A84;
        margin-bottom: 40px;
    }
}
.select {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 14px;
    row-gap: 10px;
}
.select.input{
    position: relative;
    grid-template-columns: 1fr;
}
.select_btn {
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    color: #7C7A84;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    padding: 15px;
    cursor: pointer;
}
.select_btn.active{
    color: #7481FF;
    border: 1px solid #7481FF;
}
.quiz_continue {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 14px;
    margin-top: 40px;
    .continue_btn{
        background: #7481FF;
        border-radius: 2px;
        font-weight: 700;
        font-size: 16px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #FFFFFF;
        padding: 15px;
    }
    .back_btn{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 16px;
        line-height: 14px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #606276;
        background: none;
        img{
            height: 16px;
            margin-right: 15px;
        }
    }
}
.select_error{
    position: absolute;
    bottom: -20px;
    left: 0;
    font-size: 14px;
    text-align: left;
    color: rgb(241, 86, 86);
}
.monthly_income{
    width: 100%;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 2px;
    padding: 10px 20px;

}
</style>
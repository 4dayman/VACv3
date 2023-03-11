<template>
    <div class="quiz_wrapper">
        <div class="quiz">
            <div class="quiz_progres" v-show="step !== 9">
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
                <div class="select input_fill">
                    <input 
                        @focus="incomeFocus"
                        @change="incomeChange"
                        v-model.trim="income"
                        class="monthly_income" 
                        type="text" 
                        placeholder="Monthly income">
                    <div v-show="notSelect" class="select_error">Value is required</div>
                </div>
            </div>
            <!-- ---- Step #4 ---- -->
            <div class="quiz_change" v-show="step === 4">
                <h2>How long have you been earning this income?</h2>
                <p>Your income details help us make sure your vehicle payments are easy and affordable.</p>
                <div class="select">
                    <input 
                        @focus="yearsFocus"
                        @change="yearsChange"
                        v-model.trim="years"
                        class="monthly_income" 
                        type="text" 
                        placeholder="Years">
                    <input 
                        @focus="mounthsFocus"
                        @change="mounthsChange"
                        v-model.trim="mounths"
                        class="monthly_income" 
                        type="text" 
                        placeholder="Mounths">
                    <div v-show="notSelect" class="select_error">All fields values is required</div>
                </div>
            </div>
            <!-- ---- Step #5 ---- -->
            <div class="quiz_change" v-show="step === 5">
                <h2>How long receiving?</h2>
                <p>Your income details help us make sure your vehicle payments are easy and affordable.</p>
                <div class="select input_fill">
                    <input 
                        @focus="timeFocus"
                        @change="timeChange"
                        v-model.trim="time"
                        class="monthly_income" 
                        type="text" 
                        placeholder="Time">
                    <div v-show="notSelect" class="select_error">Value is required</div>
                </div>
            </div>
            <!-- ---- Step #6 ---- -->
            <div class="quiz_change" v-show="step === 6">
                <h2>Where do you live?</h2>
                <p>Providing your location helps find the best deals near you.</p>
                <div class="select input_fill">
                    <input 
                        @focus="streetFocus"
                        @change="streetChange"
                        v-model.trim="street"
                        class="monthly_income" 
                        type="text" 
                        placeholder="Street address">
                    <input 
                        @focus="cityFocus"
                        @change="cityChange"
                        v-model.trim="city"
                        class="monthly_income" 
                        type="text" 
                        placeholder="City">
                </div>
                <div class="select">
                    <input 
                        @focus="provinceFocus"
                        @change="provinceChange"
                        v-model.trim="province"
                        class="monthly_income" 
                        type="text" 
                        placeholder="Province">
                    <input 
                        @focus="postalFocus"
                        @change="postalChange"
                        v-model.trim="postal"
                        class="monthly_income" 
                        type="text" 
                        placeholder="Postal code">
                    <div v-show="notSelect" class="select_error">All fields values is required</div>
                </div>
            </div>
            <!-- ---- Step #7 ---- -->
            <div class="quiz_change" v-show="step === 7">
                <h2>When were you born?</h2>
                <p></p>
                <div class="select born">
                    <input 
                        @focus="bornYearFocus"
                        @change="bornYearChange"
                        v-model.trim="bornYear"
                        class="monthly_income" 
                        type="text" 
                        placeholder="Year">
                    <input 
                        @focus="bornMounthFocus"
                        @change="bornMounthChange"
                        v-model.trim="bornMounth"
                        class="monthly_income" 
                        type="text" 
                        placeholder="Mounth">
                    <input 
                        @focus="bornDayFocus"
                        @change="bornDayChange"
                        v-model.trim="bornDay"
                        class="monthly_income" 
                        type="text" 
                        placeholder="Day">
                    <div v-show="notSelect" class="select_error">All fields values is required</div>
                </div>
            </div>
            <!-- ---- Step #8 ---- -->
            <div class="quiz_change" v-show="step === 8">
                <h2>Congratulations! Last step.</h2>
                <p>Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. </p>
                <div class="select">
                    <input 
                        @focus="firstNameFocus"
                        @change="firstNameChange"
                        v-model.trim="firstName"
                        class="monthly_income" 
                        type="text" 
                        placeholder="First name">
                    <input 
                        @focus="lastNameFocus"
                        @change="lastNameChange"
                        v-model.trim="lastName"
                        class="monthly_income" 
                        type="text" 
                        placeholder="Last name">
                </div>
                <div class="select input_fill">
                    <input 
                        @focus="emailFocus"
                        @change="emailChange"
                        v-model.trim="email"
                        class="monthly_income" 
                        type="email" 
                        placeholder="Email">
                    <input 
                        @focus="phoneFocus"
                        @change="phoneChange"
                        v-model.trim="phone"
                        class="monthly_income" 
                        type="phone" 
                        placeholder="Phone number">
                    <div v-show="notSelect" class="select_error">All fields values is required</div>
                </div>
            </div>
            <!-- ---- Step #9 ---- -->
            <div class="quiz_change" v-show="step === 9">
                <div class="success_check">
                    <img src="../assets/socialIcons/Success.svg" alt="">
                </div>
                <h2>Application successful!</h2>
                <p>Your response was successfully submitted. Thank you! Our team will reach out to you shortly.</p>
                <span>Confirmation number:</span>
                <div class="select">
                    <input 
                        v-model.trim="randomNumber"
                        class="monthly_income" 
                        type="text" >
                </div>
            </div>
            <div class="quiz_continue" v-show="step !== 9">
                <button @click="nextStep" class="continue_btn" type="button">Continue</button>
                <button @click="prevStep" v-show="step > 1" class="back_btn" type="button"><img src="../assets/Arrow-Bottom.svg" alt="arrow">Back</button>
            </div>
            <router-link to="/" class="quiz_continue" v-show="step == 9">
                <button @click="nextStep" class="continue_btn" type="button">Go to main page</button>
            </router-link>
        </div>
    </div>

</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { minLength, required, email, numeric } from '@vuelidate/validators'

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
            defaltProgres: 11,
            progresFill: '10%',
            step: 8,
            gotSelect: false,
            notSelect: false,
            income: '',
            years: '',
            mounths: '',
            time: '',
            street: '',
            city: '',
            province: '',
            postal: '',
            bornYear: '',
            bornMounth: '',
            bornDay: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            // confNumber: '0002466-1vwrh0',
            str: '0123456789qwertyuiopasdfghjklzxcvbnm',
            result: ''
        }
    },
    props: {
        cars: {
            type: Array,
            default: () => []
        },

    },
    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            email: { required, email },
        }
    },
    created() {
        const car = this.cars.find(car => car.id == this.$route.params.id)
        if (car) {
            this.car = car
            this.price = car.price
        }
    },
    computed: {
        randomNumber() {
            return this.confNumber = Math.round(Math.random() * 10000000)
        },
    },

    methods: {
        nextStep() { 
            if (this.gotSelect && !this.v$.$error) {
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
            this.income = ''
            this.years = ''
            this.mounths = ''
            this.time = ''
            this.street = ''
            this.city = ''
            this.province = ''
            this.postal = ''
            this.bornYear = ''
            this.bornMounth = ''
            this.bornDay = ''
            this.firstName = ''
            this.lastName = ''
            this.email = ''
            this.phone = ''
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
        },
        incomeFocus() { 
            this.notSelect = false
        },
        incomeChange() { 
            if (this.income !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        yearsFocus() {
            this.notSelect = false
        },
        yearsChange() {
            if (this.years !== '' && this.mounths !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        mounthsFocus() {
            this.notSelect = false
        },
        mounthsChange() {
            if (this.mounths !== '' && this.years !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        timeFocus() {
            this.notSelect = false
        },
        timeChange() {
            if (this.time !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        streetFocus() {
            this.notSelect = false
        },
        streetChange() {
            if (this.street !== '' && this.city !== '' && this.province !== '' && this.postal !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        cityFocus() {
            this.notSelect = false
        },
        cityChange() {
            if (this.street !== '' && this.city !== '' && this.province !== '' && this.postal !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        provinceFocus() {
            this.notSelect = false
        },
        provinceChange() {
            if (this.street !== '' && this.city !== '' && this.province !== '' && this.postal !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        postalFocus() {
            this.notSelect = false
        },
        postalChange() {
            if (this.street !== '' && this.city !== '' && this.province !== '' && this.postal !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        bornYearFocus() {
            this.notSelect = false
        },
        bornYearChange() {
            if (this.bornYear !== '' && this.bornMounth !== '' && this.bornDay !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        bornMounthFocus() {
            this.notSelect = false
        },
        bornMounthChange() {
            if (this.bornYear !== '' && this.bornMounth !== '' && this.bornDay !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        bornDayFocus() {
            this.notSelect = false
        },
        bornDayChange() {
            if (this.bornYear !== '' && this.bornMounth !== '' && this.bornDay !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        firstNameFocus() {
            this.notSelect = false
        },
        firstNameChange() {
            if (!this.v$.$error && this.firstName !== '' && this.lastName !== ''  && this.phone !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        lastNameFocus() {
            this.notSelect = false
        },
        lastNameChange() {
            if (!this.v$.$error && this.firstName !== '' && this.lastName !== ''  && this.phone !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        emailFocus() {
            this.notSelect = false
        },
        emailChange() {
            if (!this.v$.$error && this.firstName !== '' && this.lastName !== '' && this.phone !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        phoneFocus() {
            this.notSelect = false
        },
        phoneChange() {
            if (!this.v$.$error && this.firstName !== '' && this.lastName !== '' && this.phone !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
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
    margin-top: 10px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 10px;
    @media (max-width: 400px) {
        grid-template-columns: 1fr;
    }
}
.select.input_fill{
    position: relative;
    grid-template-columns: 1fr;
}
.select.born{
    position: relative;
    grid-template-columns: 2fr 1fr 1fr;
    @media (max-width: 400px) {
        grid-template-columns: 1fr;
    }

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
    &:hover{
        border: 1px solid #7481FF;
    }
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
        @media (max-width: 400px) {
            grid-row: 1;
        }
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
    &::placeholder{
        font-weight: 500;
        font-size: 16px;
        line-height: 159%;
        color: #D7D7D7;
    }
    &:focus{
        border: 1px solid #606276;
    }
}
.success_check{
    margin-bottom: 20px;
    width: 70px;
    height: 70px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
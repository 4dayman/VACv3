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
                <div class="quiz_continue" v-show="step !== 9">
                    <button @click="nextStep1" class="continue_btn" type="button">Continue</button>
                    <button @click="prevStep" v-show="step > 1" class="back_btn" type="button"><img src="../assets/Arrow-Bottom.svg" alt="arrow">Back</button>
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
                <div class="quiz_continue" v-show="step !== 9">
                    <button @click="nextStep2" class="continue_btn" type="button">Continue</button>
                    <button @click="prevStep" v-show="step > 1" class="back_btn" type="button"><img src="../assets/Arrow-Bottom.svg" alt="arrow">Back</button>
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
                        :class="v$.income.$error ? 'invalid' : ''"
                        type="text" 
                        placeholder="Monthly income">
                    <div class="select_error" v-if="v$.income.$error">{{ v$.income.$errors[0].$message }}</div>
                    <!-- <div v-show="notSelect" class="select_error">Value is required</div> -->
                </div>
                <div class="quiz_continue" v-show="step !== 9">
                    <button @click="nextStep3" class="continue_btn" type="button">Continue</button>
                    <button @click="prevStep" v-show="step > 1" class="back_btn" type="button"><img src="../assets/Arrow-Bottom.svg" alt="arrow">Back</button>
                </div>
            </div>
            <!-- ---- Step #4 ---- -->
            <div class="quiz_change" v-show="step === 4">
                <h2>How long have you been earning this income?</h2>
                <p>Your income details help us make sure your vehicle payments are easy and affordable.</p>
                <div class="select">
                    <div>
                        <input 
                            @focus="yearsFocus"
                            @change="yearsChange"
                            v-model.trim="years"
                            class="monthly_income" 
                            :class="v$.years.$error ? 'invalid' : ''"
                            type="text" 
                            placeholder="Years">
                        <div class="select_error" v-if="v$.years.$error ">{{ v$.years.$errors[0].$message }}</div>
                    </div>
                    <div>
                        <input 
                            @focus="mounthsFocus"
                            @change="mounthsChange"
                            v-model.trim="mounths"
                            class="monthly_income" 
                            :class="v$.mounths.$error ? 'invalid' : ''"
                            type="text" 
                            placeholder="Mounths">
                        <div class="select_error" v-if="v$.mounths.$error">{{ v$.mounths.$errors[0].$message }}</div>
                    </div>
                    <!-- <div v-show="notSelect" class="select_error">All fields values is required</div> -->
                </div>
                <div class="quiz_continue" v-show="step !== 9">
                    <button @click="nextStep4" class="continue_btn" type="button">Continue</button>
                    <button @click="prevStep" v-show="step > 1" class="back_btn" type="button"><img src="../assets/Arrow-Bottom.svg" alt="arrow">Back</button>
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
                        :class="v$.time.$error ? 'invalid' : ''"
                        type="text" 
                        placeholder="Time">
                    <div class="select_error" v-if="v$.time.$error">{{ v$.time.$errors[0].$message }}</div>
                    <!-- <div v-show="notSelect" class="select_error">Value is required</div> -->
                </div>
                <div class="quiz_continue" v-show="step !== 9">
                    <button @click="nextStep5" class="continue_btn" type="button">Continue</button>
                    <button @click="prevStep" v-show="step > 1" class="back_btn" type="button"><img src="../assets/Arrow-Bottom.svg" alt="arrow">Back</button>
                </div>
            </div>
            <!-- ---- Step #6 ---- -->
            <div class="quiz_change" v-show="step === 6">
                <h2>Where do you live?</h2>
                <p>Providing your location helps find the best deals near you.</p>
                <div class="select input_fill">
                    <div>
                        <input 
                            @focus="streetFocus"
                            @change="streetChange"
                            v-model.trim="street"
                            class="monthly_income" 
                            :class="v$.street.$error ? 'invalid' : ''"
                            type="text" 
                            placeholder="Street address">
                        <div class="select_error" v-if="v$.street.$error">{{ v$.street.$errors[0].$message }}</div>
                    </div>
                    <div>
                        <input 
                            @focus="cityFocus"
                            @change="cityChange"
                            v-model.trim="city"
                            class="monthly_income" 
                            :class="v$.city.$error ? 'invalid' : ''"
                            type="text" 
                            placeholder="City">
                        <div class="select_error" v-if="v$.city.$error">{{ v$.city.$errors[0].$message }}</div>
                    </div>
                </div>
                <div class="select">
                    <div>
                        <input 
                            @focus="provinceFocus"
                            @change="provinceChange"
                            v-model.trim="province"
                            class="monthly_income" 
                            :class="v$.province.$error ? 'invalid' : ''"
                            type="text" 
                            placeholder="Province">
                        <div class="select_error" v-if="v$.province.$error">{{ v$.province.$errors[0].$message }}</div>
                    </div>
                    <div>
                        <input 
                            @focus="postalFocus"
                            @change="postalChange"
                            v-model.trim="postal"
                            class="monthly_income" 
                            :class="v$.postal.$error ? 'invalid' : ''"
                            type="text" 
                            placeholder="Postal code">
                        <div class="select_error" v-if="v$.postal.$error">{{ v$.postal.$errors[0].$message }}</div>
                    </div>
                    <!-- <div v-show="notSelect" class="select_error">All fields values is required</div> -->
                </div>
                <div class="quiz_continue" v-show="step !== 9">
                    <button @click="nextStep6" class="continue_btn" type="button">Continue</button>
                    <button @click="prevStep" v-show="step > 1" class="back_btn" type="button"><img src="../assets/Arrow-Bottom.svg" alt="arrow">Back</button>
                </div>
            </div>
            <!-- ---- Step #7 ---- -->
            <div class="quiz_change" v-show="step === 7">
                <h2>When were you born?</h2>
                <p></p>
                <div class="select born">
                    <div>
                        <input 
                            @focus="bornYearFocus"
                            @change="bornYearChange"
                            v-model.trim="bornYear"
                            class="monthly_income" 
                            :class="v$.bornYear.$error ? 'invalid' : ''"
                            type="text" 
                            placeholder="Year">
                        <div class="select_error" v-if="v$.bornYear.$error">{{ v$.bornYear.$errors[0].$message }}</div>
                    </div>
                    <div>
                        <input 
                            @focus="bornMounthFocus"
                            @change="bornMounthChange"
                            v-model.trim="bornMounth"
                            class="monthly_income" 
                            :class="v$.bornMounth.$error ? 'invalid' : ''"
                            type="text" 
                            placeholder="Mounth">
                        <div class="select_error" v-if="v$.bornMounth.$error">{{ v$.bornMounth.$errors[0].$message }}</div>
                    </div>
                    <div>
                        <input 
                            @focus="bornDayFocus"
                            @change="bornDayChange"
                            v-model.trim="bornDay"
                            class="monthly_income" 
                            :class="v$.bornDay.$error ? 'invalid' : ''"
                            type="text" 
                            placeholder="Day">
                        <div class="select_error" v-if="v$.bornDay.$error">{{ v$.bornDay.$errors[0].$message }}</div>
                    </div>
                    <!-- <div v-show="notSelect" class="select_error">All fields values is required</div> -->
                </div>
                <div class="quiz_continue" v-show="step !== 9">
                    <button @click="nextStep7" class="continue_btn" type="button">Continue</button>
                    <button @click="prevStep" v-show="step > 1" class="back_btn" type="button"><img src="../assets/Arrow-Bottom.svg" alt="arrow">Back</button>
                </div>
            </div>
            <!-- ---- Step #8 ---- -->
            <div class="quiz_change" v-show="step === 8">
                <h2>Congratulations! Last step.</h2>
                <p>Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. </p>
                <div class="select">
                    <div>
                        <input 
                            @focus="firstNameFocus"
                            @change="firstNameChange"
                            v-model.trim="firstName"
                            class="monthly_income" 
                            :class="v$.firstName.$error ? 'invalid' : ''"
                            type="text" 
                            placeholder="First name">
                        <div class="select_error" v-if="v$.firstName.$error">{{ v$.firstName.$errors[0].$message }}</div>
                    </div>
                    <div>
                        <input 
                            @focus="lastNameFocus"
                            @change="lastNameChange"
                            v-model.trim="lastName"
                            class="monthly_income" 
                            :class="v$.lastName.$error ? 'invalid' : ''"
                            type="text" 
                            placeholder="Last name">
                        <div class="select_error" v-if="v$.lastName.$error">{{ v$.lastName.$errors[0].$message }}</div>
                    </div>
                </div>
                <div class="select input_fill">
                    <form novalidate>
                        <input 
                            @focus="emailFocus"
                            @change="emailChange"
                            v-model.trim="email"
                            class="monthly_income" 
                            :class="v$.email.$error ? 'invalid' : ''"
                            type="email" 
                            placeholder="Email">
                        <div class="select_error" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</div>
                    </form>
                    <div>
                        <input 
                            @focus="phoneFocus"
                            @change="phoneChange"
                            v-model.trim="phone"
                            class="monthly_income" 
                                :class="v$.phone.$error ? 'invalid' : ''"
                            type="phone" 
                            placeholder="Phone number">
                        <div class="select_error" v-if="v$.phone.$error">{{ v$.phone.$errors[0].$message }}</div>
                    </div>
                    <!-- <div v-show="notSelect" class="select_error">All fields values is required</div> -->
                </div>
                <div class="quiz_continue" v-show="step !== 9">
                    <button @click="nextStep8" class="continue_btn" type="button">Continue</button>
                    <button @click="prevStep" v-show="step > 1" class="back_btn" type="button"><img src="../assets/Arrow-Bottom.svg" alt="arrow">Back</button>
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
            <!-- <div class="quiz_continue" v-show="step !== 9">
                <button @click="nextStep" class="continue_btn" type="button">Continue</button>
                <button @click="prevStep" v-show="step > 1" class="back_btn" type="button"><img src="../assets/Arrow-Bottom.svg" alt="arrow">Back</button>
            </div> -->
            <router-link to="/" class="quiz_continue last_btn" v-show="step == 9">
                <button  class="continue_btn" type="button">Go to main page</button>
            </router-link>
        </div>
    </div>

</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { minLength, required, email, numeric, alpha } from '@vuelidate/validators'

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
            step: 1,
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
            income: { required, numeric},
            years: { required, numeric},
            mounths: { required, numeric},
            time: { required, numeric},
            street: { minLength: minLength(4), required, alpha},
            city: { minLength: minLength(4), required, alpha },
            province: { minLength: minLength(4), required},
            postal: { minLength: minLength(4), required, numeric},
            bornYear: { required, numeric},
            bornMounth: { required, numeric},
            bornDay: { required, numeric},
            firstName: { minLength: minLength(4), required, alpha},
            lastName: { minLength: minLength(4), required, alpha},
            email: { required, email},
            phone: { minLength: minLength(7), required, numeric},
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
        nextStep1() { 
            if (this.gotSelect) {
                this.step++
                this.progresFill = this.defaltProgres * this.step + '%'
                this.gotSelect = false
            } else { this.notSelect = true}
        },
        nextStep2() { 
            if (this.gotSelect) {
                this.step++
                this.progresFill = this.defaltProgres * this.step + '%'
                this.gotSelect = false
            } else { this.notSelect = true}
        },
        nextStep3() { 
            this.v$.$touch()
            this.v$.$validate()
            if (!this.v$.income.$error) {
                this.v$.$reset()
                this.step++
                this.progresFill = this.defaltProgres * this.step + '%'
                this.gotSelect = false
            } else { this.notSelect = true}
        },
        nextStep4() { 
            this.v$.$touch()
            this.v$.$validate()
            if (!this.v$.years.$error && !this.v$.mounths.$error) {
                this.v$.$reset()
                this.step++
                this.progresFill = this.defaltProgres * this.step + '%'
                this.gotSelect = false
            } else { this.notSelect = true}
        },
        nextStep5() { 
            this.v$.$touch()
            this.v$.$validate()
            if (!this.v$.time.$error) {
                this.v$.$reset()
                this.step++
                this.progresFill = this.defaltProgres * this.step + '%'
                this.gotSelect = false
            } else { this.notSelect = true}
        },
        nextStep6() { 
            this.v$.$touch()
            this.v$.$validate()
            if (!this.v$.street.$error && !this.v$.city.$error && !this.v$.province.$error && !this.v$.postal.$error) {
                this.v$.$reset()
                this.step++
                this.progresFill = this.defaltProgres * this.step + '%'
                this.gotSelect = false
            } else { this.notSelect = true}
        },
        nextStep7() { 
            this.v$.$touch()
            this.v$.$validate()
            if (!this.v$.bornYear.$error && !this.v$.bornMounth.$error && !this.v$.bornDay.$error) {
                this.v$.$reset()
                this.step++
                this.progresFill = this.defaltProgres * this.step + '%'
                this.gotSelect = false
            } else { this.notSelect = true}
        }, 
        nextStep8() { 
            this.v$.$touch()
            this.v$.$validate()
            if (!this.v$.firstName.$error && !this.v$.lastName.$error && !this.v$.email.$error && !this.v$.phone.$error) {
                this.v$.$reset()
                this.step++
                this.progresFill = this.defaltProgres * this.step + '%'
                this.gotSelect = false
            } else { this.notSelect = true}
        },
        prevStep() {
            this.v$.$reset()
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
                    month.selected = true
                    this.gotSelect = true
                    this.notSelect = false
                } else {
                    month.selected = false
                }
                return month;
            })
        },
        selectStatus(i) {
            this.statuss = this.statuss.map((status, index) => {
                if (index === i) {
                    status.selected = true
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
            if (this.email !== '' && this.firstName !== '' && this.lastName !== ''  && this.phone !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        lastNameFocus() {
            this.notSelect = false
        },
        lastNameChange() {
            if (this.email !== '' && this.firstName !== '' && this.lastName !== ''  && this.phone !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        emailFocus() {
            this.notSelect = false
        },
        emailChange() {
            if (this.email !== '' && this.firstName !== '' && this.lastName !== '' && this.phone !== '') {
                this.gotSelect = true
                this.notSelect = false
            }
        },
        phoneFocus() {
            this.notSelect = false
        },
        phoneChange() {
            if (this.email !== '' && this.firstName !== '' && this.lastName !== '' && this.phone !== '') {
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
.last_btn{
    @media (max-width: 460px) {
        grid-template-columns: 1fr;
    }

}
.select_error{
    // position: absolute;
    // bottom: -20px;
    // left: 0;
    padding-top: 5px;
    font-size: 14px;
    text-align: left;
    color: #F54E4E;
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
    &.invalid{
        box-shadow: 0px 0px 5px #F54E4E;
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
<template>
<div class="container">
    <header class="header">
        <div class="header_logo">
            <router-link to="/">
                <img src="@/assets/HeaderLogo.svg" alt="">
            </router-link>
            <span>{{msg}}</span>
        </div>
        <div class="header_menu menu">
            <div>
                <router-link class="menu_btn" to="/inventory" v-if="!msg">
                    <main-button class="white hide">Inventory</main-button>
                </router-link>
                <router-link to="/">
                    <main-button class="colored">Request a car</main-button>
                </router-link>
            </div>
            <div class="menu_icon" @click="active = !active" :class="{active}">
                <span></span>
            </div>
            <div class="menu_body_shadow" @click="active = !active" :class="{active}"></div>
            <nav class="menu_body" :class="{active}">
                <ul class="menu_list">
                    <li><router-link @click="active = !active" to="/inventory" class="menu_link hide">Inventory</router-link></li>
                    <li @click="formActive = !formActive" ><p @click="active = !active" class="menu_link">Contact us</p></li>
                    <li><router-link @click="active = !active" to="/about" class="menu_link">About VAC</router-link></li>
                    <li><router-link @click="active = !active" to="/loan" class="menu_link">Lean Rates</router-link></li>
                    <li><router-link @click="active = !active" to="/videos" class="menu_link">Video</router-link></li>
                    <li><router-link @click="active = !active" to="/blog" class="menu_link">Blog</router-link></li>
                    <li><router-link @click="active = !active" to="/calculate" class="menu_link">Calculate</router-link></li>
                </ul>
                <div class="menu_social">
                    <a href="#">
                        <img src="@/assets/socialIcons/Instagram.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="@/assets/socialIcons/Facebook.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="@/assets/socialIcons/YouTube.svg" alt="">
                    </a>
                </div>
            </nav>
            <div class="contactUs_shadow" @click="formActive = !formActive" :class="{formActive}"></div>
            <form novalidate class="contactUs" :class="{formActive}" @submit.prevent="checkForm">
                <div @click="formActive = !formActive" class="contactUs_close">
                    <img src="../assets/Close.svg" alt="">
                </div>
                <div class="contactUs_title">We can't wait to hear from you!</div>
                <div class="contactUs_inputs">
                    <div class="contactsUs_input">
                        <img src="../assets/socialIcons/Name.svg" alt="">
                        <input 
                            v-model.trim="name"
                            type="text" 
                            :class="v$.name.$error ? 'invalid' : ''"
                            placeholder="Your Name">
                        <p v-if="v$.name.$error">{{v$.name.$errors[0].$message}}</p>
                    </div>
                    <div class="contactsUs_input">
                        <img src="../assets/socialIcons/Phone.svg" alt="">
                        <input 
                            v-model.trim="phone" 
                            :class="v$.phone.$error ? 'invalid' : ''"
                            type="phone" 
                            placeholder="Phone Number">
                        <p v-if="v$.phone.$error">{{v$.phone.$errors[0].$message}}</p>
                    </div>
                    <div class="contactsUs_input">
                        <img src="../assets/socialIcons/Mail.svg" alt="">
                        <input 
                            v-model.trim="email" 
                            :class="v$.email.$error ? 'invalid' : ''"
                            type="email" 
                            placeholder="Email Address">
                        <p v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</p>
                    </div>
                </div>
                <button type="submit" class="colored formbtn">contact me</button>
                <div class="contactUs_subtitle">You can contact us yourself</div>
                <div class="contactUs_social">
                    <a href="#">
                        <img src="@/assets/socialIcons/Instagram.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="@/assets/socialIcons/Facebook.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="@/assets/socialIcons/YouTube.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="@/assets/socialIcons/Email.svg" alt="">
                    </a>
                </div>
            </form>
            <div class="success_shadow" @click="successActive = !successActive" :class="{successActive}"></div>
            <nav class="success" :class="{successActive}">
                <div @click="successActive = !successActive" class="success_close">
                    <img src="../assets/Close.svg" alt="">
                </div>
                <div class="success_check">
                    <img src="../assets/socialIcons/Success.svg" alt="">
                </div>
                <div class="success_title">Application Successful!</div>
                <div class="success_subtitle">You can contact us yourself</div>
            </nav>
        </div>
    </header>  
</div>
</template>

<script>
import MainButton from '@/components/UI/MainButton.vue'
import { useVuelidate } from '@vuelidate/core'
import { minLength, required, email, numeric} from '@vuelidate/validators'
export default {
    components: {
        MainButton
    },
    props: {
        msg: String,
    },
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            items: [],
            active: false,
            formActive: false,
            successActive: false,
                name: null,
                phone: null,
                email: null,
                requiredNameLength: 2,
                requiredPhoneLength: 10,
        }
    },
    validations() {
        return {
            name: {
                minLength: minLength(this.requiredNameLength),
                required,
            },
            phone: { 
                minLength: minLength(this.requiredPhoneLength),
                required, 
                numeric 
            },
            email: { required, email },
        }

    },
    methods: {
        checkForm() {
            this.v$.$touch()
            this.v$.$validate()
            if (!this.v$.$error) {
                // console.log("submit")
                this.formActive = !this.formActive
                this.successActive = !this.successActive
                this.name = this.phone = this.email = null
                this.v$.$reset()
            }
        },
    },
    watch: {
        // whenever active changes, this function will run
        active() {
            document.body.style.overflow = this.active ? 'hidden' : ''
        },
        formActive() {
            this.v$.$reset()
            document.body.style.overflow = this.formActive ? 'hidden' : ''
        },
        successActive() {
            document.body.style.overflow = this.successActive ? 'hidden' : ''
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    padding: 0 24px;
    margin: 0 auto;
    transition: all 0.5s ease 0.1s;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.header {
    margin: 0 auto;
    position: relative;
    max-width: 1230px;
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 1.5 ease 0;
    z-index: 1;
    @media (max-width: 360px) {
        min-height: 55px;
    }
}
.header_fixed {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0px;
    background: linear-gradient(180deg, #999, #666, #999);
    z-index: 3;
}

.header_logo {
        display: flex;
        align-items: center;
    img{
        width: 112px;
        height: 33px;
        transition: all 0.4s ease;
        @media (max-width: 767px) {
            width: 81px;
            height: 24px;
        }
    }
    span{
        margin-left: 40px;
        font-weight: 700;
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
        color: #41456B;
        @media (max-width: 560px) {
            display: none;
        }
    }
}
@media (max-width: 767px) {
    .hide{
        display: none;
    }
}
.header_menu{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.menu_icon {
    z-index: 5;
    display: block;
    position: relative;
    align-items: center;
    width: 37px;
    height: 30px;
    cursor: pointer;
    margin-left: 63px;
    transition: all 0.4s ease;
    @media (max-width: 767px) {
        margin-left: 23px;
        width: 30px;
        height: 25px;
    }
}
.menu_btn{
    margin-right: 10px;
}
.menu_icon span,
.menu_icon::before,
.menu_icon::after {
    right: 0;
    position: absolute;
    height: 4px;
    width: 100%;
    transition: all 0.3s ease 0s;
    background: #41456B;
    border-radius: 7px;
}
.menu_icon::before, .menu_icon::after {
    content: "";
    width: 37px;
        @media (max-width: 767px) {
            width: 30px;
        }
}

.menu_icon::before {
    content: "";
    top: 0;
}

.menu_icon::after {
    content: "";
    bottom: 0;
}

.menu_icon span {
    height: 4px;
    top: 50%;
    transform: scale(1) translate(0px, -50%);
}
.menu_icon.active {
    top: 0px;
    right: 0px;
}

.menu_icon.active span {
    transform: scale(0) translate(0px, -50%);
}

.menu_icon.active::before {
    display: block;
    width: 37px;
    top: 50%;
    transform: rotate(-45deg) translate(0px, -50%);
    background-color: #41456B;
    @media (max-width: 767px) {
        width: 30px;
    }
}

.menu_icon.active::after {
    width: 37px;
    bottom: 50%;
    transform: rotate(45deg) translate(0px, 50%);
    background-color: #41456B;
    @media (max-width: 767px) {
        width: 30px;
    }

}
.menu_body_shadow, 
.contactUs_shadow,
.success_shadow {
    position: fixed;
    display: none;
    top: 0;
    left:0;
    z-index: 3;
    width: 100%;
    height: 100%;
}
.menu_body_shadow.active {
    display: block;
}
.contactUs_shadow.formActive {
    display: block;
}
.success_shadow.successActive {
    display: block;
}
.contactUs, 
.menu_body,
.success {
    position: fixed;
    top: 0;
    right: -100%;
    width: 42%;
    height: 100%;
    background: #fff;
    padding: 130px 0px 105px 60px;
    z-index: 4;
    transition: all 0.3s ease 0s;
    overflow: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, .1);
    @media (max-width: 1024px) {
        width: 50%;
    }
    @media (max-width: 768px) {
        width: 70%;
    }
    @media (max-width: 425px) {
        width: 100%;
        box-shadow: none;
    }
}
.contactUs,
.success {
    z-index: 6;
    padding: 92px 120px 0px 60px;
    justify-content: flex-start;
    @media (max-width: 1024px) {
        padding: 92px 60px 0px 60px;
    }
    @media (max-width: 768px) {
        padding: 85px 20px 0px 20px;
    }
}

.menu_body.active {
    right: 0;
}
.contactUs.formActive {
    right: 0;
}
.success.successActive {
    right: 0;
}
.menu_body.active::before {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    width: 42%;
    height: 80px;
    background: #fff;
    z-index: 3;
}
.menu_list {
    li{
        text-align: start;
        margin-bottom: 20px;
        font-weight: 700;
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
        cursor: pointer;
        p, a {
            color: #41456B;
        }
    }
}
.menu_link.hide {
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
}
.menu_social,
.contactUs_social {
    img{
        margin-right: 10px;
        width: 30px;
        height: 30px;
        &:hover {
            opacity: 0.8;
        }
    }
}
.contactUs_close,
.success_close {
    position: absolute;
    top: 28px;
    left: 60px;
    cursor: pointer;
    @media (max-width: 768px) {
        top: 14px;
        left: 21px;
    }

}
.contactUs_title,
.success_title {
    font-weight: 700;
    font-size: 30px;
    line-height: 140%;
    color: #41456B;
    text-align: left;
    margin-bottom: 60px;
    @media (max-width: 425px) {
            margin-bottom: 20px;
    }
}
.success_title {
    margin-bottom: 5px;
    margin-top: 40px;
}

.contactUs_inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-bottom: 40px;
}
.contactsUs_input {
    position: relative;
    img{
        position: absolute;
        top: 10px;
        left: 10px;
    }
    p{
        padding-top: 5px;
        font-size: 14px;
        text-align: left;
        color: rgb(241, 86, 86);
    }
    input {
        width: 100%;
        padding: 10px 10px 10px 44px;
        height: 45px;
        border: 1px solid #D7D7D7;
        border-radius: 2px;
    &.invalid{
        box-shadow: 0px 0px 5px rgb(255, 49, 49);
    }
    :focus{
        border: 1px solid #770a6e;
    }
    }
}
.formbtn {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: white;
    background: #7481FF;
    padding: 16px 37px;
    transition: all 0.4s ease;
    @media (max-width: 460px) {
        padding: 9px;
    }
}
.contactUs_subtitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
    margin-bottom: 20px;
}
.success_subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
}

</style>
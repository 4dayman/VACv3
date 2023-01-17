<template>
<div class="container">
    <header class="header">
        <div class="header_logo">
            <router-link to="/">
                <img src="@/assets/HeaderLogo.svg" alt="">
            </router-link>
        </div>
        <div class="header_menu menu">
            <div>
                <router-link class="menu_btn" to="/about">
                    <main-button class="white hide">Inventory</main-button>
                </router-link>
                <router-link to="/">
                    <main-button class="colored">Request a car</main-button>
                </router-link>
            </div>
            <div class="menu_icon" @click="active = !active, active" :class="{active}">
                <span></span>
            </div>
            <div class="menu_body_shadow" @click="active = !active" :class="{active}"></div>
            <nav class="menu_body" :class="{active}">
                <ul class="menu_list">
                    <li @click="active = !active"><router-link to="/about" class="menu_link hide">Inventory</router-link></li>
                    <li @click="active = !active"><router-link to="/about" class="menu_link">Contact us</router-link></li>
                    <li @click="active = !active"><router-link to="/" class="menu_link">About VAC</router-link></li>
                    <li @click="active = !active"><router-link to="/" class="menu_link">Lean Rates</router-link></li>
                    <li @click="active = !active"><router-link to="/" class="menu_link">Video</router-link></li>
                    <li @click="active = !active"><router-link to="/" class="menu_link">Blog</router-link></li>
                    <li @click="active = !active"><router-link to="/" class="menu_link">Calculate</router-link></li>
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
        </div>
    </header>  
</div>
</template>

<script>
import MainButton from '@/components/UI/MainButton.vue'
export default {
    components: {
        MainButton
    },
    data() {
        return {
            items: [],
            active: false,
        }
    },
    methods: {
    },
    watch: {
    // whenever active changes, this function will run
    active() {
    document.body.style.overflow = this.active ? 'hidden' : ''
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
    background: rgba(255, 255, 255, 0.8);
    padding: 0 15px;
    margin: 0 auto;
    transition: all 0.5s ease 0.1s;
    @media (max-width: 768px) {
        padding: 0 24px;
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
    img{
        width: 112px;
        height: 33px;
        transition: all 0.4s ease;
        @media (max-width: 767px) {
            width: 81px;
            height: 24px;
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
.menu_body_shadow {
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
.menu_body {
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
    }
}
.menu_body.active {
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
        a {
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
.menu_social {
    img{
        margin-right: 10px;
        width: 30px;
        height: 30px;
        &:hover {
            opacity: 0.8;
        }
    }
}
</style>
<template>
    <div class="conatiner">
        <div class="footer">
            <div class="footer_logo">
                <router-link to="/">
                    <img src="@/assets/FooterLogo.svg" alt="">
                </router-link>
            </div>
            <div class="footer_terms">
                <a href="">Terms</a>
                <a href="">Privacy</a>
            </div>
            <div class="footer_social">
                <a href="#">
                    <img src="@/assets/socialIcons/Instagram_white.svg" alt="">
                </a>
                <a href="#">
                    <img src="@/assets/socialIcons/Facebook_white.svg" alt="">
                </a>
                <a href="#">
                    <img src="@/assets/socialIcons/YouTube_white.svg" alt="">
                </a>
            </div>
            <div class="footer_created">
                <p>Created by</p>
                <img src="@/assets/socialIcons/CreatedByLogo.svg" alt="">
            </div>
            <div class="footer_copy">&#169;Copyright, 2020. Vehicle Approval</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.conatiner {
    background: #7481FF;
    width: 100%;
    padding: 0 15px;
    z-index: 1;
}
.footer {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 133px;
    max-width: 1230px;
    color: #FFFFFF;
    flex-wrap: wrap;
    transition: all 0.4s ease;
    @media (max-width: 768px) {
        min-height: 200px;
    }
    @media (max-width: 360px) {
        min-height: 176px;
    }
}
.footer_logo {
    margin-right: 10px;
    img {
        width: 112px;
        height: 33px;
        transition: all 0.4s ease;
        @media (max-width: 767px) {
            width: 81px;
            height: 24px;
        }
    }
}
.footer_terms {
    display: flex;
    gap: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    margin-right: 10px;
    a {
        color: #FFFFFF;
        text-decoration: none;
    }
}
.footer_social{
    display: flex;
    align-items: center;
    margin-right: 10px;
    a {
        &:not(:last-child) {
            margin-right: 10px;
        }
        img {
            width: 30px;
            height: 30px;
            object-fit: cover;
        }
    }
}
.footer_created {
    display: flex;
    align-items: center;
    margin-right: 10px;
    p {
        font-weight: 600;
        font-size: 16px;
        line-height: 14px;
        margin-right: 8px;
    }
}
.footer_copy{
    font-weight: 400;
    font-size: 14px;
    line-height: 159%;
}
</style>
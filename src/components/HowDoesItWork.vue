<template>
    <div class="how">
        <div class="img_left">
            <img src="@/assets/HondaAccord.png" alt="">
        </div>
        <div class="img_right">
            <img src="@/assets/Lexus.png" alt="">
        </div>
        <div class="how_text">
            <h2>How does it work?</h2>
            <h3>From your Phone to your Home</h3>
            <p>We make it easy for you to buy your dream car from your phone without ever having to step into a dealership! We deliver your vehicle to your home for you to test drive before you sign anything.</p>
        </div>
    </div>
</template>

<style lang="scss" >
.how {
    margin-top: -50px;
    height: 530px;
    position: relative;
    overflow: hidden;
    @media (max-width: 1024px) {
        height: 631px;
    }

}
.img_left {
    z-index: -1;
    position: absolute;
    left: 0;
    top: 230px;
    height: 210px;
    transition: all 0.4s ease;
    @media (max-width: 1024px) {
        left: -100px;
        height: 166px;
        top: 365px;
    }
    @media (max-width: 768px) {
        left: -80px;
        height: 114px;
        top: 365px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.img_right {
    z-index: -1;
    position: absolute;
    right: 0;
    top: 66px;
    height: 255px;
    @media (max-width: 1024px) {
        right: -100px;
        top: 223px;
        height: 206px;
    }
    @media (max-width: 768px) {
        right: -80px;
        top: 309px;
        height: 132px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.how_text {
    background: #fff;
    margin: 10px auto;
    max-height: 365px;
    max-width: 605px;
    padding: 60px;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    transition: all 0.4s ease;
    h2 {
        font-weight: 700;
        font-size: 45px;
        line-height: 140.5%;
        text-align: center;
        color: #41456B;
        @media (max-width: 600px) {
            font-size: 30px;
        }

    }
    h3 {
        font-weight: 700;
        font-size: 30px;
        line-height: 140%;
        text-align: center;
        color: #7481FF;
        @media (max-width: 600px) {
            font-size: 24px;
        }
    }
    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        text-align: center;
        letter-spacing: 0.02em;
        color: #606276;
    }
    @media (max-width: 1024px) {
        height: 321px;
        width: 565px;
    }
    @media (max-width: 768px) {
        height: 321px;
        max-width: 565px;
    }
    @media (max-width: 600px) {
        max-height: 334px;
        max-width: 320px;
        padding: 20px;
    }

}
</style>
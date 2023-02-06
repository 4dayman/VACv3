<template>
    <div class="five_steps">
        <div class="five_steps-title">Your perfect car in 5 easy steps</div>
        <div class="five_steps-block">
            <div class="five_steps-left">
                <div class="five_steps-steps">
                <div class="steps_number">
                    <img src="@/assets/Polygon103.svg" alt="">
                    <p>1</p>
                </div>
                <div class="steps_content">
                    <div class="steps_content_title">First Contact</div>
                    <div class="steps_content_desc">
                        Tell us what your dream vehicle is.
                    </div>
                </div>
                </div>
                <div class="five_steps-steps">
                <div class="steps_number">
                    <img src="@/assets/Polygon103.svg" alt="">
                    <p>2</p>
                </div>
                <div class="steps_content">
                    <div class="steps_content_title">Vehicle Selection</div>
                    <div class="steps_content_desc">
                        One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.
                    </div>
                </div>
                </div>
                <div class="five_steps-steps">
                <div class="steps_number">
                    <img src="@/assets/Polygon103.svg" alt="">
                    <p>3</p>
                </div>
                <div class="steps_content">
                    <div class="steps_content_title">Secure Financing</div>
                    <div class="steps_content_desc">
                        You work with a dedicated Qualified Agent to secure financing on your terms.
                    </div>
                </div>
                </div>
                <div class="five_steps-steps">
                <div class="steps_number">
                    <img src="@/assets/Polygon103.svg" alt="">
                    <p>4</p>
                </div>
                <div class="steps_content">
                    <div class="steps_content_title">Vehicle Delivery</div>
                    <div class="steps_content_desc">
                        We deliver your car to your home or office for you to test drive.
                    </div>
                </div>
                </div>
                <div class="five_steps-steps">
                <div class="steps_number">
                    <img src="@/assets/Polygon103.svg" alt="">
                    <p>5</p>
                </div>
                <div class="steps_content">
                    <div class="steps_content_title">Getting Vehicle</div>
                    <div class="steps_content_desc">
                        If you love the vehicle, you sign the paperwork and keep the car.
                    </div>
                </div>
                </div>
            </div>
            <div class="five_steps-images">
                <div class="five_steps-image1">
                    <img src="@/assets/five_steps-Colors1.png" alt="">
                </div>
                <div class="five_steps-image2">
                    <img src="@/assets/five_steps-Colors2.png" alt="">
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.five_steps {
    max-width: 1230px;
    padding: 0 24px;
    margin: 0 auto;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.five_steps-title {
    font-weight: 700;
    font-size: 30px;
    line-height: 140.5%;
    color: #41456B;
    margin-bottom: 60px;
    max-width: 260px;
    text-align: left;
    margin-left: 8px;
    @media (max-width: 768px) {
        max-width: 100%;
    }

}
.five_steps-block {
    margin: 0px 8px;
    display: flex;
    gap: 107px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
}
.five_steps-left {
    display: flex;
    flex-direction: column;
}
.five_steps-images {
    max-width: 548px;
    display: flex;
    @media (max-width: 1024px) {
        margin-right: -10px;
    }
    @media (max-width: 768px) {
        margin: 0 auto; 
        max-width: 320px;   
    }
}
.five_steps-image1, 
.five_steps-image2 {
    // width: 50%;
    height: 511px;
    @media (max-width: 1024px) {
        rotate: 15deg;
        height: 331px;
    }
    @media (max-width: 768px) {
        height: 327px;
        rotate: 0deg;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.five_steps-image2 {
    rotate: -15deg;
    transform: translate(-20%, -5%);
    @media (max-width: 1024px) {
        transform: translate(-50%, 90%);
        rotate: 15deg;
        height: 331px;
    }
    @media (max-width: 768px) {
        transform: translate(-20%, -5%);
        height: 327px;
        rotate: -15deg;
    }
}
.steps_number {
    position: relative;
    margin-right: 20px;
    p{
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translate(-50%);
        font-weight: 700;
        font-size: 25px;
        // line-height: 140%;
        color: #41456B;
    }
}
.five_steps-steps {
    display: flex;
    &:not(last-child) {
        margin-bottom: 40px;
    }
}
.steps_content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.steps_content_title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
    margin-bottom: 5px;
}
.steps_content_desc {
    max-width: 400px;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
    text-align: left;
    @media (max-width: 768px) {
        max-width: 100%;
    }

}
</style>
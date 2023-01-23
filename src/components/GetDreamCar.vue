<template>
    <div class="get_car_wrapper">
        <div class="get_car">
            <div class="get_car_left">
                <h2>Get your dream car</h2>
                <p>We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.</p>
                <p>We also hated how choosing a car and figuring out the financing for the vehicle were treated as totally separate processes! Instead of dealing with a salesperson, then being handed off to a closer, and then shuffled over to a finance manager, we wanted to create a way for people to buy a car and only deal with a single person for the entire process.</p>
            </div>
            <div class="get_car_right">
                <div class="five_steps-steps">
                    <div class="steps_number">
                        <img src="@/assets/Polygon103.svg" alt="">
                        <p>1</p>
                    </div>
                    <div class="steps_content">
                        <div class="steps_content_title">Quickly</div>
                        <div class="steps_content_desc">
                            You do not spend a lot of your time going to car dealerships
                        </div>
                    </div>
                </div>
                <div class="five_steps-steps">
                    <div class="steps_number">
                        <img src="@/assets/Polygon103.svg" alt="">
                        <p>2</p>
                    </div>
                    <div class="steps_content">
                        <div class="steps_content_title">Simply</div>
                        <div class="steps_content_desc">
                            You can order your dream car just by talking to our specialist by phone                        </div>
                    </div>
                </div>
                <div class="five_steps-steps">
                    <div class="steps_number">
                        <img src="@/assets/Polygon103.svg" alt="">
                        <p>3</p>
                    </div>
                    <div class="steps_content">
                        <div class="steps_content_title">Conveniently</div>
                        <div class="steps_content_desc">
                            We will deliver the car directly to the doorstep of your home or office
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.get_car_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
}
.get_car{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    margin-bottom: 220px;
    @media (max-width: 1024px) {
        margin-bottom: 160px;
        padding: 0 84px;
        grid-template-columns: 1fr;
        row-gap: 40px;
    }
    @media (max-width: 560px) {
        padding: 0px;
        row-gap: 30px;
        margin-bottom: 80px;
    }
}
.get_car_left{
    text-align: left;

    h2{
        font-weight: 700;
        font-size: 45px;
        line-height: 140.5%;
        color: #41456B;
        margin-bottom: 20px;
                @media (max-width: 460px) {
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
        &:not(last-child) {
            margin-bottom: 20px;
        }
        @media (max-width: 460px) {
            &:not(last-child) {
                margin-bottom: 10px;
            }
        }
    }
}
.get_car_right{
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    max-width: 450px;
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
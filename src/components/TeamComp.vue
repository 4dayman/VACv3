<template>
    <div class="team_wrapper">
        <div class="team">
            <div class="team_left">
                <h2>We're dynamic team of creative people with innovative mind</h2>
                <h3>Our History</h3>
                <p>We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.</p>
                <h3>Our Goal</h3>
                <p>We also hated how choosing a car and figuring out the financing for the vehicle were treated as totally separate processes! Instead of dealing with a salesperson, then being handed off to a closer, and then shuffled over to a finance manager, we wanted to create a way for people to buy a car and only deal with a single person for the entire process.</p>
            </div>
            <div class="team_right">
                <img src="../assets/TeamPhoto.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.team_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.team{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 78px;
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
.team_left{
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
    h3{
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456B;
        margin-bottom: 5px;
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
.team_right{
    img{
        border-radius: 5px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
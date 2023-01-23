<template>
    <div class="qualified_wrapper">
        <div class="qualified">
            <div class="qualified_left">
                <h3>Contact us today and speak with one of our qualified agents</h3>
                <main-button class="colored">Contact us now</main-button>
            </div>
            <div class="qualified_right">
                <h2>Our qualified agents</h2>
                <p>The true secret to success of VAC isn’t our streamlined purchasing and financing processes. The real reason VAC is the easiest and best way to buy a car in Canada is because of our outstanding Qualified Agents.</p>
                <p>Our team provides you with the best customer experience in the automotive industry. You work with a dedicated representative throughout the process. They are able to answer any questions you have about any of our vehicles or the financing. Are you interested in seeing pictures or videos of a car? Your qualified agent will send them to you.</p>
            </div>
        </div>
    </div>
</template>

<script>
import MainButton from '../components/UI/MainButton.vue'
export default {
    components: {
        MainButton,
    }
}
</script>

<style lang="scss" scoped>
.qualified_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
}
.qualified{
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 68px;
    margin-bottom: 220px;
    @media (max-width: 1024px) {
        margin-bottom: 160px;
        padding: 0 84px;
        // grid-template-columns: 1fr;
        display: flex;
        flex-direction: column-reverse;
        row-gap: 40px;
    }
    @media (max-width: 560px) {
        padding: 0px;
        row-gap: 30px;
        margin-bottom: 80px;
    }
}
.qualified_right{
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
.qualified_left{
    padding: 60px;
    max-height: 300px;
    background: #FFFFFF;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    text-align: left;
    @media (max-width: 768px) {
        max-height: 350px;

    }
    @media (max-width: 460px) {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
    h3{
        font-weight: 700;
        font-size: 30px;
        line-height: 140%;
        color: #41456B;        
        margin-bottom: 60px;
        @media (max-width: 460px) {
            font-size: 30px;
            margin-bottom: 10px;
        }
    }
}
</style>
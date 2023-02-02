<template>
        <div class="faq" :class="open ? 'open' : ''" @click="$emit('toggleOpen', index)">
            <div class="faq_title" >{{faq.title}}</div>
            <div class="faq_desc" :class="open ? 'open' : ''">{{faq.desc}}</div>
        </div>
</template>
<script>
export default {
    props: ['faq', 'index', 'open'],
}
</script>
<style lang="scss">
.faq {
    margin-bottom: 10px;
    border: 1px solid #D7D7D7;
}
.faq_title{
    padding: 20px 69px 20px 30px;
    position: relative;
    text-align: left;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
    transition: all 0.4s linear;
    cursor: pointer;
    &::after{
        content: '';
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%) rotate(0deg);
        width: 16px;
        height: 8px;
        background-image: url('../assets/arrowDown.svg');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        transition: all 0.2s linear;
    }
    @media (max-width: 450px) {
        font-size: 18px;
        padding: 20px 59px 20px 20px;
    }
}
.faq.open .faq_title::after{
    transform: translateY(-50%) rotate(180deg);
}
.faq_desc {
    padding: 0 69px 0 30px;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
    opacity:0;
    max-height: 0px;
    overflow-y: hidden;
    transition: all 0.4s ease-out;
    &.open {
        opacity:1;
        max-height: 1000px;
        padding-bottom: 33px;
        @media (max-width: 450px) {
            padding: 0 59px 21px 20px;
        }

    }
}

</style>
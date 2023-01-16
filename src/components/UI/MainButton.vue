<template>
    <a class="btn">
        <slot></slot>      
    </a>

</template>

<script>
export default {
    name: 'main-button'
}
</script>


<style lang="scss" scoped>
.btn{
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    border: 1px solid #7481FF;
    border-radius: 2px;
    margin-right: 10px;
    text-decoration: none;
    cursor: pointer;
    &:not(last-child) {
        margin-right: 20px;
        @media (max-width: 460px) {
            margin-right: 0px;
        }
    }
    &:hover {
        opacity: 0.9;
    }
    @media (max-width: 460px) {
        font-size: 14px;
    }

}
.white {
    color: #7481FF;
    padding: 16px 17px;
    background: #fff;
}
.colored {
    color: white;
    background: #7481FF;
    padding: 16px 37px;
    transition: all 0.4s ease;
    @media (max-width: 460px) {
        padding: 9px;
    }
}
.max {
    width: 200px;
}
</style>
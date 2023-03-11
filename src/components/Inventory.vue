<template>
<div class="wrapper_inventory">
    <div class="inventory">
        <div class="inventory_cars">
                <img  src="@/assets/InventoryMain.png" alt="">
                <div class="blur_car">
                    <img src="@/assets/InventorySeccond.png" alt="">
                </div>
        </div>
        <div class="inventory_text">
            <div class="inventory_text-left">
                <h2>Сhoose your dream vehicle in our catalog</h2>
            </div>
            <div class="inventory_text-right">
                <p>In our catalogue there are many models of vehicles. Choose your car to your liking.</p>
                <router-link to="/inventory"><main-button class="colored max per">inventory</main-button></router-link>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import MainButton from '@/components/UI/MainButton.vue'
export default {
    components: {
        MainButton
    }
}
</script>

<style lang="scss" scoped>
    .wrapper_inventory {
        max-width: 1230px;
        margin: 0 auto;
        padding: 0 24px;
        @media (max-width: 460px) {
            padding: 0 20px;
        }
    }
    .inventory {
        margin: 220px 0;
        height: 311px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 1024px) {
            flex-direction: column-reverse;
            height: 495px;
            margin: 160px 0;
            align-items: center;
        }
        @media (max-width: 768px) {
            margin: 80px 0;
        }
    }
    .inventory_cars {
        padding-top: 40px;
        position: relative;
        max-width: 599px;
        padding-right: 10px;
        display: flex;
        justify-content: flex-start;
        @media (max-width: 768px) {
            width: 320px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .blur_car {
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;    }
        }
    .inventory_text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 500px;
        margin-bottom: 60px;
        @media (max-width: 1024px) {
            flex-direction: row;
            max-width: 610px;
            justify-content: space-between;
            gap: 59px;
        }
        @media (max-width: 768px) {
            flex-direction: column;
            gap: 10px;
        }

        h2 {
            margin-bottom: 20px;
            font-weight: 700;
            font-size: 45px;
            line-height: 140.5%;
            color: #41456B;
            text-align: left;
            @media (max-width: 768px) {
            font-size: 30px;
            }
        }
        p {
            margin-bottom: 40px;
            text-align: left;
            font-weight: 400;
            font-size: 16px;
            line-height: 180%;
            letter-spacing: 0.02em;
            color: #606276;
        }
    }
    .inventory_text-right {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        
    }
    @media (max-width: 460px) {
        .per {
            display: block;
            width: 100%;
        }
    }
</style>
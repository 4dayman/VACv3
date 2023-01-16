<template>
    <div class="advantages">
        <div class="advantages_tite">
            Advantages of working with us
        </div>
        <div class="advantages_block">
            <div class="advantages_block_item">
                <img class="img_dn" src="@/assets/BigTriangl.svg" alt="">
                <div class="advantages_block_item-wrapper">
                    <img src="@/assets/VehicalDelivery_icon.svg" alt="">
                    <h3>Vehicle Delivery</h3>
                    <p>We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.</p>
                </div>
            </div>
            <div class="advantages_block_item rotate">
                <img class="img_dn" src="@/assets/BigTriangl.svg" alt="">
                <div class="advantages_block_item-wrapper reverce">
                    <img src="@/assets/AutoFinancing_icon.svg" alt="">
                    <h3>Auto Financing</h3>
                    <p>We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%</p>
                </div>
            </div>
            <div class="advantages_block_item">
                <img class="img_dn" src="@/assets/BigTriangl.svg" alt="">
                <div class="advantages_block_item-wrapper">
                    <img src="@/assets/HugeInventory_icon.svg" alt="">
                    <h3>Huge Inventory</h3>
                    <p>We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.advantages {
    margin: 0 auto;
    max-width: 1230px;
    padding: 0 15px;
    margin-bottom: 80px;
}
.advantages_tite {
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456B;
    text-align: left;
    margin-top: 200px;
    margin-bottom: 60px;
    @media (max-width:  768px) {
        text-align: center;
        // max-width: 308px;
        font-size: 30px;
        margin-top: 80px;

    }
}
.advantages_block {
    // width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:  1200px) {
        flex-direction: column;
        gap: 47px;
    }
}
.advantages_block_item {
    position: relative;
    // width: 480px;
    height: 430px;
    &:not(:last-child) {
        margin-right: -130px;
    }
    @media (max-width:  1200px) {
        &:not(:last-child) {
            margin-right: 0px;
    }
    }
    @media (max-width:  500px) {
        height: 221px;
    }

    filter: drop-shadow(0 20px 25px rgba(0,0,0,.1));
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
.advantages_block_item-wrapper {
    position: absolute;
    top: 138px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    @media (max-width: 500px) {
        top: 0;
        // position: relative;
    }
    img {
        width: 70px;
        height: 70px;
    }
    h3 {
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        color: #41456B;
        }
    p {
        width: 320px;
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        text-align: center;
        letter-spacing: 0.02em;
        color: #606276;
    }
}
.advantages_block_item-wrapper.reverce {
    top: 33px;
    p {
        max-width: 204px;
    }
    @media (max-width: 1200px) {
        top: 138px;
        p {
            max-width: 320px;
        }
    }
    @media (max-width: 500px) {
        top: 0;
    }

}
.rotate {
    img {
        rotate: 180deg;
        @media (max-width: 1200px) {
            rotate: 0deg;
        }

    }
}
.img_dn {
    @media (max-width: 500px) {
        display: none;
    }
}
</style>
<template>
    <div class="inventory_wrapper">
        <div class="inventory">
            <div class="inventory_sidebar">
                <h2>Detailed search</h2>
                <div class="inventory_filters">
                    <div class="inventory_filter" :class="open1 ? 'open1' : ''" >
                        <div class="filter_title" @click="open1 = !open1">Make, Model</div>
                        <div class="filter_desc" :class="open1 ? 'open' : ''">
                            <div class="search_make">
                                <p>Make</p>
                                <input class="input search_input" type="text" placeholder="Search Make...">
                            </div>
                            <div class="search_model">
                                <p>Model</p>
                                <input class="input search_input" type="text" placeholder="Search Model...">
                            </div>
                        </div>
                    </div>
                    <div class="inventory_filter" :class="open2 ? 'open2' : ''" >
                        <div class="filter_title" @click="open2 = !open2">Body type</div>
                        <div class="filter_desc" :class="open2 ? 'open' : ''">
                            <div class="checkbox">
                                <input type="checkbox" id="truck" value="truck">
                                <lable for="truck" class="lable">
                                    <img src="../assets/Truckicon.svg" alt="">
                                    Trucks
                                </lable>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="truck" value="truck">
                                <lable for="truck" class="lable">
                                    <img src="../assets/SUVicon.svg" alt="">
                                    SUV
                                </lable>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="truck" value="truck">
                                <lable for="truck" class="lable">
                                    <img src="../assets/Sedanicon.svg" alt="">
                                    Sedan
                                </lable>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="truck" value="truck">
                                <lable for="truck" class="lable">
                                    <img src="../assets/Hatchbackicon.svg" alt="">
                                    Hatchback
                                </lable>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="truck" value="truck">
                                <lable for="truck" class="lable">
                                    <img src="../assets/Coupeicon.svg" alt="">
                                    Coupe
                                </lable>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="truck" value="truck">
                                <lable for="truck" class="lable">
                                    <img src="../assets/Convertiableicon.svg" alt="">
                                    Convertiable
                                </lable>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="truck" value="truck">
                                <lable for="truck" class="lable">
                                    <img src="../assets/VANicon.svg" alt="">
                                    VAN
                                </lable>
                            </div>
                        </div>
                    </div>
                    <div class="inventory_filter" :class="open3 ? 'open3' : ''" >
                        <div class="filter_title" @click="open3 = !open3">Transmission</div>
                        <div class="filter_desc" :class="open3 ? 'open' : ''">
                            <div class="checkbox">
                                <input type="checkbox" id="Automatic" value="Automatic">
                                <lable for="Automatic" class="lable">
                                    Automatic
                                </lable>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="Manual" value="Manual">
                                <lable for="Manual" class="lable">
                                    Manual
                                </lable>
                            </div>
                        </div>
                    </div>
                    <div class="inventory_filter" :class="open4 ? 'open4' : ''" >
                        <div class="filter_title" @click="open4 = !open4">Price</div>
                        <div class="filter_desc" :class="open4 ? 'open' : ''">
                            <!-- <div class="middle">
                                <div class="multi-range-slider">
                                    <input class="input" type="range" id="input-left" min="0" max="100" value="25">
                                    <input class="input" type="range" id="input-right" min="0" max="100" value="75">

                                    <div class="slider">
                                        <div class="track"></div>
                                        <div class="range"></div>
                                        <div class="thumb left"></div>
                                        <div class="thumb right"></div>
                                    </div>
                                </div>
                            </div> -->
                            <div class="price_value">
                                <p>$ {{this.price[0]}}</p>
                                <p>$ {{this.price[1]}}</p>
                            </div>
                            <Slider
                                v-model="price"
                                :min="0"
                                :max="200000"
                                :step="1000"
                            />

                        </div>
                    </div>
                    <div class="inventory_filter" :class="open5 ? 'open5' : ''" >
                        <div class="filter_title" @click="open5 = !open5">Year</div>
                        <div class="filter_desc" :class="open5 ? 'open' : ''">
                            <div class="year_value">
                                <p>{{this.year[0]}}</p>
                                <p>{{this.year[1]}}</p>
                            </div>
                            <Slider
                                v-model="year"
                                :min="1990"
                                :max="2023"
                                :step="1"
                            />
                        </div>
                    </div>
                    <div class="inventory_filter" :class="open6 ? 'open6' : ''" >
                        <div class="filter_title" @click="open6 = !open6">Kilometres</div>
                        <div class="filter_desc" :class="open6 ? 'open' : ''">
                            <div class="kilometres_value">
                                <p>{{this.kilometres}} or less</p>
                            </div>

                            <Slider
                                v-model="kilometres"
                                :min="0"
                                :max="500000"
                                :step="1000"

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Slider from '@vueform/slider'
import "@vueform/slider/themes/default.css"
export default {
    components: {
        Slider,
    },
    data() {
        return {
            open1: true,
            open2: true,
            open3: true,
            open4: true,
            open5: true,
            open6: true,
            price: [10000, 100000],
            year: [2000, 2005],
            kilometres: 100000,
        }
    },
methods: {
},

}
</script>
<style lang="scss">
// -----slider------
.slider-tooltip {
    display: none;
}
.slider-horizontal {
  height: 8px;
}
.slider-horizontal .slider-handle {
  width: 18px;
  height: 18px;
  top: -5px;
  right: calc(18px / 2 * (-1));
}

.slider-base {
  background-color: #D7D7D7;
  border-radius: 2px;
}

.slider-connects {
  border-radius: 2px;
}

.slider-connect {
  background: #7481FF;
  cursor: pointer;
}
.slider-handle {
    overflow: visible;
  width: 18px;
  height: 18px;
    border: 1px solid #FFFFFF;
    border-radius: 2px;
  background: #7481FF;
  cursor: grab;
box-shadow: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }
}
// ------end of slider-------


.inventory_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.inventory_sidebar {
    margin-top: 49px;
    width: 300px;
    height: 100%;
    h2{
        text-align: left;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456B;
        margin-bottom: 31px;
    }
}
.inventory_filters {
    width: 100%;
}
.inventory_filter {
    margin-bottom: 10px;
    border: 1px solid #D7D7D7;
}
.filter_title{
    padding: 10px 20px 10px 20px;
    position: relative;
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    line-height: 159%;
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
.inventory_filter.open1 .filter_title::after{
    transform: translateY(-50%) rotate(180deg);
}
.inventory_filter.open2 .filter_title::after{
    transform: translateY(-50%) rotate(180deg);
}
.inventory_filter.open3 .filter_title::after{
    transform: translateY(-50%) rotate(180deg);
}
.inventory_filter.open4 .filter_title::after{
    transform: translateY(-50%) rotate(180deg);
}
.inventory_filter.open5 .filter_title::after{
    transform: translateY(-50%) rotate(180deg);
}
.inventory_filter.open6 .filter_title::after{
    transform: translateY(-50%) rotate(180deg);
}
.filter_desc {
    padding: 0 20px;
    padding-top: 8px;
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
        padding-bottom: 20px;
        @media (max-width: 450px) {
            padding-bottom: 20px;
        }
    }
}
.input {
    background: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 2px;
    padding: 0 50px 0 20px;
    width: 100%;
    height: 45px;
    background-image: url('../assets/Search.svg');
    background-position: center right 20px;
    background-size: 24px contain;
    background-repeat: no-repeat;
    transition: all 0.2s linear;
}
.search_make,
.search_model {
    p{
        font-weight: 600;
        font-size: 16px;
        line-height: 14px;
        color: #41456B;
        margin-bottom: 10px;
    }
}
.search_make {
    margin-bottom: 20px;
}
.checkbox {
    display: flex;
    .lable{
        display: flex;
        align-items: center;
        gap: 5px;
        position: relative;
    }
    input{
        margin-right: 10px;
    }
}
.price_value,
.year_value,
.kilometres_value {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    p {
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        text-align: right;
        color: #41456B;
    }
}

</style>
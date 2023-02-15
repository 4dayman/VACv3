<template>
    <div class="catalog_wrapper">
        <div class="catalog">
            <div class="catalog_sidebar">
                <h2>Detailed search</h2>
                <div class="catalog_filters">
                    <div class="catalog_filter" :class="open1 ? 'open1' : ''" >
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
                    <div class="catalog_filter" :class="open2 ? 'open2' : ''" >
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
                    <div class="catalog_filter" :class="open3 ? 'open3' : ''" >
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
                    <div class="catalog_filter" :class="open4 ? 'open4' : ''" >
                        <div class="filter_title" @click="open4 = !open4">Price</div>
                        <div class="filter_desc" :class="open4 ? 'open' : ''">
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
                    <div class="catalog_filter" :class="open5 ? 'open5' : ''" >
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
                    <div class="catalog_filter" :class="open6 ? 'open6' : ''" >
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
            <div class="catalog_mainbar">
                <div class="mainbar_header">
                    <div class="mainbar_header_left">
                        <div class="main_searchbar">
                            <input class="input search_input" type="text" placeholder="Find a dream car...">
                            <img src="../assets/Share.svg" alt="">
                        </div>
                        
                    </div>
                    <div class="mainbar_header_right">
                        <div class="main_right">
                            <p class="sorted">Sorted by</p>
                            <div class="catalog_filter recommendations" :class="open7 ? 'open7' : ''" >
                                <div class="filter_title recommendations" @click="open7 = !open7">Recommendations</div>
                                <div class="filter_desc" :class="open7 ? 'open' : ''">
                                    <p>Newest inventory</p>
                                    <p>Lowest price</p>
                                    <p>Highest prices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Slider from '@vueform/slider'
import "@vueform/slider/themes/default.scss"
export default {
    components: {
        Slider,
    },
    data() {
        return {
            open1: false,
            open2: false,
            open3: false,
            open4: false,
            open5: false,
            open6: false,
            open7: false,
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


.catalog_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 24px;
    @media (min-width: 1278px) {
        padding: 0;
    }
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.catalog {
    display: grid;
    grid-template-columns: 300px 1fr;
    column-gap: 40px;
}
.catalog_sidebar, 
.catalog_mainbar {
    margin-top: 49px;
}
.catalog_sidebar {
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
.catalog_mainbar {
    width: 100%;
}
.main_searchbar {
    display: flex;
    align-items: center;
    gap: 20px;
}
.main_right {
    display: flex;
    align-items: center;
    gap: 20px;
    .sorted {
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #41456B;
    }
}
.mainbar_header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.search_input {
    max-width: 350px;
}
.catalog_filters {
    width: 100%;
}
.catalog_filter {
    margin-bottom: 10px;
    border: 1px solid #D7D7D7;
    position: relative;
}
.catalog_filter.recommendations{
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 159%;
        &:not(:last-child){
            padding-bottom: 10px;
        }
    }
    width: 237px;
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
}
.catalog_filter.open1 .filter_title::after{
    transform: translateY(-50%) rotate(180deg);
}
.catalog_filter.open2 .filter_title::after{
    transform: translateY(-50%) rotate(180deg);
}
.catalog_filter.open3 .filter_title::after{
    transform: translateY(-50%) rotate(180deg);
}
.catalog_filter.open4 .filter_title::after{
    transform: translateY(-50%) rotate(180deg);
}
.catalog_filter.open5 .filter_title::after{
    transform: translateY(-50%) rotate(180deg);
}
.catalog_filter.open6 .filter_title::after{
    transform: translateY(-50%) rotate(180deg);
}
.catalog_filter.open7 .filter_title::after{
    transform: translateY(-50%) rotate(180deg);
    margin-top: 5px;
}
.catalog_filter.open7 .filter_title{
    padding-bottom: 0;
}
.filter_desc {
    padding: 0 20px;
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
        padding-top: 8px;
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
<template>
    <div class="catalog_wrapper">
        <div class="catalog">
            <div class="catalog_sidebar_shadow" @click="filtersShow = !filtersShow" :class="filtersShow ? 'filtersShow' : ''"></div>
            <div class="catalog_sidebar" :class="filtersShow ? 'filtersShow' : ''">
                <div @click="filtersShow = !filtersShow" class="sidebar_close_show"><img src="../assets/Close.svg" alt=""></div>
                <h2>Detailed search</h2>
                <div class="catalog_filters">
                    <div class="catalog_filter" :class="open1 ? 'open1' : ''" >
                        <div class="filter_title" @click="open1 = !open1">Make, Model</div>
                        <div class="filter_desc" :class="open1 ? 'open' : ''">
                            <div class="search_make">
                                <p>Make</p>
                                <input class="input" type="text" placeholder="Search Make...">
                            </div>
                            <div class="search_model">
                                <p>Model</p>
                                <input class="input" type="text" placeholder="Search Model...">
                            </div>
                        </div>
                    </div>
                    <div class="catalog_filter" :class="open2 ? 'open2' : ''" >
                        <div class="filter_title" @click="open2 = !open2">Body type</div>
                        <div class="filter_desc" :class="open2 ? 'open' : ''">
                            <div class="checkbox">
                                <input type="checkbox" id="Trucks" value="Trucks">
                                <lable for="Trucks" class="lable">
                                    <img src="../assets/Truckicon.svg" alt="">
                                    Trucks
                                </lable>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="SUV" value="SUV">
                                <lable for="SUV" class="lable">
                                    <img src="../assets/SUVicon.svg" alt="">
                                    SUV
                                </lable>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="Sedan" value="Sedan">
                                <lable for="Sedan" class="lable">
                                    <img src="../assets/Sedanicon.svg" alt="">
                                    Sedan
                                </lable>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="Hatchback" value="Hatchback">
                                <lable for="Hatchback" class="lable">
                                    <img src="../assets/Hatchbackicon.svg" alt="">
                                    Hatchback
                                </lable>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="Coupe" value="Coupe">
                                <lable for="Coupe" class="lable">
                                    <img src="../assets/Coupeicon.svg" alt="">
                                    Coupe
                                </lable>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="Convertiable" value="Convertiable">
                                <lable for="Convertiable" class="lable">
                                    <img src="../assets/Convertiableicon.svg" alt="">
                                    Convertiable
                                </lable>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="VAN" value="VAN">
                                <lable for="VAN" class="lable">
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
                    <!-- <div class="mainbar_header_left"> -->
                        <div class="main_searchbar">
                            <img @click="filtersShow = !filtersShow" class="filter_icon_show" src="../assets/Filtericon.svg" alt="icon">
                            <p class="seatch_filter_show">Search Filter</p>
                            <input class="input search_input" type="text" placeholder="Find a dream car...">
                            <img src="../assets/Share.svg" alt="">
                        </div>
                    <!-- </div> -->
                    <!-- <div class="mainbar_header_right"> -->
                        <div class="main_right">
                            <p class="sorted">Sorted by</p>
                            <div class="catalog_filter recommendations" :class="open7 ? 'open7' : ''" >
                                <div class="filter_title recommendations" @click="open7 = !open7">{{selected}}</div>
                                <div class="filter_desc recommendations" :class="open7 ? 'open' : ''">
                                    <p @click="recom" v-if="selected != recomValue">Recommendations</p>
                                    <p @click="newest" v-if="selected != newestValue">Newest inventory</p>
                                    <p @click="lowest" v-if="selected != lowestValue">Lowest price</p>
                                    <p @click="highest" v-if="selected != highestValue">Highest prices</p>
                                </div>
                            </div>
                        </div>
                    <!-- </div> -->
                </div>
                <div class="mainbar_cards">
                    <div class="mainbar_cards_wrapper">
                        <div class="mainbar_card">
                            <div class="mainbar_card_item" v-for="(video, i) in collection" :key="i"  @click="indexNo(i)">
                                <div class="mainbar_card_content_img">
                                    <Swiper
                                        class="swiper"
                                        :modules="modules"
                                        :slides-per-view="1"
                                        :space-between="0"
                                        :scrollbar="{ draggable: true }"
                                        :draggable="true"
                                    >
                                        <SwiperSlide class="slide">
                                            <img :src="video.url" alt="">
                                        </SwiperSlide>
                                        <SwiperSlide class="slide">
                                            <img :src="video.url1" alt="">
                                        </SwiperSlide>
                                        <SwiperSlide class="slide">
                                            <img :src="video.url2" alt="">
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div class="mainbar_card_content_text">
                                    <span>{{video.title}}</span>
                                    <h4>$ {{video.price}}</h4>
                                    <div class="info">
                                        <p>{{video.year}} year</p>
                                        <p>|</p>
                                        <p>{{video.body}}</p>
                                        <p>|</p>
                                        <p>{{video.transmition}}</p>
                                    </div>
                                    <p>{{video.kilometres}} km</p>
                                </div>
                            </div>
                        </div>
                        <div class="btn-toolbar">
                            <button
                                v-for="(p, i) in pagination.pages" 
                                :key="i" 
                                @click.prevent="setPage(p)"
                                :class="{'active': active === i}"
                            ></button>
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
import _ from 'lodash'
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/scrollbar';
export default {
    components: {
        Slider,
        Swiper,
        SwiperSlide,
    },
      setup() {
      return {
        modules: [Navigation, Scrollbar],
      };
  },

    data() {
        return {
            videos: [
                {
                    url: require('../assets/catalog/PorschePanamera_1.png'),
                    url1: require('../assets/catalog/PorschePanamera_2.png'),
                    url2: require('../assets/catalog/PorschePanamera_3.png'),
                    title: 'Porsche Panamera II Turbo S E-Hybrid',
                    price: '199 500',
                    year: '2016',
                    body: 'Sedan',
                    transmition: 'Manual',
                    kilometres: '100 000',
                },
                {
                    url: require('../assets/catalog/MitsubishiOutlander_1.png'),
                    url1: require('../assets/catalog/MitsubishiOutlander_2.png'),
                    url2: require('../assets/catalog/MitsubishiOutlander_3.png'),
                    title: 'Mitsubishi Outlander III Restyling 3',
                    price: '37 500',
                    year: '2018',
                    body: 'SUV',
                    transmition: 'Automatic',
                    kilometres: '150 000',
                },
                {
                    url: require('../assets/catalog/Mercedes-BenzCLA_1.png'),
                    url1: require('../assets/catalog/Mercedes-BenzCLA_2.png'),
                    url2: require('../assets/catalog/Mercedes-BenzCLA_3.png'),
                    title: 'Mercedes-Benz CLA I (C117, X117) 200',
                    price: '350 000',
                    year: '2017',
                    body: 'Coupe',
                    transmition: 'Manual',
                    kilometres: '200 000',
                },
                {
                    url: require('../assets/catalog/Mercedes-BenzW124_1.png'),
                    url1: require('../assets/catalog/Mercedes-BenzW124_2.png'),
                    url2: require('../assets/catalog/Mercedes-BenzW124_3.png'),
                    title: 'Mercedes-Benz W124 420',
                    price: '23 000',
                    year: '2015',
                    body: 'Sedan',
                    transmition: 'Automatic',
                    kilometres: '250 000',
                },
                {
                    url: require('../assets/catalog/Mercedes-BenzE-Class_1.png'),
                    url1: require('../assets/catalog/Mercedes-BenzE-Class_2.png'),
                    url2: require('../assets/catalog/Mercedes-BenzE-Class_3.png'),
                    title: 'Mercedes-Benz E-Class III (W211, S211) Restyling 230',
                    price: '50 000',
                    year: '2014',
                    body: 'Hatchback',
                    transmition: 'Manual',
                    kilometres: '300 000',
                },
                {
                    url: require('../assets/catalog/Audi-A7_1.png'),
                    url1: require('../assets/catalog/Audi-A7_2.png'),
                    url2: require('../assets/catalog/Audi-A7_3.png'),
                    title: 'Audi A7 I (4G) S-tronic',
                    price: '73 000',
                    year: '2013',
                    body: 'Sedan',
                    transmition: 'Automatic',
                    kilometres: '350 000',
                },
                {
                    url: require('../assets/catalog/FordE150_1.png'),
                    url1: require('../assets/catalog/FordE150_2.png'),
                    url2: require('../assets/catalog/FordE150_3.png'),
                    title: 'Ford E150',
                    price: '50 000',
                    year: '2020',
                    body: 'VAN',
                    transmition: 'Manual',
                    kilometres: '400 000',
                },
                {
                    url: require('../assets/catalog/FordF150Rapto_1.png'),
                    url1: require('../assets/catalog/FordF150Rapto_2.png'),
                    url2: require('../assets/catalog/FordF150Rapto_3.png'),
                    title: 'Ford F150 Raptor',
                    price: '123 000',
                    year: '2015',
                    body: 'Truck',
                    transmition: 'Automatic',
                    kilometres: '450 000',
                },
                {
                    url: require('../assets/catalog/ToyotaSupra_1.png'),
                    url1: require('../assets/catalog/ToyotaSupra_2.png'),
                    url2: require('../assets/catalog/ToyotaSupra_3.png'),
                    title: 'Toyota Supra',
                    price: '45 000',
                    year: '2012',
                    body: 'Convertiable',
                    transmition: 'Manual',
                    kilometres: '500 000',
                },
            ],
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
            // index: 0,
            popupActive: false,
            perPage: 6,
            pagination:{},
            // active: 0,
            recomValue: 'Recommendations',
            newestValue: 'Newest inventory',
            lowestValue: 'Lowest price',
            highestValue: 'Highest prices',
            selected: 'Recommendations',
            filtersShow: false,
        }
    },
    computed: {
        collection() {
            return this.paginate(this.videos)
        }
    },
    methods: {
        recom() {
            this.selected = this.recomValue
            this.open7 = !this.open7
        },
        newest() {
            this.selected = this.newestValue
            this.open7 = !this.open7
        },
        lowest() {
            this.selected = this.lowestValue
            this.open7 = !this.open7
        },
        highest() {
            this.selected = this.highestValue
            this.open7 = !this.open7
        },
        indexNo(i) {
            this.$emit('blogIndex', i)
            this.index = i
        },
        setPage(p) {
            this.pagination = this.paginator(this.videos.length, p);
                this.active = p - 1
        },
        paginate(videos) {
            return _.slice(videos, this.pagination.startIndex, this.pagination.endtIndex +1)
        },
        paginator(totalItems, currentPage) {
            var startIndex = (currentPage - 1) * this.perPage,
            endtIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);
            return {
                currentPage: currentPage,
                startIndex: startIndex,
                endtIndex: endtIndex,
                pages: _.range(1, Math.ceil(totalItems / this.perPage) + 1)
            };
        }
    },
    created() {
        this.setPage(1)
    },
    watch: {
        // whenever active changes, this function will run
        filtersShow() {
            // document.body.style.overflow = this.filtersShow ? 'hidden' : '';
        },
    }


}



</script>
<style lang="scss">
.select_recommendations{
    height: 45px;
    width: 237px;
    padding-left: 20px;
    border: 1px solid #D7D7D7;
    border-radius: 2px;
    font-weight: 500;
    font-size: 16px;
    color: #41456B;
}
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
.catalog_sidebar {
    left: -100%;
    opacity: 0;
    position: fixed;
    z-index: 2;
    background: #FFFFFF;
    width: 100%;
    padding: 0px 174px 20px 174px;
    margin: 0 auto;
    @media (max-width: 768px) {
        padding: 0 24px 20px 24px;
    }
    h2{
        text-align: left;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456B;
        margin-bottom: 31px;
        @media (max-width: 768px) {
            padding: 0 34px;
        }
    }
}
.filtersShow {
    transition: all 0.4s;
    padding-top: 49px;
    top: 80px;
    left: 0;
    opacity: 1;
    @media (max-width: 375px) {
        top: 55px;
    }
}
.sidebar_close_show {
    left: 24px;
    position: absolute;
    cursor: pointer;
}
.catalog_sidebar_shadow {
    position: fixed;
    display: none;
    top: 0;
    left:0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
}
.catalog_sidebar_shadow.filtersShow {
    display: block;
}
.catalog_mainbar {
    margin-top: 40px;
    @media (max-width: 375px) {
        margin-top: 20px;
    }
    width: 100%;
}
.main_searchbar {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    .seatch_filter_show {
        min-width: 104px;
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #41456B;
    }
}

@media (max-width: 900px) {
    .seatch_filter_show {
        display: none;
    }
    .sorted {
        display: none;
    }
}
@media (min-width: 1024px) {
    .catalog {
        display: grid;
        grid-template-columns: 300px 1fr;
        column-gap: 40px;
    }
    .catalog_sidebar {
        position: relative;
        display: block;
        margin-top: 49px;
        width: 300px;
        height: 100%;
        padding: 0;
        left: 0;
        opacity: 1;
        h2{
            text-align: left;
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            color: #41456B;
            margin-bottom: 31px;
        }
    }
    .sidebar_close_show {
    display: none;
    }
    .catalog_sidebar_shadow {
        display: none;
    }
    .catalog_sidebar_shadow.filtersShow {
        display: none;
    }
    .filter_icon_show {
        width: 26px;
        height: 22px;
        display: none;
    }
    .seatch_filter_show {
        width: 94px;
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #41456B;
        display: none;
    }
}
.filter_icon_show {
    cursor: pointer;
}
.main_right {
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 768px) {
        width: 100%;
    }

    .sorted {
        width: 75px;
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #41456B;
        margin-left: 10px;
    }
}
.mainbar_header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
}
.search_input {
    max-width: 350px;
    @media (max-width: 768px) {
        margin-bottom: 10px;
        max-width: 100%;
    }
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
    width: 237px;
    @media (max-width: 768px) {
        width: 100%;
    }
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 159%;
        &:not(:last-child){
            padding-bottom: 10px;
        }
    }
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
.filter_title.recommendations{
    @media (max-width: 768px) {
        width: 100%;
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
}
.catalog_filter.open7{
    border-bottom: none;

}
.catalog_filter.open7 .filter_desc{
    border: 1px solid #D7D7D7;
    border-top:none;

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
.filter_desc.recommendations {
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
    opacity:0;
    max-height: 0px;
    overflow-y: hidden;
    background: #FFFFFF;
    position: absolute;
    p{
        cursor: pointer;
        &:hover{
            color: #000;
        }
    }
    &.open {
        width: 100%;
        z-index: 2;
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
.mainbar_card{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
}
.mainbar_card_item {
    margin-bottom: 20px;
    background: #FFFFFF;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
    align-self: flex-start;
}
.mainbar_card_content_img{
    .slide{
        cursor: pointer;
        height: 216px;
        padding: 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
.swiper-scrollbar{
    background: rgba(255, 255, 255, 0.2);
    border-radius: 28px;
    cursor: pointer;
}
.swiper-scrollbar-drag {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 28px;
}
.mainbar_card_content_text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 20px;
    span {
        text-align: left;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456B;
        @media (max-width: 460px) {
            font-size: 18px;
        }
    }
    h4 {
        margin-top: 10px;
        margin-bottom: 20px;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #7481FF;
    }
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #41456B;
    }
    .info {
        display: flex;
        column-gap: 20px;
        flex-wrap: wrap;
    }
}
button{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    margin-bottom: 40px;
    background: #606276;
    opacity: 0.3;
}
button.active {
    opacity: 1;
}
</style>
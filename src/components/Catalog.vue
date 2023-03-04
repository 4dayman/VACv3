<template>
    <div class="catalog_wrapper">
        <div class="catalog">
            <div class="catalog_sidebar_shadow" @click="filtersShow = !filtersShow" :class="filtersShow ? 'filtersShow' : ''"></div>
            <div class="catalog_sidebar" :class="filtersShow ? 'filtersShow' : ''">
                <div @click="filtersShow = !filtersShow" class="sidebar_close_show"><img src="../assets/Close.svg" alt="no-img"></div>
                <div class="clear_filters">
                    <h2>Detailed search</h2>
                    <p 
                        @click="clrarFilters" 
                        :class="clearFilters ? 'active' : ''"
                        v-if="this.cars.length != this.filteredCars.length"
                    >Clear filters</p>
                </div>
                <div class="catalog_filters">
                    <div class="catalog_filter" :class="open1 ? 'open1' : ''" >
                        <div class="filter_title" @click="open1 = !open1">Make, Model</div>
                        <div class="filter_desc" :class="open1 ? 'open' : ''">
                            <div class="search_make" :class="makeClear ? 'active' : ''">
                                <p>Make</p>
                                <div class="search_make_wrap">
                                    <input @focus="makeSearchPop = true" v-model="searchMake" class="input" type="text" placeholder="Search Make...">
                                    <div class="search_make_pop" :class="makeSearchPop ? 'active' : ''">
                                        <ul v-for="(car, i) in carList" :key="i" >
                                            <li @click="makeSelect(i)" >{{ car.make }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="make_clear" @click="clearMake" :class="makeClear ? 'active' : ''">
                                <img src="../assets/Close_filter.svg" alt="no-img">
                                {{ searchMake }}
                            </div>
                            <div class="search_model" :class="modelClear ? 'active' : ''">
                                <p>Model</p>
                                <div class="search_model_wrap">
                                    <input @focus="modelSearchPop = true" v-model="searchModel" class="input" type="text" placeholder="Search Model...">
                                    <div class="search_make_pop" :class="modelSearchPop ? 'active' : ''">
                                        <ul v-for="(car, i) in filteredCars" :key="i" >
                                            <li @click="modelSelect(i)" >{{ car.model }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="model_clear" @click="clearModel" :class="modelClear ? 'active' : ''">
                                <img src="../assets/Close_filter.svg" alt="no-img">
                                {{ searchModel }}
                            </div>
                        </div>
                    </div>
                    <div class="catalog_filter" :class="open2 ? 'open2' : ''" >
                        <div class="filter_title" @click="open2 = !open2">Body type</div>
                        <div class="filter_desc" :class="open2 ? 'open' : ''">
                            <label class="checkbox" for="Truck">
                                <img src="../assets/Truckicon.svg" alt="no-img">
                                <p>Truck</p>
                                <input type="checkbox" id="Truck" value="Truck" v-model="body">
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox" for="SUV">
                                <img src="../assets/SUVicon.svg" alt="no-img">
                                <p>SUV</p>
                                <input type="checkbox" id="SUV" value="SUV" v-model="body">
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox" for="Sedan">
                                <img src="../assets/Sedanicon.svg" alt="no-img">
                                <p>Sedan</p>
                                <input type="checkbox" id="Sedan" value="Sedan" v-model="body">
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox" for="Hatchback">
                                <img src="../assets/Hatchbackicon.svg" alt="no-img">
                                <p>Hatchback</p>
                                <input type="checkbox" id="Hatchback" value="Hatchback" v-model="body">
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox" for="Coupe">
                                <img src="../assets/Coupeicon.svg" alt="no-img">
                                <p>Coupe</p>
                                <input type="checkbox" id="Coupe" value="Coupe" v-model="body">
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox" for="Convertiable">
                                <img src="../assets/Convertiableicon.svg" alt="no-img">
                                <p>Convertiable</p>
                                <input type="checkbox" id="Convertiable" value="Convertiable" v-model="body">
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox" for="VAN">
                                <img src="../assets/VANicon.svg" alt="no-img">
                                <p>VAN</p>
                                <input type="checkbox" id="VAN" value="VAN" v-model="body">
                                <span class="checkmark"></span>
                            </label>
                            <div class="checkbox_checks" v-for="(bod, i) in body.length" :key="i">
                                <div @click="this.body.splice(i,1)" class="checks">
                                    <img src="../assets/Close_filter.svg" alt="">{{ this.body[i] }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="catalog_filter" :class="open3 ? 'open3' : ''" >
                        <div class="filter_title" @click="open3 = !open3">Transmission</div>
                        <div class="filter_desc" :class="open3 ? 'open' : ''">
                            <label class="checkbox" for="Automatic">
                                <p>Automatic</p>
                                <input type="checkbox" id="Automatic" value="Automatic" v-model="transmition">
                                <span class="checkmark"></span>
                            </label>
                            <label class="checkbox" for="Manual">
                                <p>Manual</p>
                                <input type="checkbox" id="Manual" value="Manual" v-model="transmition">
                                <span class="checkmark"></span>
                            </label>
                            <div class="checkbox_checks" v-for="(trans, i) in transmition.length" :key="i">
                                <div @click="this.transmition.splice(i, 1)" class="checks">
                                    <img src="../assets/Close_filter.svg" alt="">{{ this.transmition[i] }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="catalog_filter" :class="open4 ? 'open4' : ''" >
                        <div class="filter_title" @click="open4 = !open4">Price</div>
                        <div class="filter_desc" :class="open4 ? 'open' : ''">
                            <div class="price_value">
                                <p>$ {{this.price[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}</p>
                                <p>$ {{this.price[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}</p>
                            </div>
                            <Slider
                                v-model="price"
                                :min="0"
                                :max="350000"
                                :step="1000"
                                @change="priceChange"
                            />
                            <div class="checkbox_checks price_checks" :class="clearPrice ? 'active' : ''">
                                <div @click="priceClear" class="checks" v-if="this.price[0] != 10000 || this.price[1] != 350000" >
                                    <img src="../assets/Close_filter.svg" alt="">$ {{ this.price[0]}} - $ {{ this.price[1] }}
                                </div>
                            </div>
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
                                @change='yearCange'
                            />
                            <div class="checkbox_checks price_checks" :class="clearYear ? 'active' : ''">
                                <div @click="yearClear" class="checks" v-if="this.year[0] != 1990 || this.year[1] != 2023" >
                                    <img src="../assets/Close_filter.svg" alt="">$ {{ this.year[0] }} - $ {{ this.year[1] }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="catalog_filter" :class="open6 ? 'open6' : ''" >
                        <div class="filter_title" @click="open6 = !open6">Kilometres</div>
                        <div class="filter_desc" :class="open6 ? 'open' : ''">
                            <div class="kilometres_value">
                                <p>{{this.kilometres.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} or less</p>
                            </div>
                            <Slider
                                v-model="kilometres"
                                :min="0"
                                :max="500000"
                                :step="1000"
                                @change="kmChange"
                            />
                            <div class="checkbox_checks price_checks" :class="clearKm ? 'active' : ''">
                                <div @click="kmClear" class="checks" v-if="this.kilometres != 500000" >
                                    <img src="../assets/Close_filter.svg" alt="">{{ this.kilometres }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button 
                    @click="filtersShow = !filtersShow" 
                    class="apply_btn" 
                    :class="clearFilters ? 'active' : ''"
                    v-if="this.cars.length != this.filteredCars.length"
                >Apply</button>
            </div>
            <div class="catalog_mainbar">
                <div class="mainbar_header">
                    <div class="main_searchbar">
                        <img @click="filtersShow = !filtersShow" class="filter_icon_show" src="../assets/Filtericon.svg" alt="icon">
                        <p class="seatch_filter_show">Search Filter</p>
                            <input 
                                @focus="popActive=true" 
                                v-model="search" 
                                class="input search_input" 
                                type="text" 
                                placeholder="Find a dream car..."
                            >
                            <div class="search_pop" :class="popActive ? 'active' : ''">
                                <img @click="popActive = !popActive" src="../assets/Close.svg" alt="no-img">
                                <ul v-for="(car, i) in carList" :key="i" >
                                    <li @click="carSelect(i)">{{car.make}}</li>
                                </ul>
                            </div>
                        <img src="../assets/Share.svg" alt="">
                    </div>
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
                </div>
                <div class="mainbar_cards">
                    <div class="mainbar_cards_wrapper">
                        <div class="mainbar_card">
                            <div class="mainbar_card_item" v-for="(car, i) in paginatedData" :key="i"  @click="indexNo(i)">
                                <div class="mainbar_card_content_img">
                                    <Swiper
                                        class="swiper"
                                        :modules="modules"
                                        :slides-per-view="1"
                                        :space-between="0"
                                        :scrollbar="{ draggable: true }"
                                    >
                                        <SwiperSlide class="slide">
                                            <img :src="car.url" alt="">
                                        </SwiperSlide>
                                        <SwiperSlide class="slide">
                                            <img :src="car.url1" alt="">
                                        </SwiperSlide>
                                        <SwiperSlide class="slide">
                                            <img :src="car.url2" alt="">
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div class="mainbar_card_content_text">
                                    <router-link :to="{path: `/car/${car.id}`}">
                                        <span>{{car.make}} {{car.model}} {{ car.modelDesc }}</span>
                                    </router-link>
                                    <h4>$ {{car.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}}</h4>
                                    <div class="info">
                                        <p>{{car.year}} year</p>
                                        <p>|</p>
                                        <p>{{car.body}}</p>
                                        <p>|</p>
                                        <p>{{car.transmition}}</p>
                                    </div>
                                    <p>{{car.kilometres.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}} km</p>
                                </div>
                            </div>
                        </div>
                        <div class="btn-toolbar"
                                v-if="pageCount > 1">
                            <button
                                v-for="(p, i) in pageCount" 
                                :key="i" 
                                @click.prevent="setPage(i)"
                                :class="{'active': active === i}"
                            ></button>
                        </div>
                        <div class="no_match" v-if="paginatedData.length < 1">
                            <img src="../assets/Sedan_icon.png" alt="no-img">
                            <h3>Unfortunately there are no matches for your query.</h3>
                            <p>Try using other filter settings or request a car of your choice.</p>
                            <a href="">Request a car</a>
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
    props: {
        cars: {
        type: Array,
        default: () => []
        },
        size: {
            type: Number,
            required: false,
            default: 6,
        }
    },
    data() {
        return {
            sortCars: this.cars,
            pageNumber: 0,
            active: 0,
            open1: false,
            open2: false,
            open3: false,
            open4: false,
            open5: false,
            open6: false,
            open7: false,
            price: [10000, 350000],
            year: [1990, 2023],
            kilometres: 500000,
            index: 0,
            recomValue: 'Recommendations',
            newestValue: 'Newest inventory',
            lowestValue: 'Lowest price',
            highestValue: 'Highest prices',
            selected: 'Recommendations',
            filtersShow: false,
            search: '',
            searchMake: '',
            searchMake1: '',
            searchModel: '',
            popActive: false,
            transmition: [],
            body: [],
            carList: [
                {make: 'Porsche'},
                {make: 'Mitsubishi'},
                {make: 'Mercedes-Benz'},
                {make: 'Audi'},
                {make: 'Ford'},
                {make: 'Toyota'},
            ],
            clearFilters: false,
            makeSearchPop: false,
            modelSearchPop: false,
            makeClear: false,
            modelClear: false,
            clearPrice: false,
            clearYear: false,
            clearKm: false,
        }
    },
    computed: {
        pageCount(){
            let l = this.filteredCars.length,
            s = this.size;
            return Math.ceil(l/s);
        },
        paginatedData(){
            const start = this.pageNumber * this.size,
            end = start + this.size;
            return this.filteredCars.slice(start, end);
        },
        // carsArray(){
        //     return [...new Set(this.cars)];

        // },
        filteredCars() {
            this.pageNumber = 0
            this.active = 0
            if(this.search !==  ''){
                this.clearFilters = true
            }
            return this.makeFilter.filter(car => {
                return car.make.toLowerCase().indexOf(this.search.toLowerCase()) > -1  ||
                car.model.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
                car.body.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
                car.transmition.toLowerCase().indexOf(this.search.toLowerCase()) > -1 
            })
        },
        makeFilter() {
            if(this.searchMake !==  ''){
                this.clearFilters = true
                this.makeClear = true
            }
            return this.modelFilter.filter(car => {
                return car.make.toLowerCase().indexOf(this.searchMake.toLowerCase()) > -1
            })
        },
        modelFilter() {
            if(this.searchModel !==  ''){
                this.clearFilters = true
                this.modelClear = true
            }
            return this.yearCange.filter(car => {
                return car.model.toLowerCase().indexOf(this.searchModel.toLowerCase()) > -1
            })
        },
        yearCange() {
            if(this.year[0] !==  1990){
                this.clearFilters = true
                this.clearYear = true
            }
            if(this.year[1] !== 2023 ){
                this.clearFilters = true
                this.clearYear = true
            }
            return this.priceChange.filter(car => {
                return car.year >= this.year[0] && car.year <= this.year[1]
            }) 
        },
        priceChange() {
            if(this.price[0] !==  10000){
                this.clearFilters = true
                this.clearPrice = true
            }
            if(this.price[1] !== 350000 ){
                this.clearFilters = true
                this.clearPrice = true
            }
            return this.kmChange.filter(car => {
                return car.price >= this.price[0] && car.price <= this.price[1]
            }) 
        },
        kmChange() {
            if(this.kilometres !== 500000){
                this.clearFilters = true
                this.clearKm = true
            }
            return this.transmChange.filter(car => {
                return car.kilometres <= this.kilometres
            }) 
        },
        transmChange(){
            let data = []
            if (this.transmition.length) {
                this.clearFilters = true
                data = this.bodyChange.filter(x => this.transmition.indexOf(x.transmition.toString()) != -1)
            } else {
                // this.clearFilters = false
                data = this.bodyChange
            }
            return data
        },
        bodyChange(){
            let data = []
            // если есть выбранные чекбоксы
            if (this.body.length) {
                // фильтруем данные
                this.clearFilters = true
                data = this.cars.filter(x => this.body.indexOf(x.body.toString()) != -1)
            } else {
                // this.clearFilters = false
                // иначе отдаем все данные из массива
                data = this.cars
            }
            return data
        },
    },
    methods: {
        clrarFilters(){
            this.search = ''
            this.searchMake = ''
            this.searchModel = ''
            this.kilometres = 500000
            this.price = [10000, 350000]
            this.year = [1990, 2023]
            this.clearFilters = false
            this.body = [] 
            this.transmition = []
            this.makeSearchPop = false
            this.modelSearchPop = false
            this.makeClear = false
            this.modelClear = false
            this.clearPrice = false
            this.clearYear = false
            this.clearKm = false
        },
        clearMake() { 
            this.makeClear = false
            this.searchMake = ''
            this.modelClear = false
            this.searchModel = ''
        },
        clearModel() { 
            this.modelClear = false
            this.searchModel = ''
        },
        priceClear() {
            this.price = [10000, 350000]
            this.clearPrice = false
        },
        yearClear() {
            this.year = [1990, 2023]
            this.clearYear = false
        },
        kmClear() {
            this.kilometres = 500000
            this.clearKm = false
        },
        carSelect(i){
            this.popActive = false
            this.search = this.carList[i].make
        },
        makeSelect(i){
            this.makeSearchPop = false
            this.searchMake = this.carList[i].make
            this.modelClear = false
            this.searchModel = ''
        },
        modelSelect(i){
            this.modelSearchPop = false
            this.searchModel = this.filteredCars[i].model
        },
        recom() {
            this.selected = this.recomValue
            this.open7 = !this.open7
            this.sortCars.sort(function(a, b){
                return a.id - b.id
            })
        },
        newest() {
            this.selected = this.newestValue
            this.open7 = !this.open7
            this.sortCars.sort(function(a, b){
                return b.year - a.year
            })
        },
        lowest() {
            this.selected = this.lowestValue
            this.open7 = !this.open7
            this.sortCars.sort(function(a, b){
                return a.price - b.price
            })

        },
        highest() {
            this.selected = this.highestValue
            this.open7 = !this.open7
            this.sortCars.sort(function(a, b){
                return +b.price - +a.price
            })
        },
        indexNo(i) {
            this.$emit('blogIndex', i)
            this.index = i
        },
        setPage(i) {
            this.pageNumber = i;
            this.active = i
        },
        carId(id) { 
            
        },
    },
    watch: {
        // whenever active changes, this function will run
        filtersShow() {
            document.body.style.overflow = this.filtersShow ? 'hidden' : '';
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
    position: absolute;
    z-index: 3;
    background: #FFFFFF;
    width: 100%;
    height: 80%;
    padding: 0px 174px 20px 174px;
    margin: 0 auto;
    @media (max-width: 768px) {
        padding: 0 24px 20px 24px;
    }
}
.clear_filters{
    width: 100%;
    display: flex;
    // align-items: center;
    justify-content: space-between;
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
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 159%;
        color: #7481FF;
        display: none;
        cursor: pointer;
        &.active{
            display: block;
        }
    }
}
.filtersShow {
    transition: all 0.4s;
    padding-top: 49px;
    top: 80px;
    left: 0;
    opacity: 1;
    overflow: auto;
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
    position: relative;
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
        padding: 0;
        left: 0;
        opacity: 1;
        background: none;
        h2{
            text-align: left;
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            color: #41456B;
            margin-bottom: 31px;
        }
    }
    .filtersShow{
       top: 0;
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
// .search_input:focus {
//     background: red;
// }
.search_pop{
    width: 350px;
    height: 155px;
    overflow: auto;
    z-index: 2;
    border: 1px solid #d7d7d7;
    position: absolute;
    display: none;
    top: 45px;
    left: 0;
    padding: 20px;
    img{
        width: 10px;
        height: 10px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
    @media (max-width: 1024px) {
        left: 172px;
    }
    @media (max-width: 900px) {
        left: 48px;
    }
    @media (max-width: 768px) {
        width: 86.2%;
    }

    ul{
        &:not(:last-child){
            padding-bottom: 10px;
        }
        li{
            
            display: flex;
            text-align: left;
            font-weight: 600;
            font-size: 16px;
            line-height: 14px;
            color: #41456B;
            cursor: pointer;
            &:hover{
                color: #000;
            }
        }
    }
}
.search_pop.active{
        display: block;
        background: #ffffff;
    }
.catalog_filters {
    width: 100%;
}
.apply_btn{
    width: 100%;
    display: none;
    margin-top: 20px;
    padding: 10px 0;
    background: #7481FF;
    border-radius: 2px;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
}
@media (max-width: 1024px) {
    .apply_btn.active{
        display: block;
    }
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
    margin-bottom: 11px;
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
    width: calc(100% + 2px);
    margin-left: -1px;
    p{
        cursor: pointer;
        &:hover{
            color: #000;
        }
    }
    &.open {
        z-index: 2;
        opacity:1;
        max-height: 1000px;
        padding-bottom: 20px;
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
.search_make.active {
    display: none;
}
.search_model.active {
    display: none;
}
.search_make_wrap{
    width: 100%;
}

.search_make_pop {
    max-height: 155px;
    width: 100%;
    padding: 20px;
    background: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 2px;
    border-top: none;
    display: none;
    li{
        font-weight: 600;
        font-size: 16px;
        line-height: 14px;
        color: #41456B;
        margin-bottom: 10px;
        cursor: pointer;
        &:hover{
            color: #000;
        }
    }
}
.search_make_pop.active{
    display: inline-block;
    overflow: auto;

}
.make_clear,
.model_clear{
    height: 35px;
    display: none;
    padding: 10px;
    align-items: center;
    background: rgba(116, 129, 255, 0.2);
    border-radius: 2px;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #41456B;
    margin-bottom: 20px;
    cursor: pointer;
    img{
        padding-right: 10px;
    }
}
.make_clear.active,
.model_clear.active{
    display: inline-flex;
    margin-right: 5px;
}
// ------ custome checkbox--------
.checkbox {
  position: relative;
  cursor: pointer;
  padding-left: 30px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  align-items: flex-start;
  margin-bottom: 2px;
  img{
    margin-top: 2px;
    padding-right: 5px;
  }
  p{
    margin-top: -2px;
    &:hover{
        color: #000;
    }
  }
}
/* Hide the browser's default checkbox */
.checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid #D7D7D7;
    border-radius: 2px;
    background: #fff;
}

/* On mouse-over, add a grey background color */
.checkbox:hover input ~ .checkmark {
    border: 1px solid #bebebe;
}

/* When the checkbox is checked, add a blue background */
// .checkbox input:checked ~ .checkmark {
  
// }

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  background-image: url('../assets/checkmark.svg');
  background-size: cover;
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox .checkmark:after {
  left: 4.5px;
  top: 2.5px;
  width: 14.5px;
  height: 10px;
}
// ------ end custome checkbox--------
.checkbox_checks {
    display: inline-flex;
}
.price_checks{
    display: none;
}
.price_checks.active{
    margin-top: 20px;
    margin-bottom: -20px;
    display: inline-block;
}
.checks {
    height: 35px;
    padding: 10px;
    align-items: center;
    background: rgba(116, 129, 255, 0.2);
    border-radius: 2px;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #41456B;
    margin-bottom: 10px;
    margin-right: 10px;
    cursor: pointer;
    img{
        padding-right: 10px;
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
    text-align: left;
    span {
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
.btn-toolbar{
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

}
.no_match {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 60px;
    background: #FFFFFF;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 40px;
    img{
        width: 89px;
        height: 30px;
        margin-bottom: 20px;
    }
    h3{
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456B;
        margin-bottom: 10px;
    }
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #41456B;
        margin-bottom: 20px;
    }
    a{
        font-weight: 700;
        font-size: 16px;
        line-height: 14px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #7481FF;
    }
}
</style>
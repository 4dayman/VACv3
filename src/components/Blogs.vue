<template>
    <div class="interesting_wrapper">
        <div class="interesting">
                <div class="interesting_main">
                    <div 
                        v-for="(blog, index) in paginatedData"
                        :key="index"
                        class="slide"
                        @click="indexNo(index)"
                    >
                        <router-link :to="{ path: `/article/${blog.id}` }">
                            <div class="content_img">
                                <img :src="blog.url" alt="">
                            </div>
                            <div class="content_text">
                                <p>{{blog.date}}</p>
                                <span>{{blog.title}}</span>
                            </div>
                         </router-link>
                    </div>
                </div>
                <div class="btn-toolbar">
                    <button
                        v-for="(p, i) in pageCount" 
                        :key="i" 
                        @click.prevent="setPage(i)"
                        :class="{'active': active === i}"
                    ></button>
                </div>
        </div>
    </div>
</template>
<script>

export default {
    components: {
    },
    methods: {
        indexNo(index) {
            console.log(index)
            this.$emit('blogIndex', index)
        },
        
    },
    props: {
        blogs: {
        type: Array,
        default: () => []
        },
        size: {
            type: Number,
            required: false,
            default: 9,
        }
    },
    data() {
        return {
            pageNumber: 0,
            index: 0,
            active: 0,
            windowWidth: window.innerWidth,
        }
    },
    computed: {
        pageCount(){
            let l = this.blogs.length,
            s = this.size;
            return Math.ceil(l/s);
        },
        paginatedData(){
            const start = this.pageNumber * this.size,
            end = start + this.size;
            return this.blogs.slice(start, end);
        },
    },
    methods: {
        indexNo(i) {
            this.$emit('blogIndex', i)
            this.index = i
        },
        setPage(i) {
            this.pageNumber = i;
            this.active = i
        },
    },
}
</script>
<style lang="scss" scoped>
.interesting_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.interesting{
    margin-top: 40px;
    margin-bottom: 40px;
    padding-bottom: 40px;
}
.interesting_title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;
}
.title{
    text-align: left;
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456B;
    @media (max-width: 560px) {
        font-size: 30px;
    }
}
.interesting_main{
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
}
.slide {
    background: #FFFFFF;
    border-radius: 5px;
    min-height: 360px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    // @media (max-width: 1024px) {
    //     &:last-child {
    //         display: none;
    //     }
    // }
    // @media (max-width: 768px) {
    //     &:last-child {
    //         display: block;
    //     }
    // }
}
.content_img {
    height: 230px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.content_text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 30px 30px 30px 30px;
    @media (max-width: 460px) {
        padding: 20px 10px 30px 10px;
    }
    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #606276;
    }
    span {
        max-width: 300px;
        text-align: left;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456B;
        @media (max-width: 460px) {
            font-size: 18px;
        }

    }
}
.bottom_btn {
    display: none;
        width: 90%;
    @media (max-width: 460px) {
        display: flex;
        align-items: center;
        justify-content: center;
        display: block;
        max-height: 35px;
        padding: 10px;
        margin: 0 auto;
    }
}
.top_btn {
    @media (max-width: 460px) {
        display: none;
    }
}
.btn-toolbar{
    button{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 10px;
        margin-top: 20px;
        background: #606276;
        opacity: 0.3;
    }
    button.active {
        opacity: 1;
    }
}
</style>
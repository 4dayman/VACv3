<template>
    <div class="videos_wrapper">
        <div class="videos">
            <div class="videos_item" v-for="(video, i) in paginatedData" :key="i"  @click="indexNo(i)">
                <div class="videos_content_img" @click="popupActive = !popupActive">
                    <div class="video_play">
                        <img src="../assets/Video_play.svg" alt="">
                    </div>
                    <img :src="video.url" alt="">
                </div>
                <div class="videos_content_text" @click="popupActive = !popupActive">
                    <span>{{video.title}}</span>
                </div>
            </div>
        </div>
        <div v-show="popupActive" class="video_popup_shadow" @click="popupActive = !popupActive" :class="{popupActive}"></div>
        <div v-show="popupActive" class="video_popup" :class="{popupActive}">
            <div @click="popupActive = !popupActive" class="video_popup_close">
                <img src="../assets/CloseW.svg" alt="">
            </div>
                <iframe width="100%" height="100%" :src="videos[index].videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
</template>

<script>
import _ from 'lodash'
export default {
    props: {
        videos: {
        type: Array,
        default: () => []
        },
        size: {
            type: Number,
            required: false,
            default: 4,
        }
    },
    data() {
        return {
            pageNumber: 0,
            index: 0,
            popupActive: false,
            active: 0,
        }
    },
    watch: {
        popupActive() {
            document.body.style.overflow = this.popupActive ? 'hidden' : ''
            if(this.index == 0) {
                this.index = 1
            } else {
                this.index = 0
            }
        },
    },
    computed: {
        pageCount(){
            let l = this.videos.length,
            s = this.size;
            return Math.ceil(l/s);
        },
        paginatedData(){
            const start = this.pageNumber * this.size,
            end = start + this.size;
            return this.videos.slice(start, end);
        }
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
.videos_wrapper{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 24px;
    @media (max-width: 460px) {
        padding: 0 20px;
    }
}
.videos{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        row-gap: 20px;
    }
    @media (max-width: 460px) {
    }
}
.videos_item {
    min-height: 416px;
    @media (max-width: 768px) {
        min-height: 400px;
    }
    @media (max-width: 460px) {
        min-height: 244px;
    }
}
.videos_content_img{
     position: relative;
    height: 326px;
    cursor: pointer;
    @media (max-width: 768px) {
        height: 400px;
    }
    @media (max-width: 460px) {
        height: 178px;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.video_play {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 53px;
    height: 53px;
    transform: translate(-50%, -50%);
    @media (max-width: 460px) {
        width: 35px;
        height: 35px;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.videos_content_text {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 20px 30px 0px 0px;
    @media (max-width: 460px) {
        padding: 20px 10px 30px 10px;
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
.btn-toolbar{
    button{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-top: 10px;
        margin-right: 10px;
        margin-bottom: 40px;
        background: #606276;
        opacity: 0.3;
    }
    button.active {
        opacity: 1;
    }
}
.video_popup {
    position: fixed;
    opacity: 0;
    z-index: 4;
    transition: all 0.3s ease 0s;
}
iframe {
    height: 543px;
    @media (max-width: 768px) {
        height: 375px;
    }
    @media (max-width: 460px) {
        height: 234px;
    }
    @media (max-width: 375px) {
        height: 234px;
    }
}
.video_popup.popupActive {
    opacity: 1;
    right: 287px;
    left: 286px;
    top: 225px;
    @media (max-width: 1270px) {
        right: 84px;
        left: 84px;
        top: 225px;
    }
    @media (max-width: 460px) {
        right: 20px;
        left: 20px;
        top: 166px;
    }
    @media (max-width: 460px) {
        right: 10vw;
        left: 10vw;
        top: 166px;
    }
}

.video_popup_close {
    cursor: pointer;
    position: absolute;
    right: -40px;
    width: 24px;
    height: 24px;
    @media (max-width: 460px) {
        right: 0;
        top: -40px;
    }
}
.video_popup_shadow {
    position: fixed;
    display: none;
    top: 0;
    left:0;
    z-index: 3;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
}
.video_popup_shadow.popupActive {
    display: block;
}

</style>
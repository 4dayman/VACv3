<template>
    <div class="terms_wrapper">
        <div class="terms">
            <vue-collapsible-panel-group
                bg-color-header="#fff"
                base-color="#ffffff"
                border-color="#D7D7D7"
                class="panel-group"
            >
                    <vue-collapsible-panel
                        class="panel"
                        v-for="(term, index) in accordions"
                        :key="index"
                        :expanded="false"
                    >
                        <!-- @click="active = !active" -->
                        <template #title>
                            <div class="accordion_title">
                                <h4>
                                    {{term.title}}
                                </h4>
                                <!-- <img :class="{active: term.id == index}" src="../assets/arrowDown.svg" alt=""> -->
                            </div>
                        </template>
                        <template #content>
                            <div class="accordion_desc">
                                {{term.desc}}
                            </div>
                        </template>
                    </vue-collapsible-panel>
            </vue-collapsible-panel-group>
        </div>
    </div>
</template>
<script>
import { VueCollapsiblePanelGroup, VueCollapsiblePanel, } from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
export default {
    components: {
        VueCollapsiblePanelGroup,
        VueCollapsiblePanel
    },
    props: {
        accordions: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            active: false,
        }
    },
}
</script>
<style lang="scss">
.terms_wrapper{
    max-width: 1260px;
    margin: 0 auto;
    padding: 0 15px;
}
.panel-group {
    margin-bottom: 40px;
}
.panel {
    min-height: 75px;
    padding: 20px 20px 20px 10px;
    margin-bottom: 10px;
    border: 1px solid #D7D7D7;
    // @media (max-width: 480px) {
    //     padding-top: 22px;
    //     min-height: 105px;
    // }
    // @media (max-width: 441px) {
    //     padding-top: 22px;
    //     min-height: 115px;
    // }
    // position: relative;

    svg{
        // display: none;
        // position: absolute;
        right: 15px;
        top: 15px;
        width: 24px;
        height: 24px;
        color: #41456B;
    }
}
.vcp__header {
    background-color: var(--bg-color-header);
    min-height: 45px;
    transition: background-color .3s ease;
}
.accordion_title{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    h4{
        text-align: left;
        padding-left: 20px;
        padding-right: 15px;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456B;
        @media (max-width: 450px) {
            padding-left: 0;
            padding-right: 0;
            font-size: 18px;
        }
        @media (max-width: 374px) {
            font-size: 15px;
        }
    }
    img{
        transition: all 0.2s ease;
        margin-top: 11px;
        &.active{
            transform: rotate(180deg);
        }
    }
}
.accordion_desc {
    padding: 20px;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
    @media (max-width: 450px) {
        padding-left: 0;
        padding-right: 0;
    }
    @media (max-width: 374px) {
        font-size: 14px;
    }

}
</style>
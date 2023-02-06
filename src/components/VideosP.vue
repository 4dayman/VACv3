<template>
    <div class="videos">
        <div class="grid">
            <div class="grid_item" v-for="(item, i) in collection" :key="i">
                {{item}}
            </div>
        </div>
        <hr>
        <div 
            class="btn-toolbar" 
            
        >
            <button
                v-for="(p, i) in pagination.pages" 
                :key="i" 
                @click.prevent="setPage(p)"
            >{{p}}</button>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    data() {
        return {
            items: [0,1,2,3,4,5,6,7,8,9,10,11,],
            perPage: 6,
            pagination:{}
        }
    },
    computed: {
        collection() {
            return this.paginate(this.items)
        }
    },
    methods: {
        setPage(p) {
            this.pagination = this.paginator(this.items.length, p);
        },
        paginate(items) {
            return _.slice(items, this.pagination.startIndex, this.pagination.endtIndex +1)
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
    }
}
</script>
<style lang="scss" scoped>
.videos{
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 24px;
}
.grid{
    display: grid;
    grid-template: 1fr, 1fr;
}
.grid_item {
    width: 200px;
    height: 200px;
    border: 1px solid red;
}
button{
    width: 50px;height: 50px;
}
</style>
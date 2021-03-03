<template>
  <div>
    <div
      v-for="(item, index) in ROUTER_ENUM"
      :key="index"
      class="route-warpper"
    >
      <!-- <router-link :to="item">
        {{ item.split("/")[1] }}
      </router-link> -->
    </div>
    <router-view></router-view>

    <div
      class="actions"
      @click="handleGet"
    >
      Get store name
    </div>
    <p>{{ storeName }}</p>
    <div @click="setLayout">
      setLayout
    </div>

    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
      :auto-size="false"
    >
      <grid-item
        v-for="item in layout"
        :key="item.i"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        {{ item.i }}
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Index',
    components: {
        GridLayout: VueGridLayout.GridLayout,
        GridItem: VueGridLayout.GridItem
    },
    data(){
        return {
            ROUTER_ENUM: ['/home', '/about', '/index'],
            layout: []
        };
    },
    computed: {
        ...mapGetters({
            storeName: 'storeName'
        })
    },
    mounted(){
        setTimeout(() => {
            this.layout.push(
                ...[
                    { x: 0, y: 0, w: 2, h: 2, i: '0' },
                    { x: 2, y: 0, w: 2, h: 4, i: '1' },
                    { x: 4, y: 0, w: 2, h: 5, i: '2' }
                ]
            );
        }, 2000);
    },
    methods: {
        ...mapActions({
            getStoreName: 'getStoreName',
            setStoreName: 'setStoreName'
        }),
        setLayout(){
            this.layout.splice(0, 1);
        },
        handleGet(){
            this.getStoreName();
            this.$router.push({
                path: '/about'
            });
        },
        handleSet(){
            this.setStoreName('哈哈哈');
        }
    }
};
</script>

<style lang="less" scoped>
div {
    margin-bottom: 20px;
}

.route-warpper {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
</style>

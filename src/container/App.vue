<template>
  <div
    id="aaa"
    ref="aaa"
  >
    <div
      v-for="(item, index) in ROUTER_ENUM"
      :key="index"
      class="route-warpper"
    >
      <router-link :to="item">
        {{ item }}
      </router-link>
    </div>
    <keep-alive :exclude="['About22']">
      <router-view></router-view>
    </keep-alive>

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

    <Home>
      <template v-slot:header="{ user }">
        {{ user.name }}
      </template>
    </Home>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';
import { mapActions, mapGetters } from 'vuex';
import Home from './homePage';

export default {
    name: 'Index',
    components: {
        GridLayout: VueGridLayout.GridLayout,
        GridItem: VueGridLayout.GridItem,
        Home
    },
    data(){
        return {
            ROUTER_ENUM: ['/home', '/about', '/index'],
            layout: [],
<<<<<<< HEAD
=======
            name: 213
>>>>>>> 8acb27c51fa640d709a193c954d4c31e72436c17
        };
    },
    computed: {
        ...mapGetters({
            storeName: 'storeName'
        })
    },
    beforeCreate(){
      console.log('beforeCreate', this.$el);
    },
    created(){
      console.log('created', this.$el);
    },
    beforeMount(){
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
    beforeUpdate(){
      console.log('beforeUpdate', this);
    },
    updated(){
      console.log('updated');
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
        },
        test(type){
          console.log('tag log', type);
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

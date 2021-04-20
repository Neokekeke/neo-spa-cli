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
      ref="aaa"
      class="actions"
      @click="handleGet"
    >
      Get store name
    </div>
    <p>{{ storeName }}</p>
    <div @click="setLayout">
      setLayout
    </div>

    <!-- <grid-layout
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
    </grid-layout> -->

    <Home>
      <template v-slot:header="{ user }">
        {{ user.name }}
      </template>
    </Home>

    <div class="lazy-load-container">
      <img
        v-for="i in 3"
        :key="i"
        class="img"
        alt=""
        :draggable="true"
      >
    </div>

    <div class="drag-container">
      {{ arrs }}
    </div>
  </div>
</template>

<script>
// import VueGridLayout from 'vue-grid-layout';
import { mapActions, mapGetters } from 'vuex';
import Home from './homePage';
import '../utils/utils';
import pkq from '../static/pkq.jpg';
import { throlltle } from '../utils/throttle';

export default {
    name: 'Index',
    components: {
        // GridLayout: VueGridLayout.GridLayout,
        // GridItem: VueGridLayout.GridItem,
        Home,
    },
    data(){
        return {
            ROUTER_ENUM: ['/home', '/about', '/c-page'],
            layout: [],
            pkq,
            arr: [1, 2, 3, [1, 2, 3]],
        };
    },
    computed: {
        ...mapGetters({
            storeName: 'storeName',
        }),
        arrs(){
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.arr.length = 1000;
            console.log('this.arr', this.arr, this.arr.length);
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.arr.splice(1000, 1, 666);
            return this.arr;
        },
    },
    beforeCreate(){
        console.log('beforeCreate', this.$el);
    },
    created(){
        console.log('created', this.pkq, this.$el, this.$refs.aaa);
    },
    beforeMount(){
        console.log('beforeMount', this.pkq, this.$el, this.$refs.aaa);
    },
    mounted(){
        this.testCurry();
        setTimeout(() => {
            this.layout.push(
                ...[
                    { x: 0, y: 0, w: 2, h: 2, i: '0' },
                    { x: 2, y: 0, w: 2, h: 4, i: '1' },
                    { x: 4, y: 0, w: 2, h: 5, i: '2' },
                ]
            );
        }, 2000);

        this.lazyLoad2();
        window.onscroll = throlltle(() => {
            this.lazyLoad2();
        });
    },
    beforeUpdate(){
        //   console.log('beforeUpdate', this);
    },
    updated(){
        //   console.log('updated');
    },
    methods: {
        ...mapActions({
            getStoreName: 'getStoreName',
            setStoreName: 'setStoreName',
        }),
        testCurry(){},
        setLayout(){
            this.layout.splice(0, 1);
        },
        drop(){},
        handleGet(){
            this.getStoreName();
            this.$router.push({
                path: '/about',
            });
        },
        handleSet(){
            this.setStoreName('哈哈哈');
        },
        test(type){
            console.log('tag log', type);
        },
        // 懒加载图片
        lazyLoad(){
            // 第一种getBoundingClientRect方式，通过
            const imgArr = Array.from(document.getElementsByClassName('img'));

            imgArr.forEach((img) => {
                const top = img.getBoundingClientRect().top;
                console.log('top', top);
                const clientHeight = window.innerHeight;
                if (top < clientHeight && !img.src){
                    img.src = this.pkq;
                }
            });
        },
        lazyLoad2(){
            // 第二种方式，通过IntersectionObserver
            const imgArr = Array.from(document.getElementsByClassName('img'));
            const ob = new IntersectionObserver((...rest) => {
                rest[0].forEach((list) => {
                    console.log(rest);
                    if (list.isIntersecting && !list.target.src){
                        list.target.src = this.pkq;
                        ob.unobserve(list.target);
                    }
                });
            });
            imgArr.forEach((img) => {
                ob.observe(img);
            });
        },
    },
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

.lazy-load-container {
    display: flex;
    flex-direction: column;

    .img {
        width: 300px;
        height: 300px;
        margin: 50px;
    }
}
</style>

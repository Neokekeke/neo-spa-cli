<template>
  <div>
    <div
      v-for="(item, index) in ROUTER_ENUM"
      :key="index"
      class="route-warpper"
    >
      <router-link :to="item">
        {{ item.split("/")[1] }}
      </router-link>
    </div>
    <router-view></router-view>

    <div
      class="actions"
      @click="handleGet"
    >
      get store name
    </div>
    <div
      class="actions"
      @click="handleSet"
    >
      set store name
    </div>
    <p>{{ storeName }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Index',
    data(){
        return {
            ROUTER_ENUM: ['/home', '/about', '/index']
        };
    },
    computed: {
        ...mapGetters({
            storeName: 'storeName'
        })
    },
    methods: {
        ...mapActions({
            getStoreName: 'getStoreName',
            setStoreName: 'setStoreName'
        }),
        handleGet(){
            this.getStoreName();
        },
        handleSet(){
          this.setStoreName('哈哈哈');
        }
    }
};
</script>

<style lang="less" scoped>
.route-warpper {
    display: flex;
    flex-direction: column;

    a {
        margin-bottom: 20px;
    }
}
</style>

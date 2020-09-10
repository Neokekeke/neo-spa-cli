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
  </div>
</template>

<script>
export default {
    name: 'Index',
    data(){
        return {
            ROUTER_ENUM: ['/home', '/about', '/index']
        };
    },
    methods: {
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

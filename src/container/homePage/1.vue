<template>
  <div>
    111
    {{ name }}
    <p>
      <v2></v2>
      <v3></v3>
    </p>
  </div>
</template>

<script>
import Vue2 from './2';
import Vue3 from './3';

    export default {
        components: {
            v2:Vue2,
            v3:Vue3
        },
        data(){
           return {
                name: 'first component'
           };
        },
        mounted(){
            console.log(this.$parent, this.$children);
        },
        inject: ['name'],
        provide(){
            return {
                first: this
            };
        }
    };
</script>

<style lang="scss" scoped>

</style>
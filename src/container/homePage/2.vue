<template>
  <div>
    222
    {{ first.name }}
  </div>
</template>

<script>
export default {
    inject: ['first'],
    mounted(){
        console.log('this is 2 component',this.first, this.first.name);
    },
};
</script>

<style lang="scss" scoped></style>

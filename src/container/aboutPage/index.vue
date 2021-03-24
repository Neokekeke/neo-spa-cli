<template>
  <div>
    this is about page
    {{ num }}
  </div>
</template>

<script>
export default {
    name: 'About22',
    data(){
        return {
            num: Math.random() * 10 + 0
        };
    }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    this is home page
    <slot>123</slot>
    <slot
      name="header"
      :user="slotProps"
    >
      {{ slotProps.name }}
    </slot>
    {{ num }}

    <v1>
    </v1>
  </div>
</template>

<script>
import Vue1 from './1';

export default {
    components: {
        v1: Vue1,
    },
    data(){
        return {
            slotProps: {
                name: 'aaa',
            },
            num: Math.random() * 10 + 0,
        };
    },
    provide(){
        return {
            name: 'from home page------------',
        };
    },
};
</script>

<style scoped></style>

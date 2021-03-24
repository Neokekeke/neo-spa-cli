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
  </div>
</template>

<script>
export default {
    data(){
        return {
            slotProps: {
                name: 'aaa'
            },
            num: Math.random() * 10 + 0
        };
    }
};
</script>

<style scoped></style>

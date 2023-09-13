<template>
    <nuxt-link :to="link" class="button">
        <slot>button</slot>
    </nuxt-link>
</template>

<script>
export default {
    props:{
        link: {
        type: String,
        required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
  .button {
    color: $key-color-black;
    display: inline-block;
    font-size: fz(18);
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    text-indent: -1em;
    line-height: 56px;
    padding: 0 1em;
    border: 2px solid gray;
    border-radius: 4px;
    min-width: 230px;
    position: relative;
  
    &:hover {
        opacity: 0.6; 
    }
  
    &--leftArrow {
      text-indent: 1em;
    }
  }
</style>
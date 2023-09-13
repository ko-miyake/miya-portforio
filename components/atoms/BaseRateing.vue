<template>
   <div class="rate rate" :class="`rate${rate}`"></div>
 </template>

<script>
export default {
    props:{
        rate: {
            type : Number,
            required : true,
            default : 0
        }
    },
    data() {
        return { pro: "0" }
    },
}
</script>

<style lang="scss" scoped>
.rate{
    position: relative;
    font-size: 16px;
    display: inline-block;
    width: 100%;
    height: 20px;
    letter-spacing: .3em;
    &::after,
    &::before{
        content: "★★★★★";
            position: absolute;
            top: 0px;
            left: 0px;
            line-height: 20px;
            display: inline-block;
            height: 20px;
    }
    &::after{
        overflow: hidden;
        white-space: nowrap;
        color: red;
    }
    &::before{
        color: #ddd;
    }

    &.rate4:after{
        width: 80px;
    }
    &.rate3:after{
        width: 60px;
    }
    &.rate2:after{
        width: 40px;
    }
    &.rate1:after{
        width: 20px;
    }
}
</style>
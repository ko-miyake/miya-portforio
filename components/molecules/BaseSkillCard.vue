<template>
    <dl class="skillCard">
        <dt class="icon">
            <img :src="icon" alt="">
        </dt>
        <dd class="content">
            <BaseRateing :rate="rate" />
            <slot name="text">text</slot>
        </dd>
    </dl>
</template>

<script>
import BaseRateing from '../atoms/BaseRateing.vue';

export default {
    components:{
        BaseRateing
    },
    props:{
        icon: {
            type: String,
            required: true,
        },
        rate:{
            type:String,
            require:true,
            default : ""
        }
    }
}
</script>

<style lang="scss" scoped>
.skillCard{
    &__icon{
    }

    &__content{

    }
}
</style>
<template>
    <dl class="skillCard">
        <dt class="skillCard__icon">
            <img :src="icon" alt="">
        </dt>
        <dd class="skillCard__content">
            <h2 class="skillCard__title">
                <slot class="skillCard__title" name="title">title</slot>
            </h2>
            <BaseRateing :rate="rate" />
            <p class="skillCard__text">
                <slot name="text">text</slot>
            </p>
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
            type:Number,
            require:true,
            default : 0
        }
    }
    
}
</script>

<style lang="scss" scoped>
.skillCard{
    width: 100%;
    height: 100%;
    display: flex;
    border: 1px solid #ccc;
    border-radius: 4px;
    flex-direction: column;
    overflow: hidden;
    @include mq{
        flex-direction: inherit;
    }
    .rate{
        margin-bottom: 4px;
    }
    &__title{
        font-size: 18px;
    }
    &__text{
        font-size: 14px;
        white-space: pre-wrap;
    }

    &__icon{
        flex: 1 1 84px;
        justify-content: center;
        display: inline-flex;
        align-items: center;
        background: rgb(243, 244, 246);
        @include mq{

        }
    }

    &__content{
        flex: 1 1 100%;
        padding: 10px;
    }
}
</style>
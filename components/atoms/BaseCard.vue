<template>
    <nuxt-link :to="link" class="card">
        <figure class="card__image">
            <img :src='imageLink' alt="" />
        </figure>
        <div class="card__text">
        <p class="card__name"><slot name="title">title</slot></p>
        <ul class="skillCards">
          <slot name="skill"></slot>
        </ul>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props:{
        link: {
        type: String,
        required: true,
        },
        imageLink: {
        type: String,
        required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
   
    overflow: hidden;
    &:hover{
      outline: 3px solid #D385F9;
    }

    &__text{
    padding: 16px;
   
  }

  &__image {
    margin-bottom: 0.5em;
    width: 100%;
    max-width: 640px;
    height: auto;
    aspect-ratio: 4/ 2;
   
    box-sizing: border-box;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__name {
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  &__date {
    font-size: fz(14);
  }

}



</style>
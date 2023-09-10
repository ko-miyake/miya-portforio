<template>
    <div class="child">
      <div class="childMainVisual">
        <div class="container container--lg">
          <h1 class="childMainVisual__title">Works</h1>
          <p>成果物をご紹介します。</p>
        </div>
      </div>
  
      <div class="container">
        <ol class="row works">
          <li v-for="work in works.contents" :key="work.id" class="works__item">
            <nuxt-link :to="`/works/${work.id}/`" class="works__inner">
              <figure class="works__image">
                <img
                  :width="work.thumbnail.width"
                  :height="work.thumbnail.height"
                  :src="work.thumbnail.url"
                  :alt="work.title"
                />
              </figure>
              <div class="works__text">
                <p class="works__name">{{ work.title }}</p>
                <p class="works__date">
                  <time :datetime="work.release">{{ work.release }}</time>
                </p>
              </div>
            </nuxt-link>
          </li>
        </ol>
      </div>
    </div>
  </template>

<script>
const { createClient } = require('microcms-js-sdk');

export default {
  async asyncData ({env}) {
    const client = createClient({
      serviceDomain: env.serviceDomain,
      apiKey: process.env.apiKey
    })

    try {
      const [Res] = await Promise.all([
        client.get({ endpoint: 'works' })
      ])
      return {
        works: Res
      }
    } catch (error) {
      console.error(error)// eslint-disable-line no-console
      return { works: ["none"] }
    }
  }
}
</script>
  
  <style lang="scss" scoped>
  .childMainVisual {
    text-align: center;
    padding: 5em 0;
    background-color: $base-color-secondary;
    margin-bottom: 2.5em;
  
    @include mq() {
      margin-bottom: 5em;
    }
  
    &__title {
      font-family: $font-notoSans;
      font-size: fz(40);
      margin-bottom: 0.25em;
    }
  }
  
  .works {
    list-style: none;
  
    &__item {
      width: 100%;
  
      @include mq() {
        width: calc((100% - 2.5em) / 2);
      }
    }
  
    &__item + &__item {
      margin-top: 1.5em;
  
      @include mq() {
        margin: 0;
      }
    }
  
    &__inner {
      display: block;
    }
  
    &__image {
      margin-bottom: 0.5em;
  
      img {
        width: 100%;
      }
    }
  
    &__name {
      font-weight: bold;
    }
  
    &__date {
      font-size: fz(14);
    }
  }
  </style>
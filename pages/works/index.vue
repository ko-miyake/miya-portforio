<template>
    <div class="child">
      <div class="childMainVisual">
        <div class="container container--lg">
          <h1 class="childMainVisual__title">Works</h1>
        </div>
      </div>
  
      <div class="l-container">
        <ol class="row works">
          <li v-for="work in works.contents" :key="work.id">
            <BaseCard :link="`/works/${work.id}/`" :image-link="work.thumbnail.url">
              <template #title>{{work.title}}</template>
              <template #text>{{ work.release }}</template>
            </BaseCard>
          </li>
        </ol>
      </div>
    </div>
  </template>

<script>
import BaseCard from '../../components/atoms/BaseCard.vue';

const { createClient } = require('microcms-js-sdk');

export default {

  components: {
    BaseCard
  },  async asyncData ({env}) {
    const client = createClient({
      serviceDomain: env.serviceDomain,
      apiKey: env.apiKey
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
  
    &__title {
      font-family: $font-notoSans;
      font-size: fz(40);
      margin: 1.6rem 0;
      background: -webkit-linear-gradient(0deg, #BB42F6, #D385F9 50%, #E3B2FB);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  
  .works {
    list-style: none;
    gap: 20px;
     li{
      width: 100%;
      @include mq() {
        max-width: 380px;
      }
     }
  }
  </style>
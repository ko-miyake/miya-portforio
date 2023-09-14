<template>
    <div class="child">
      <div class="childMainVisual">
        <div class="container container--lg">
          <h1 class="childMainVisual__title">Works</h1>
        </div>
      </div>
  
      <div class="l-container">
        <ol class="row works">
          <li v-for="work in works.contents" :key="work.id" class="works__item">
            <BaseCard :link="`/works/${work.id}/`" :image-link="work.thumbnail.url">
              <template #title>{{work.title}}</template>
              <template #skill>
                <ul class="skillCards">
                  <li v-for="(skill, skillIndex) in work.skill" :key="skillIndex">
                    <BaseSkillTag >
                      {{ skill }}
                    </BaseSkillTag>
                  </li>
              </ul>
              </template>
            </BaseCard>
          </li>
        </ol>
      </div>
    </div>
  </template>

<script>
import BaseCard from '../../components/atoms/BaseCard.vue';
import BaseSkillTag from '../../components/atoms/BaseSkillTag.vue';


const { createClient } = require('microcms-js-sdk');

export default {

  components: {
    BaseCard,
    BaseSkillTag
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
      font-size: fz(34);
      margin: 1.6rem 0;
      background: -webkit-linear-gradient(0deg, #BB42F6, #D385F9 50%, #E3B2FB);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  </style>
<template>
  <div>
    <section id="about" class="sectionPrimary">
      <div class="l-container">
        <h2 class="headingPrimary">about</h2>
        <div class="profile">
          <div class="profile__upper">
            <div class="profile__text">
              <p class="profile__name">
                三宅倖介<span lang="en">Kosuke Miyake</span>
              </p>
              <dl class="profile__item">
                <dt class="profile__title">Skills</dt>
                <dd>HTML / CSS / JavaScript /JQuery / PHP / Vue </dd>
              </dl>
              <dl class="profile__item">
                <dt class="profile__title">趣味</dt>
                <dd>ゲーム、運動、アウトドア、バドミントン</dd>
              </dl>
            </div>
          </div>
          <p class="profile__message">
            マークアップエンジニア、フロントエンドエンジニアとして4年間働かせていただいております。<br><br>
            セマンティックなマークアップや、可読性、運用性が高いコーディング・設計を習得しており、工数削減や技術の提案など、積極的に意見しながらプランニングをすることが得意です。 <br><br>
            フロントエンドとして、よりハイエンドな実務経験を積んでいけるようVueやReactといったフレームワーク周りの知識について学習中です。<br>
            中長期的な目標としてはフロントエンドとバックエンド両面の知識や経験を蓄え、フルスタックな開発に携わりたいと考えています。
          </p>
        </div>
      </div>
    </section>

    <section class="sectionPrimary background--gray">
      <div class="l-container">
        <h2 class="headingPrimary">skills</h2>
        <ol class="row skills">
          <li>
            <BaseSkillCard icon="a" rate="4" />
          </li>
        </ol>
          <p class="button-area">
            <BaseButton link="/works">詳しく見る</BaseButton>
          </p>

          
      </div>
    </section>

    <section class="sectionPrimary background--gray">
      <div class="l-container">
        <h2 class="headingPrimary">works</h2>
        <ol class="row works">
          <li v-for="work in works.contents" :key="work.id" class="works__item">
            <BaseCard :link="`/works/${work.id}/`" :image-link="work.thumbnail.url">
              <template #title>{{work.title}}</template>
              <template #text>{{ work.release }}</template>
            </BaseCard>
          </li>

        </ol>
          <p class="button-area">
            <BaseButton link="/works">もっと見る</BaseButton>
          </p>
      </div>
    </section>
  </div>
</template>
<script>

import BaseButton from '../components/atoms/BaseButton.vue';
import BaseCard from '../components/atoms/BaseCard.vue';
import BaseSkillCard from '../components/molecules/BaseSkillCard.vue';


const { createClient } = require('microcms-js-sdk');
export default {
  components: {
    BaseButton,
    BaseCard,
    BaseSkillCard
  },
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
#about{
  background: rgb(243 244 246);
}
.mainVisual {
  img {
    width: 100%;
  }
}

.profile {

  &__upper{
    margin-bottom: 0.5em;
  }
  &__text {
    @include mq() {
    }
  }

  &__name {
    font-size: fz(20);
    font-weight: bold;
    margin-bottom: 0.5em;

    @include mq() {
      font-size: fz(20);
      margin-bottom: 0.857em;
    }

    [lang='en'] {
      font-size: fz(16);

      &::before {
        content: '/';
        margin: 0 0.5em;
      }
    }
  }

  &__item {
    margin-bottom: 0.5em;

    @include mq() {
      margin-bottom: 1em;
    }
  }

  &__title {
    font-size: fz(18);
    font-weight: bold;
    margin-bottom: 0.222em;

    @include mq() {
      margin-bottom: 0.444em;
    }
  }

  &__image {
    width: 100%;
    margin-bottom: 1.75em;

    @include mq() {
      width: 40%;
      margin: 0 2em 0 0;
    }

    img {
      width: 100%;
    }
  }

}

.works {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &__item {
    width: 100%;

    @include mq() {
      width: calc((100% - 2.5em) / 2);
    }
  }
}
</style>

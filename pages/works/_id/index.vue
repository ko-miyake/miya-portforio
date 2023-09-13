<template>
  <div class="child">
    <div class="worksMainVisual">
      <div class="l-container container--lg worksMainVisual__inner">

        <div class="worksMainVisual__contents">
          <h1 class="worksMainVisual__title">{{ work.title }}</h1>
          <figure class="worksMainVisual__thumbnail">
          <img
            :width="work.thumbnail.width"
            :height="work.thumbnail.height"
            :src="work.thumbnail.url"
            :alt="work.title"
          />
        </figure>
          <dl v-if="work.release" class="worksMainVisual__item">
            <dt class="worksMainVisual__itemName">リリース日</dt>
            <dd>
              <time :datetime="work.release">{{ work.release }}</time>
            </dd>
          </dl>
        </div>

      </div>
    </div>

    <div class="l-container l-worksContent">
      <dl class="worksItem">
        <dt class="worksItem__title">概要</dt>
        <dd class="worksItem__contents">
          {{ work.overview }}
        </dd>
      </dl>
      <dl class="worksItem">
        <dt class="worksItem__title">時間</dt>
        <dd class="worksItem__contents">
          {{ work.term }}時間
        </dd>
      </dl>
      <dl class="worksItem">
        <dt class="worksItem__title">URL</dt>
        <dd class="worksItem__contents">
          <a :href="work.url" target="_blank">{{ work.url }}</a>
        </dd>
      </dl>
      <dl v-if="work.position" class="worksItem">
        <dt class="worksItem__title">ポジション</dt>
        <dd class="worksItem__contents">{{ work.position }}</dd>
      </dl>
      <dl v-if="work.responsibility" class="worksItem">
        <dt class="worksItem__title">担当</dt>
        <dd class="worksItem__contents">
          {{ work.responsibility.length }}
          <span
            v-for="(res, resIndex) in work.responsibility"
            :key="resIndex"
            v-text="res"></span>
        </dd>
      </dl>
      <dl class="worksItem">
        <dt class="worksItem__title">使用技術</dt>
        <dd class="worksItem__contents">
          <span
            v-for="(skill, skillIndex) in work.skill"
            :key="skillIndex"
            v-text="skill"
          />
        </dd>
      </dl>
      <dl v-if="work.tools" class="worksItem">
        <dt class="worksItem__title">ツール</dt>
        <dd class="worksItem__contents">
          <span
            v-for="(tool, toolIndex) in work.tools"
            :key="toolIndex"
            v-text="tool"
          />
        </dd>
      </dl>
      <dl class="worksItem">
        <dt class="worksItem__title">アピールポイント</dt>
        <dd class="worksItem__contents">{{ work.points }}</dd>
      </dl>
    </div>

    <p class="button-area">
      <BaseButton link="../">一覧へ戻る</BaseButton>
    </p>
  </div>
</template>

<script>
import BaseButton from '../../../components/atoms/BaseButton.vue';
import { client } from '../../../libs/client';

export default {
  components : {BaseButton},
  async asyncData ({ params,env }) {

    try {
      const [Res] = await Promise.all([
        client.get(
          { 
            endpoint: `works/${params.id}`,
          })
      ])

      return {
        work: Res
      }
    } catch (error) {
      console.error(error)// eslint-disable-line no-console
      return { work: ["none"] }
    }
  }
}
</script>
  
  <style lang="scss" scoped>
  .child{
    background: #fafafa;
  }
  .worksMainVisual {
    padding: 2em 0;
    background-color: rgb(243, 244, 246);
  
    &__thumbnail {
      width: 100%;
      margin-bottom: 1.75em;
  
      img {
        width: 100%;
      }
    }
  
    &__title {
      font-size: fz(20);
      padding: 0.5rem 1rem;
      background: #ffffff;
      border-left: 4px solid #BB42F6;
      margin-bottom: 1.2em;
      
      @include mq(){
        font-size: (24);
      }
    }
  
    &__item {
      margin-bottom: 0.5em;
    }
  
    &__itemName {
      font-size: fz(18);
      font-weight: bold;
      margin-bottom: 0.222em;
    }
  }
  
  .l-worksContent{
    background: #fafafa;
    padding-top: 2em;
    padding-bottom: 2em;

    @include mq(){
      padding-top: 3.5em;
      padding-bottom: 3.5em;
    }
  }
  .worksItem {
    &__title {
      font-size: fz(18);
      font-weight: bold;
      margin-bottom: 0.5em;
      border-bottom: 1px solid #ccc;

      @include mq(){
        font-size: fz(20);
      }
    }
  
    &__contents {
  
      span + span {
        &::before {
          content: '/';
          display: inline-block;
          margin: 0 0.5em;
        }
      }
    }
  
    + .worksItem {
      margin-top: 1.5em;
    }
  }
  </style>
  
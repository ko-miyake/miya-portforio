<template>
  <div>
    <section id="about" class="sectionPrimary">
      <div class="l-container">
        <div class="profile">
          <div class="profile__upper">
            <div class="profile__text">
              <p class="profile__name">
                三宅倖介<span lang="en">Kosuke Miyake</span>
              </p>
              <dl class="profile__item">
                <dt class="profile__title">Skills</dt>
                <dd>HTML / CSS / JavaScript /JQuery / PHP / Vue / React / C#</dd>
              </dl>
              <dl class="profile__item">
                <dt class="profile__title">趣味</dt>
                <dd>ゲーム、運動、アウトドア、ものづくり</dd>
              </dl>
            </div>
            <div class="profile__imageArea">
              <div class="profile__image">
                <img src="/images/profile.svg" alt="">
              </div>
            </div>
  
          </div>
          <ul class="profile__sns">
                <li><a href="https://github.com/ko-miyake" target="_blank"><img src="/images/icon/github.svg" alt=""></a></li>
              </ul>
          <p class="profile__message">
            マークアップエンジニア、フロントエンドエンジニアとして4年間働かせていただいております。<br><br>
            セマンティックなマークアップや、可読性、運用性が高いコーディング・設計を習得しており、工数削減や技術の提案など、積極的に意見しながらプランニングをすることが得意です。 <br><br>
            フロントエンドとして、よりハイエンドな実務経験を積んでいけるようVueやReactといったフレームワーク周りの知識について学習中です。<br>
            中長期的な目標としてはフロントエンドとバックエンド両面の知識や経験を蓄え、フルスタックな開発に携わりたいと考えています。
          </p>
        </div>
      </div>
    </section>

    <section class="sectionPrimary sectionContents background--gray">
      <div class="l-container">
        <h2 class="headingPrimary">skills</h2>
        <ul class="row skills">
          <li v-for="skill in skills.contents" :key="skill.id">
            <BaseSkillCard :icon="skill.logo.url" :rate="skill.rate" >
              <template #title>{{ skill.skill }}</template>
              <template #text>{{ skill.detail }}</template>
            </BaseSkillCard>
          </li>
        </ul>
      </div>
    </section>

    <section class="sectionPrimary sectionContents background--gray">
      <div class="l-container">
        <h2 class="headingPrimary">works</h2>
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
import BaseSkillTag from '../components/atoms/BaseSkillTag.vue';
import { client }  from '../libs/client.js'
 
export default {
  components: {
    BaseButton,
    BaseCard,
    BaseSkillCard,
    BaseSkillTag
  },
  async asyncData () {
    try {
      const [works,skills] = await Promise.all([
        client.get({ endpoint: 'works',queries: {limit: 2}}),
        client.get({ endpoint: 'skills'})
      ])
      return {
        works,
        skills
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
  padding-top: 0;

  @include mq{
    padding-top: 3.5em;
  }
  & .l-container{
    padding: 0;
  }
}
.mainVisual {
  img {
    width: 100%;
  }
}

.profile {

  &__upper{
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    @include mq() {
      flex-flow: nowrap;
    }
  }

  &__sns{
    margin-bottom: 1em;
    padding: 0 15px;
    li{
      list-style: none;
    }
    @include mq() {
      padding: 0;
    }
  }
  &__text {
    flex: 0 0 auto;
    order: 2;
    padding: 0 15px;
    @include mq() {
      order: 1;
      padding: 0;
    }
  }

  &__imageArea {
    width: 100%;
    position: relative;
    height: 140px;
    margin-bottom: 6em;
    order: 1;
    background: linear-gradient(to right, #BB42F6, #E3B2FB);

    @include mq() {
      order: 2;
      flex: 0 0 200px;
      height: auto;
      background: none;
      margin-bottom: 0;
    }

    img {
      width: 100%;
    }
  }
  &__image{
    max-width: 140px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 10px 3px #6666;
    overflow: hidden;
    position: absolute;
    left: 50%;
    bottom: -50%;
    transform: translateX(-50%);

    @include mq() {
      max-width: 200px;
      transform: inherit;
      position: relative;
      bottom: 0%;
      left: 0;

    }

  }

  &__message{
    padding: 0 15px;
    @include mq() {
      padding: 0;
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



}

.skills{
  display: flex;
  justify-content: normal;
  gap: 10px 20px;
  flex-wrap: wrap;

  li{
    list-style: none;
    width: calc(50% - 10px);
  }
}


.sectionContents + .sectionContents{
  padding-top: 0;
}
</style>

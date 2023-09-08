<template>
  <div>
    <section id="about" class="sectionPrimary">
      <div class="l-container">
        <div class="profile">
          <div class="profile__upper">
            <figure class="profile__image">
              <img src="https://placehold.jp/260x260.png" alt="your name" />
            </figure>
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
            マークアップエンジニア、フロントエンドエンジニアとして4年目間働かせていただいております。<br>
            普段の業務ではHTML,CSS,JavaScript
            セマンティックなマークアップや、可読性、運用性が高いコーディング・設計を習得しており、工数削減や技術の提案など、積極的に意見しながらプランニングをすることが得意です。 
            フロントエンドとして、よりハイエンドな実務経験を積んでいけるようVueやReactといったフレームワーク周りの知識について学習中です。<br>
            中長期的な目標としてはフロントエンドとバックエンド両面の知識や経験を蓄え、フルスタックな開発に携わりたいと考えています。
          </p>
        </div>
      </div>
    </section>

    <section class="sectionPrimary background--gray">
      <div class="l-container">
        <h2 class="headingPrimary">works</h2>
        <ol class="row works">
          <li class="works__item">
            <nuxt-link to="#!" class="works__inner">
              <figure class="works__image">
                <img src="https://placehold.jp/370x229.png" alt="" />
              </figure>
              <div class="works__text">
                <p class="works__name">作品名</p>
                <p class="works__date">
                  <time datetime="2021-12-16">2021.12.16</time>
                </p>
              </div>
            </nuxt-link>
          </li>
          <li class="works__item">
            <nuxt-link to="#!" class="works__inner">
              <figure class="works__image">
                <img src="https://placehold.jp/370x229.png" alt="" />
              </figure>
              <div class="works__text">
                <p class="works__name">作品名</p>
                <p class="works__date">
                  <time datetime="2021-12-16">2021.12.16</time>
                </p>
              </div>
            </nuxt-link>
          </li>
        </ol>
        <p class="button-area">
          <nuxt-link to="/works" class="buttonPrimary">view more</nuxt-link>
        </p>
      </div>
    </section>
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
        works: Res.contents
      }
    } catch (error) {
      console.error(error)// eslint-disable-line no-console
      return { works: ["none"] }
    }
  }
}
</script>
<style lang="scss" scoped>
.mainVisual {
  img {
    width: 100%;
  }
}

.profile {
  &__upper {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 0.5em;

    @include mq() {
      flex-direction: row-reverse;
      justify-content: space-between;
      margin-bottom: 2em;
    }
  }

  &__text {
    @include mq() {
    }
  }

  &__name {
    font-size: fz(24);
    font-weight: bold;
    margin-bottom: 0.5em;

    @include mq() {
      font-size: fz(28);
      margin-bottom: 0.857em;
    }

    [lang='en'] {
      font-size: fz(18);

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

  &__item + &__item {
    margin-top: 1.5em;

    @include mq() {
      margin: 0;
    }
  }

  &__inner {
    display: block;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    padding: 16px;
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

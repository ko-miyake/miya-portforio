<template>
    <header class="header">
      <div class="headerContainer">
        <!-- ロゴ -->
        <component :is="isTopPage ? 'h1' : 'p'" class="logo">
          <nuxt-link to="/">Portfolio</nuxt-link>
        </component>
  
        <!-- メニュー -->
        <nav>
          <ul class="menu">
            <li>
              <nuxt-link to="/works" class="menu__link">works</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    computed: {
      // TOPページかどうか
      isTopPage() {
        if (this.$route.name === 'index') return true
        return false
      },
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .header {
    width: 100%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    background-color: $base-color-primary;
  }
  .headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 12px auto;
    padding: 0 15px;
    @include mq() {
      padding: 0;
      max-width: 800px;
      margin: 12px auto;
    }
  }
  
  .logo {
    color: $text-color-primary;
    font-family: $font-notoSans;
    font-size: fz(20);
    font-weight: bold;
    letter-spacing: 0;

    background: $text-base-gradation;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @include mq() {
      font-size: fz(24);
    }
  }
  
  .menu {
    list-style: none;
    display: flex;
    margin-right: -0.75em;
  
    &__link {
      font-family: $font-notoSans;
      font-weight: bold;
      text-transform: capitalize;
      line-height: 40px;
      display: inline-block;
      padding: 0 0.25em;
      position: relative;
      color: gray;
      border-radius: 4px;
      @include mq() {
        padding: 0 0.75em;
      }
  
      &:hover {
        background: #D385F9;
        color: #fff;
        
      }
    }
  }
  </style>
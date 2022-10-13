<template>
  <form class="auth">
    <header class="header">
      <h1 class="title">Вхід</h1>
      <div class="select"
           :class="{'select-active': isShowContext}"
           @click="isShowContext = !isShowContext">
        <div class="option">{{ selectedLanguage }}</div>
        <img :src="require('static/icons/arrow-left.svg')"
             alt=""
             :class="!isShowContext && 'arrow-down'"/>
      </div>
      <div class="context-menu" v-if="isShowContext">
        <div class="language"
             :class="{'language-hovered': language === selectedLanguage}"
             :style="{borderRadius: language === 'УКР' && '0 0 8px 8px'}"
             v-for="language in languages"
             :key="language"
             @click="onSelectLanguage(language)">{{ language }}
        </div>
      </div>
    </header>
    <main class="main">
      <input-base type="email" label="Email" @value="email = $event"/>
      <input-base type="password" label="Пароль" @value="password = $event"/>
      <label>
        <input type="checkbox" name="checkbox" value="css" checked/>
        <span>Чужой компьютер</span>
      </label>
    </main>
    <footer class="footer">
      <button class="button" type="submit">Вхід</button>
      <a href="" class="link">Подати заявку на реєстрацію</a>
      <a href="" class="link">Забули пароль?</a>
    </footer>
    <div v-if="isShowContext" class="close-context-menu" @click="isShowContext = false"></div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import InputBase from "~/components/input/InputBase.vue";

@Component({
  components: {
    InputBase
  }
})
export default class Auth extends Vue {

  isShowContext = false
  languages = ['РУС', 'УКР']
  selectedLanguage = 'УКР'
  email = ''
  password = ''

  onSelectLanguage(item: string) {
    this.selectedLanguage = item
    this.isShowContext = false
  }
}
</script>

<style lang="scss">
@import '@/static/scss/colors.scss';

.auth {
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
  background: #FFF;
  width: 100%;
  max-width: 380px;
  border-radius: 16px;
  gap: 16px;
  font-size: 14px;
  box-sizing: border-box;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .title {
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
      color: $black-base;
      margin: 0;
    }

    .select {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: $grey-base 1px solid;
      padding: 3px 16px;
      border-radius: 8px;
      cursor: pointer;

      .option {
        width: 27px;
        color: $black-base;
        font-size: 14px;
        line-height: 16px;
        font-weight: 700;
        margin-right: 2px;
      }

      .arrow-down {
        rotate: -90deg;
      }

      &:hover {
        border-color: $orange-base;
      }
    }

    .select-active {
      border-color: $orange-base;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .context-menu {
      position: absolute;
      top: 31px;
      right: 0;
      background: #FFF;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      border: 1px solid $black-base;
      z-index: 10;

      .language {
        position: relative;
        color: $black-base;
        font-size: 14px;
        line-height: 16px;
        font-weight: 700;
        padding: 8px 41px 8px 16px;

        &:hover {
          cursor: pointer;
          background: $rose-light;
        }
      }

      .language-hovered {
        background: $rose-light;
      }
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;

    label > input[type="checkbox"] {
      display: none;
    }

    label > input[type="checkbox"] + *::before {
      content: "";
      display: inline-block;
      vertical-align: bottom;
      width: 1rem;
      height: 1rem;
      margin-right: 0.3rem;
      border-radius: 10%;
      border-style: solid;
      border-width: 0.1rem;
      border-color: $orange-base;
      flex-shrink: 0;
      cursor: pointer;
    }

    label > input[type="checkbox"]:checked + *::before {
      content: "✔";
      color: white;
      text-align: center;
      background: $orange-base;
      border-color: $orange-base;
      cursor: pointer;
    }

    label span {
      font-size: 16px;
      color: $black-base
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .button {
      width: 100%;
      padding: 8px 12px;
      background: $orange-base;
      border-radius: 16px;
      outline: 0;
      border: none;
      color: #FFF;
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        background: $orange-dark;
      }
    }

    .link {
      color: $orange-base;
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      text-decoration: underline;
      text-align: center;
      cursor: pointer;
    }
  }

  .close-context-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
  }
}
</style>

<template>
  <div>
    <header class="header">
      <h1 class="title">{{ title }}</h1>
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
    <div v-if="isShowContext" class="close-context-menu" @click="isShowContext = false"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: ['title']
})
export default class FormHeader extends Vue {

  isShowContext = false
  languages = ['РУС', 'УКР']
  selectedLanguage = 'УКР'

  onSelectLanguage(item: string) {
    this.selectedLanguage = item
    this.isShowContext = !this.isShowContext
  }
}
</script>

<style lang="scss">
@import '@/static/scss/colors.scss';

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

.close-context-menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9;
}
</style>

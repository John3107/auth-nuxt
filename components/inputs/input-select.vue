<template>
<!--  <div>-->
    <div class="input-select">
      <label>{{ label }}</label>
      <div class="select"
           :class="{'select-active': isShowContext}"
           @click="isShowContext = !isShowContext">
        <input v-model="selectedValue"/>
        <img :src="require('static/icons/arrow-left.svg')"
             alt=""
             :class="!isShowContext && 'arrow-down'"/>
      </div>
      <div class="context-menu" v-if="isShowContext">
        <div class="selected-value"
             :class="{'value-hovered': item === selectedValue}"
             :style="{borderRadius: item === data[data.length - 1] && '0 0 8px 8px'}"
             v-for="item in data"
             :key="item"
             @click="onSelectValue(item)">{{ item }}
        </div>
      </div>
    </div>
<!--    <div v-if="isShowContext" class="close-context-menu" @click="isShowContext = false"></div>-->
<!--  </div>-->
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'InputSelect',
  props: ['label', 'data']
})
export default class InputSelect extends Vue {

  isShowContext = false
  selectedValue = ''

  onSelectValue(item: string) {
    this.selectedValue = item
    this.isShowContext = !this.isShowContext
  }
}
</script>

<style lang="scss">
@import '@/static/scss/colors.scss';

.input-select {
  display: inherit;
  flex-direction: inherit;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;

  label {
    font-size: 12px;
    color: $black-base;

    &:after {
      content: " *";
      color: $red-base;
    }
  }

  .select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: $grey-base 1px solid;
    padding: 10px 10px 10px 16px;
    border-radius: 8px;
    margin-top: 4px;

    input {
      color: $black-base;
      font-size: 16px;
      line-height: 16px;
      font-weight: 500;
      margin-right: 2px;
      width: 100%;
      border: none;
      outline: 0;
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
    top: 62px;
    left: 0;
    width: 100%;
    max-height: 160px;
    background: #FFF;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 1px solid $black-base;
    z-index: 10;
    box-sizing: border-box;
    overflow-y: scroll;

    .selected-value {
      position: relative;
      color: $black-base;
      font-size: 14px;
      line-height: 16px;
      font-weight: 500;
      padding: 8px 41px 8px 16px;

      &:hover {
        cursor: pointer;
        background: $rose-light;
      }
    }

    .value-hovered {
      background: $rose-light;
    }
  }
}

//.close-context-menu {
//  position: absolute;
//  top: 0;
//  left: 0;
//  width: 100%;
//  height: 100%;
//  z-index: 9;
//}
</style>

<template>
  <div class="input-select">
    <label>{{ label }}<span v-if="required" class="require"> *</span></label>
    <small>{{ error }}</small>
    <div class="select"
         :class="{'select-active': isShowContext}"
         @click="isShowContext = !isShowContext">
      <input :value="initialData.name[language]"
             @blur="onBlurHandler"
             readonly/>
      <img :src="require('static/icons/arrow-left.svg')"
           alt=""
           :class="!isShowContext && 'arrow-down'"/>
    </div>
    <div class="context-menu" v-if="isShowContext" :style="{top: error && '76px'}">
      <div class="selected-value"
           :class="{'value-hovered': item.name[language] === initialData.name[language]}"
           :style="{borderRadius: item === data[data.length - 1] && '0 0 8px 8px'}"
           v-for="item in data"
           :key="item.id"
           @click="onSelectValue(item)">{{ item.name[language] }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {CompanyRegionType} from "~/types/types";

@Component({
  name: 'InputSelect',
  props: ['label', 'data', 'error', 'required', 'initialData', 'language']
})
export default class InputSelect extends Vue {
  isShowContext: boolean = false

  onSelectValue(item: CompanyRegionType) {
    this.$emit('value', item)
    this.isShowContext = false
  }

  onBlurHandler() {
    this.$emit('on-blur')
    setTimeout(() => this.isShowContext = false, 150)
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
  gap: 4px;

  label {
    font-size: 12px;
    color: $black-base;

    .require {
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
    cursor: pointer;

    input {
      color: $black-base;
      font-size: 16px;
      line-height: 16px;
      font-weight: 500;
      margin-right: 2px;
      width: 100%;
      border: none;
      outline: 0;
      cursor: pointer;
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
</style>

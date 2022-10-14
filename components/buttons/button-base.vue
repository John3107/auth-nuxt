<template>
  <button class="button-base"
          :type="type ? type : ''"
          @click="$emit('on-click')"
          :disabled="isDisabled">{{ title }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: ['title', 'type', 'isDisabled'],
  name: 'ButtonBase'
})
export default class ButtonBase extends Vue {

}
</script>

<style lang="scss">
@import '@/static/scss/colors.scss';

.button-base {
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

  &:disabled {
    background: #cdcfd0;

    &:hover {
      background: $grey-dark;
    }
  }

  &:hover {
    background: $orange-dark;
  }
}
</style>

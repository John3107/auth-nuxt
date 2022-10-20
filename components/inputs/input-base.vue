<template>
  <div class="input-base">
    <label>{{ label }}<span v-if="!isntRequire" class="require"> *</span></label>
    <input :type="currentType" v-model.trim="inputData"/>
    <div class="icon" v-if="type !== 'password'">
      <img v-if="inputData"
           :src="require('@/static/icons/clear.svg')"
           alt=""
           @click="inputData = ''">
    </div>
    <div class="icon" v-else>
      <img v-if="!isShowPassword"
           :src="require('@/static/icons/eye.svg')"
           alt=""
           @click="passwordSwitcher">
      <img v-else
           :src="require('@/static/icons/eye-off.svg')"
           alt=""
           @click="passwordSwitcher">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: ['label', 'type', 'isntRequire'],
  watch: {
    inputData(data) {
      this.$emit('value', data)
    }
  }
})

export default class InputBase extends Vue {
  inputData = this.$props.type === 'phone' ? '+380' : ''
  isShowPassword = false
  currentType = this.$props.type

  passwordSwitcher() {
    this.isShowPassword = !this.isShowPassword
    if (this.currentType === 'text') this.currentType = 'password'
    else this.currentType = 'text'
  }
}
</script>

<style lang="scss">
@import '~static/scss/colors.scss';

.input-base {
  display: inherit;
  flex-direction: inherit;
  justify-content: space-between;
  gap: 4px;
  position: relative;

  label {
    font-size: 12px;
    color: $black-base;

    .require {
      content: " *";
      color: $red-base;
    }
  }

  input {
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid $grey-light;
    outline: 0;
    font-size: 18px;

    &:hover {
      border: 1px solid $orange-base;
    }
  }

  .icon {
    position: absolute;
    top: 33px;
    right: 16px;
    color: $grey-extra-dark;
    cursor: pointer;

    img {
      width: 16px;
      height: 16px;
    }
  }
}
</style>

<template>
  <div class="input-base">
    <label>{{ label }}<span v-if="!isntRequire" class="require"> *</span></label>
    <small>{{ error }}</small>
    <input :type="currentType"
           @blur="$emit('on-blur')"
           :value="inputData"
           @input="updateValue($event.target.value)"
    />
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
  props: ['label', 'type', 'isntRequire', 'error'],
  watch: {
    inputData(data: string) {
      this.$emit('value', data)
    }
  }
})

export default class InputBase extends Vue {
  inputData: string = this.$props.type === 'phone' ? '+380' : ''
  isShowPassword: boolean = false
  currentType: string = this.$props.type

  passwordSwitcher() {
    this.isShowPassword = !this.isShowPassword
    if (this.currentType === 'text') this.currentType = 'password'
    else this.currentType = 'text'
  }

  updateValue(event: string) {
    if (this.$props.type !== 'number') this.inputData = event
    else {
      if (this.$props.label === 'ЄДРПОУ' && event.length <= 8) this.inputData = event
      if (this.$props.label === 'ІПН' && event.length <= 10) this.inputData = event
    }
    this.$forceUpdate()
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
    padding: 11.5px 16px;
    border-radius: 8px;
    border: 1px solid $grey-light;
    outline: 0;
    font-size: 18px;

    &:hover {
      border: 1px solid $orange-base;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .icon {
    position: absolute;
    bottom: 12px;
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

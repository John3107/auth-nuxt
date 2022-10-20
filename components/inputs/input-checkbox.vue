<template>
  <label>
    <input type="checkbox"
           name="checkbox"
           value="css"
           @click="onSwitch"/>
    <slot name="title" class="title"></slot>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'InputCheckbox'
})
export default class InputCheckbox extends Vue {
  inputValue = false

  onSwitch(){
    this.inputValue = !this.inputValue
    this.$emit('value', this.inputValue)
  }
}

</script>

<style lang="scss">
@import '@/static/scss/colors.scss';

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
  color: #FFF;
  text-align: center;
  line-height: 16px;
  background: $orange-base;
  cursor: pointer;
}

</style>

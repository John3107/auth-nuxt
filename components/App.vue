<template>
  <div class="app">
    <auth/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {

}
</script>

<style lang="scss">
@import '~static/scss/colors.scss';

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: $black-base;
  font-family: 'Inter', sans-serif;
}
</style>

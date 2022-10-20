<template>
  <div class="nuxt">
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import '@/static/scss/colors.scss';

html body {
  margin: 0;
  background: $black-base;
}

.nuxt {
  display: flex;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  padding: 100px 0;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: $grey-extra-dark;
  }
}
</style>

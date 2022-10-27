<template>
  <div class="nuxt">
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import '@/static/scss/colors.scss';

html{
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: $grey-extra-dark;
  }

  ::-webkit-scrollbar-track {
    background: #E3E5E6;
  }
}
html body {
  margin: 0;
  background: $black-base;
  padding: 0 12px;
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

small {
  color: $red-base !important;
}
</style>

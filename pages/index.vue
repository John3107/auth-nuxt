<template>
  <form class="index">
    <form-header :title="'Вхід'"/>
    <main class="main">
      <input-base type="email" label="Email" @value="email = $event"/>
      <input-base type="password" label="Пароль" @value="password = $event"/>
      <label>
        <input type="checkbox" name="checkbox" value="css"/>
        <span>Чужой компьютер</span>
      </label>
    </main>
    <footer class="footer">
      <button class="button" type="submit">Вхід</button>
      <nuxt-link to="/registration" class="link">Подати заявку на реєстрацію</nuxt-link>
      <nuxt-link to="" class="link">Забули пароль?</nuxt-link>
    </footer>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import InputBase from "~/components/input/InputBase.vue"
import FormHeader from "~/components/header/form-header.vue"

@Component({
  name: 'IndexPage',
  components: {
    InputBase,
    FormHeader
  }
})
export default class Auth extends Vue {
  email = ''
  password = ''
}
</script>

<style lang="scss">
@import '@/static/scss/colors.scss';

.index {
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
  background: #FFF;
  width: 100%;
  max-width: 380px;
  border-radius: 16px;
  gap: 16px;
  font-size: 14px;
  box-sizing: border-box;

  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;

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
      color: white;
      text-align: center;
      line-height: 16px;
      background: $orange-base;
      cursor: pointer;
    }

    label span {
      font-size: 16px;
      color: $black-base
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .button {
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

      &:hover {
        background: $orange-dark;
      }
    }

    .link {
      color: $orange-base;
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      text-decoration: underline;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>

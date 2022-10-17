<template>
  <form class="registration">
    <form-header :title="'Реєстрація'"/>
    <main class="main">
      <input-base type="text" label="Компанія" @value="company = $event"/>
      <input-base type="email" label="Email" @value="email = $event"/>
      <input-base type="password" label="Пароль" @value="password = $event"/>
      <input-base type="password" label="Підтвердження пароля" @value="confirmationPassword = $event"/>
      <input-base type="text" label="Прізвище" @value="surname = $event"/>
      <input-base type="text" label="Ім'я" @value="name = $event"/>
      <input-base type="text" label="По батькові" @value="fatherName = $event"/>
      <input-base type="phone" label="Телефон" @value="phone = $event"/>
      <input-select label="Виберіть тип платника" :data="documentationData"/>
      <input-base type="text" label="ЄДРПОУ" @value="registrationCode = $event"/>
      <input-base type="text" label="Веб-сайт" @value="webSite = $event" :isntRequire="true"/>
      <input-select label="Область" :data="regionData"/>
    </main>
    <footer class="footer">
      <input-checkbox>
        <template #title>
          <div class="input-checkbox-title">
            Реєструючись, ви погоджуєтеся з
            <a href="#" class="link"> користувальницькою угодою</a>
            <img :src="require('@/static/icons/info.svg')" alt="">
          </div>
        </template>
      </input-checkbox>
      <button-base :title="'Реєстрація'" :type="'submit'" :isDisabled="true"/>
      <NuxtLink to="/">
        <button-base :title="'Вхід'" class="button-modify"/>
      </NuxtLink>
    </footer>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import FormHeader from "~/components/header/form-header.vue"
import InputBase from "~/components/inputs/input-base.vue"
import InputSelect from "~/components/inputs/input-select.vue"
import InputCheckbox from "~/components/inputs/input-checkbox.vue"
import ButtonBase from "~/components/buttons/button-base.vue"

@Component({
  name: 'Registration',
  components: {
    FormHeader,
    InputBase,
    InputSelect,
    InputCheckbox,
    ButtonBase
  },
  computed: {
    registrationData() {
      return {...this.$store.getters['store/getRegistrationData']}
    },
    documentationData() {
      return this.$store.getters['store/getDocumentationList']
    },
    regionData() {
      return this.$store.getters['store/getRegionList']
    }
  }
})
export default class Registration extends Vue {

}
</script>

<style lang="scss">
@import '@/static/scss/colors.scss';

.registration {
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
  background: #FFF;
  width: 100%;
  max-width: 799px;
  border-radius: 16px;
  gap: 16px;
  font-size: 14px;
  box-sizing: border-box;

  .main {
    display: inherit;
    flex-direction: inherit;
    gap: 8px;
  }

  .footer {
    display: inherit;
    flex-direction: inherit;
    gap: 8px;

    .input-checkbox-title {
      font-size: 16px;
      color: $black-base;

      .link {
        color: $orange-base;
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        text-decoration: underline;
        text-align: center;
        cursor: pointer;
      }

      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
    }

    .button-modify.button-base {
      background: #FFF;
      color: $orange-base;

      &:hover {
        box-shadow: 0 0 5px $orange-base;
        padding: 7px 12px;
        border: 1px solid $orange-base;
      }
    }
  }
}
</style>

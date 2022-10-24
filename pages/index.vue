<template>
  <form class="index" @submit.prevent="onSubmit">
    <form-header :title="'Вхід'"/>
    <main class="main">
      <input-base
        type="email"
        label="Email"
        :error="emailErrors"
        @value="form.email = $event"
        @on-blur="$v.form.email.$touch()"
      />
      <input-base
        type="password"
        label="Пароль"
        :error="passwordErrors"
        @value="form.password = $event"
        @on-blur="$v.form.password.$touch()"
      />
      <input-checkbox @value="isOtherPC = $event">
        <template #title>
          <span class="input-checkbox-title">Чужий комп'ютер</span>
        </template>
      </input-checkbox>
    </main>
    <footer class="footer">
      <button-base :title="'Вхід'" :type="'submit'"/>
      <nuxt-link to="/registration" class="link">Подати заявку на реєстрацію</nuxt-link>
      <nuxt-link to="" class="link">Забули пароль?</nuxt-link>
    </footer>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import InputBase from "~/components/inputs/input-base.vue"
import FormHeader from "~/components/header/form-header.vue"
import InputCheckbox from "~/components/inputs/input-checkbox.vue"
import ButtonBase from "~/components/buttons/button-base.vue"
import validationMixin from '~/mixins/validationMixin'

@Component({
  name: 'IndexPage',
  mixins: [validationMixin],
  components: {
    InputBase,
    FormHeader,
    InputCheckbox,
    ButtonBase
  }
})
export default class Auth extends Vue {

  onSubmit() {
    if (this.$v.$invalid) {
      this.$v.$touch()
    }
    return
  }
}
</script>

<style lang="scss">
@import '@/static/scss/colors.scss';

.index {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #FFF;
  width: 100%;
  max-width: 382px;
  border-radius: 16px;
  gap: 16px;
  font-size: 14px;
  box-sizing: border-box;

  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    padding: 0 1px;
    .input-checkbox-title {
      font-size: 16px;
      color: $black-base;
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: 16px;

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

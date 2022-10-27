<template>
  <form class="registration" @submit.prevent="onSubmit">
    <form-header :title="'Реєстрація'" @value="localeHandler($event)"/>
    <main class="main">
      <input-base type="text"
                  label="Компанія"
                  :error="companyErrors"
                  @value="form.companyName = $event"
                  @on-blur="$v.form.companyName.$touch()"/>
      <div class="adaptive-sides">
        <div class="side">
          <input-base type="email"
                      label="Email"
                      :error="emailErrors"
                      @value="form.email = $event"
                      @on-blur="$v.form.email.$touch()"/>
          <input-base type="password"
                      label="Пароль"
                      :error="passwordErrors"
                      @value="form.password = $event"
                      @on-blur="$v.form.password.$touch()"/>
          <input-base type="password"
                      label="Підтвердження пароля"
                      :error="confirmationPasswordErrors"
                      @value="confirmationPassword = $event"
                      @on-blur="$v.confirmationPassword.$touch()"/>
          <input-base type="text"
                      label="Прізвище"
                      :error="surnameErrors"
                      @value="form.lastName = $event"
                      @on-blur="$v.form.lastName.$touch()"/>
          <input-base type="text"
                      label="Ім'я"
                      :error="nameErrors"
                      @value="form.firstName = $event"
                      @on-blur="$v.form.firstName.$touch()"/>
          <input-base type="text"
                      label="По батькові"
                      :error="fatherNameErrors"
                      @value="form.middleName = $event"
                      @on-blur="$v.form.middleName.$touch()"/>
        </div>
        <div class="side">
          <input-base type="phone"
                      label="Телефон"
                      :error="phoneErrors"
                      @value="form.phone = $event"
                      @on-blur="$v.form.phone.$touch()"/>
          <input-select label="Виберіть тип платника"
                        :data="taxStatusData"
                        :error="taxStatusErrors"
                        @value="taxStatusValue = $event"
                        :required="true"
                        @on-blur="$v.form.companyTaxStatus.$touch()"/>
          <input-base v-show="taxStatusValue === 'Юридична особа'"
                      type="number"
                      label="ЄДРПОУ"
                      :error="companyUsreouErrors"
                      @value="codeChecking"
                      @on-blur="$v.companyUsreou.$touch()"/>
          <input-base v-show="taxStatusValue && taxStatusValue !== 'Юридична особа'"
                      type="number"
                      label="ІПН"
                      :error="ipnErrors"
                      @value="codeChecking"
                      @on-blur="$v.ipn.$touch()"/>
          <input-base type="text"
                      label="Веб-сайт"
                      @value="form.companyUrl = $event"
                      :error="urlErrors"
                      :isntRequire="true"
                      @on-blur="$v.form.companyUrl.$touch()"/>
          <input-select label="Область"
                        :data="searchingRegion"
                        :error="regionErrors"

                        @on-blur="$v.form.companyRegionId.$touch()"/>
        </div>
      </div>
    </main>
    <footer class="footer">
      <input-checkbox @value="isAgree = $event">
        <template #title>
          <div class="input-checkbox-title">
            Реєструючись, ви погоджуєтеся з
            <a href="#" class="link"> користувальницькою угодою</a>
            <img :src="require('@/static/icons/info.svg')" alt="">
          </div>
        </template>
      </input-checkbox>
      <div class="buttons">
        <button-base :title="'Реєстрація'" :type="'submit'" :disabled="!isAgree || $v.$invalid"/>
        <NuxtLink to="/" class="button-modify">
          <button-base :title="'Вхід'"/>
        </NuxtLink>
      </div>
    </footer>
  </form>
</template>

<script lang="ts">
import Component, {mixins} from 'vue-class-component'
import FormHeader from "~/components/header/form-header.vue"
import InputBase from "~/components/inputs/input-base.vue"
import InputSelect from "~/components/inputs/input-select.vue"
import InputCheckbox from "~/components/inputs/input-checkbox.vue"
import ButtonBase from "~/components/buttons/button-base.vue"
import {mapActions, mapGetters} from "vuex"
import {ValidationMixin} from '~/mixins/validationMixin'

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
    ...mapGetters({
      taxStatusData: 'store/getTaxStatusList',
      regionData: 'store/getRegionList'
    })
  },
  methods: {
    ...mapActions({
      toSignUp: 'store/signUp'
    })
  },
  watch: {
    taxStatusValue(data: string) {
      if (data) {
        if (this.taxStatusValue === 'Юридична особа') {
          this.form.companyTaxStatus = 'legalEntity'
          this.form.code = this.companyUsreou
        } else if (this.taxStatusValue === 'Фізична особа') {
          this.form.code = this.ipn
          this.form.companyTaxStatus = 'individual'
        } else {
          this.form.code = this.ipn
          this.form.companyTaxStatus = 'individualEntrepreneur'
        }
      }
    }
  }
})
export default class Registration extends mixins(ValidationMixin) {
  codeChecking(val: string) {
    this.form.code = val
    if (this.taxStatusValue === 'Юридична особа') this.companyUsreou = val
    else this.ipn = val
  }

  onSubmit() {
    this.toSignUp(this.form)
  }

  get searchingRegion() {
    return this.regionData.filter(el => el.toLowerCase().includes(this.form.companyRegionId.toLowerCase()))
  }
}
</script>

<style lang="scss">
@import '@/static/scss/colors.scss';

.registration {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #FFF;
  width: 100%;
  max-width: 760px;
  border-radius: 16px;
  gap: 16px;
  font-size: 14px;
  box-sizing: border-box;

  .main {
    display: inherit;
    flex-direction: inherit;
    gap: 8px;

    .adaptive-sides {
      display: inherit;
      justify-content: space-between;
      gap: 24px;
      width: 100%;

      @media(max-width: 769px) {
        flex-direction: column;
        gap: 8px;
      }

      .side {
        display: inherit;
        flex-direction: column;
        gap: 8px;
        width: 100%;
      }
    }
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

    .buttons {
      display: inherit;
      flex-direction: inherit;
      align-items: center;
      gap: 8px;

      .button-modify {
        width: 100%;
        max-width: 350px;
        @media(max-width: 769px) {
          max-width: 100%;
        }

        .button-base {
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
  }
}
</style>

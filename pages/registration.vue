<template>
  <form class="registration" @submit.prevent="onSubmit">
    <form-header :title="'Реєстрація'" @value="language = $event"/>
    <main class="main">
      <input-base type="text"
                  label="Компанія"
                  :error="companyErrors"
                  @value="form.company = $event"
                  @on-blur="$v.form.company.$touch()"/>
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
                  @value="form.surname = $event"
                  @on-blur="$v.form.surname.$touch()"/>
      <input-base type="text"
                  label="Ім'я"
                  :error="nameErrors"
                  @value="form.name = $event"
                  @on-blur="$v.form.name.$touch()"/>
      <input-base type="text"
                  label="По батькові"
                  :error="fatherNameErrors"
                  @value="form.fatherName = $event"
                  @on-blur="$v.form.fatherName.$touch()"/>
      <input-base type="phone"
                  label="Телефон"
                  :error="phoneErrors"
                  @value="form.phone = $event"
                  @on-blur="$v.form.phone.$touch()"/>
      <input-select label="Виберіть тип платника"
                    :data="taxStatusData"
                    :error="taxStatusErrors"
                    @value="taxStatusValue = $event"
                    @on-blur="$v.form.taxStatus.$touch()"/>
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
                  @value="form.webSite = $event"
                  :error="urlErrors"
                  :isntRequire="true"
                  @on-blur="$v.form.webSite.$touch()"/>
      <input-select label="Область"
                    :data="regionData"
                    :error="regionErrors"
                    @value="form.region = $event"
                    @on-blur="$v.form.region.$touch()"/>
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
      <button-base :title="'Реєстрація'" :type="'submit'" :disabled="!isAgree || $v.$invalid"/>
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
import {mapMutations, mapActions, mapGetters} from "vuex"
import {required, email, minLength, sameAs, url} from 'vuelidate/lib/validators'
import {correctPhone, correctPassword} from '~/utils/validator'

@Component({
  name: 'Registration',
  components: {
    FormHeader,
    InputBase,
    InputSelect,
    InputCheckbox,
    ButtonBase
  },
  data() {
    return {
      form: {
        email: '',
        phone: '+380',
        password: '',
        name: '',
        surname: '',
        fatherName: '',
        locale: this.language === 'УКР' ? 'uk' : 'ru',
        company: '',
        taxStatus: '',
        code: '',
        webSite: '',
        region: ''
      },
      confirmationPassword: '',
      language: 'УКР',
      taxStatusValue: '',
      isAgree: false,
      ipn: '',
      companyUsreou: ''
    }
  },
  validations: {
    form: {
      email: {required, email},
      phone: {required, correctPhone},
      password: {required, correctPassword, minLength: minLength(6)},
      name: {required},
      surname: {required},
      fatherName: {required},
      company: {required},
      taxStatus: {required},
      webSite: {url},
      region: {required},
    },
    confirmationPassword: {
      required, sameAs: sameAs(function () {
        return this.form.password;
      })
    },
    ipn: {minLength: minLength(10)},
    companyUsreou: {minLength: minLength(8)}
  },
  computed: {
    ...mapGetters({
      registrationData: 'store/getRegistrationData',
      taxStatusData: 'store/getTaxStatusList',
      regionData: 'store/getRegionList'
    }),
    emailErrors() {
      if (this.$v.form.email.$dirty) {
        if (!this.$v.form.email.required) return 'Поле обов\'язково'
        else if (!this.$v.form.email.email) return 'Неправильний формат e-mail'
        else return ''
      }
    },
    phoneErrors() {
      if (this.$v.form.phone.$dirty) {
        if (!this.$v.form.phone.required) return 'Поле обов\'язково'
        else if (!this.$v.form.phone.correctPhone) return 'Неправильний номер телефону'
        else return ''
      }
    },
    passwordErrors() {
      console.log(this.isAgree)
      if (this.$v.form.password.$dirty) {
        if (!this.$v.form.password.required) return 'Поле обов\'язково'
        else if (!this.$v.form.password.correctPassword) return 'Повинні бути великі та маленькі літери, і хоча б одна цифра'
        else if (!this.$v.form.password.minLength) return `Мінімальна довжина поля має становити ${this.$v.form.password.$params.minLength.min}`
        else return ''
      }
    },
    confirmationPasswordErrors() {
      if (this.$v.confirmationPassword.$dirty) {
        if (!this.$v.confirmationPassword.required) return 'Поле обов\'язково'
        else if (!this.$v.confirmationPassword.sameAs) return 'Паролі повинні збігатися'
        else return ''
      }
    },
    nameErrors() {
      if (this.$v.form.name.$dirty) {
        if (!this.$v.form.name.required) return 'Поле обов\'язково'
        else return ''
      }
    },
    surnameErrors() {
      if (this.$v.form.surname.$dirty) {
        if (!this.$v.form.surname.required) return 'Поле обов\'язково'
        else return ''
      }
    },
    fatherNameErrors() {
      if (this.$v.form.fatherName.$dirty) {
        if (!this.$v.form.fatherName.required) return 'Поле обов\'язково'
        else return ''
      }
    },
    companyErrors() {
      if (this.$v.form.company.$dirty) {
        if (!this.$v.form.company.required) return 'Поле обов\'язково'
        else return ''
      }
    },
    taxStatusErrors() {
      if (this.$v.form.taxStatus.$dirty) {
        if (!this.$v.form.taxStatus.required) return 'Поле обов\'язково'
        else return ''
      }
    },
    ipnErrors() {
      if (this.$v.ipn.$dirty) {
        if (!this.$v.ipn.minLength) return `Код має містити ${this.$v.ipn.$params.minLength.min} цифр`
        else return ''
      }
    },
    companyUsreouErrors() {
      if (this.$v.companyUsreou.$dirty) {
        if (!this.$v.companyUsreou.minLength) return `Код має містити ${this.$v.companyUsreou.$params.minLength.min} цифр`
        else return ''
      }
    },
    urlErrors() {
      if (this.$v.form.webSite.$dirty) {
        if (!this.$v.form.webSite.url) return 'Неправильний формат посилання'
        else return ''
      }
    },
    regionErrors() {
      if (this.$v.form.region.$dirty) {
        if (!this.$v.form.region.required) return 'Поле обов\'язково'
        else return ''
      }
    }
  },
  methods: {
    ...mapMutations({
      putRegistrationData: 'store/setRegistrationData'
    }),
    ...mapActions({
      toSignUp: 'store/signUp'
    })
  },
  watch: {
    taxStatusValue(data) {
      if (data) {
        if (this.taxStatusValue === 'Юридична особа') {
          this.form.taxStatus = 'legalEntity'
          this.form.code = this.companyUsreou
        } else if (this.taxStatusValue === 'Фізична особа') {
          this.form.code = this.ipn
          this.form.taxStatus = 'individual'
        } else {
          this.form.code = this.ipn
          this.form.taxStatus = 'individualEntrepreneur'
        }
      }
    }
  }
})
export default class Registration extends Vue {

  codeChecking(val) {
    this.form.code = val
    if (this.taxStatusValue === 'Юридична особа') this.companyUsreou = val
    else this.ipn = val
  }

  onSubmit() {
    this.toSignUp(this.form)
  }
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

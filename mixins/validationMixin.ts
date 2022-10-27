import {email, minLength, required, sameAs, url} from "vuelidate/lib/validators"
import {correctPassword, correctPhone} from "~/utils/validator"
import Vue from 'vue'
import Component from 'vue-class-component'
import {FormType, ValidationType} from "~/types/types"

@Component({
  validations: {
    form: {
      email: {required, email},
      phone: {required, correctPhone},
      password: {required, correctPassword, minLength: minLength(6)},
      firstName: {required},
      lastName: {required},
      middleName: {required},
      companyName: {required},
      companyTaxStatus: {required},
      companyUrl: {url},
      companyRegionId: {required},
    },
    confirmationPassword: {
      required, sameAs: sameAs(function (this: ValidationType) {
        return this.form.password;
      })
    },
    ipn: {minLength: minLength(10)},
    companyUsreou: {minLength: minLength(8)},
  }
})
  export class ValidationMixin extends Vue {
    form: FormType = {
      email: '',
      phone: '+380',
      password: '',
      firstName: '',
      lastName: '',
      middleName: '',
      locale: 'uk',
      companyName: '',
      companyTaxStatus: '',
      companyItn: '8297462153',
      companyUrl: '',
      companyRegionId: '3ea7e7da-a2f1-4a75-ab6a-cf323c79e2b3'
    }

    confirmationPassword: string = ''
    taxStatusValue: string = ''
    isAgree: boolean = false
    ipn: string = ''
    companyUsreou: string = ''
    isOtherPC: boolean = false

    localeHandler(event: string) {
      if (event === 'УКР') this.form.locale = 'uk'
      else this.form.locale = 'ru'
    }

    get emailErrors() {
      if (this.$v.form.email?.$dirty) {
        if (!this.$v.form.email.required) return 'Поле обов\'язково'
        else if (!this.$v.form.email.email) return 'Неправильний формат e-mail'
        else return ''
      }
    }

    get phoneErrors() {
      if (this.$v.form.phone?.$dirty) {
        if (!this.$v.form.phone.required) return 'Поле обов\'язково'
        else if (!this.$v.form.phone.correctPhone) return 'Неправильний номер телефону'
        else return ''
      }
    }

    get passwordErrors() {
      if (this.$v.form.password?.$dirty) {
        if (!this.$v.form.password.required) return 'Поле обов\'язково'
        else if (!this.$v.form.password.correctPassword) return 'Повинні бути великі та маленькі літери, і хоча б одна цифра'
        else if (!this.$v.form.password.minLength) return `Мінімальна довжина поля має становити ${this.$v.form.password.$params.minLength.min}`
        else return ''
      }
    }

    get confirmationPasswordErrors() {
      if (this.$v.confirmationPassword.$dirty) {
        if (!this.$v.confirmationPassword.required) return 'Поле обов\'язково'
        else if (!this.$v.confirmationPassword.sameAs) return 'Паролі повинні збігатися'
        else return ''
      }
    }

    get nameErrors() {
      if (this.$v.form.firstName?.$dirty) {
        if (!this.$v.form.firstName.required) return 'Поле обов\'язково'
        else return ''
      }
    }

    get surnameErrors() {
      if (this.$v.form.lastName?.$dirty) {
        if (!this.$v.form.lastName.required) return 'Поле обов\'язково'
        else return ''
      }
    }

    get fatherNameErrors() {
      if (this.$v.form.middleName?.$dirty) {
        if (!this.$v.form.middleName.required) return 'Поле обов\'язково'
        else return ''
      }
    }

    get companyErrors() {
      if (this.$v.form.companyName?.$dirty) {
        if (!this.$v.form.companyName.required) return 'Поле обов\'язково'
        else return ''
      }
    }

    get taxStatusErrors() {
      if (this.$v.form.companyTaxStatus?.$dirty) {
        if (!this.$v.form.companyTaxStatus.required) return 'Поле обов\'язково'
        else return ''
      }
    }

    get ipnErrors() {
      if (this.$v.ipn.$dirty) {
        if (!this.$v.ipn.minLength) return `Код має містити ${this.$v.ipn.$params.minLength.min} цифр`
        else return ''
      }
    }

    get companyUsreouErrors() {
      if (this.$v.companyUsreou.$dirty) {
        if (!this.$v.companyUsreou.minLength) return `Код має містити ${this.$v.companyUsreou.$params.minLength.min} цифр`
        else return ''
      }
    }

    get urlErrors() {
      if (this.$v.form.companyUrl?.$dirty) {
        if (!this.$v.form.companyUrl.url) return 'Неправильний формат посилання'
        else return ''
      }
    }

    get regionErrors() {
      if (this.$v.form.companyRegionId?.$dirty) {
        if (!this.$v.form.companyRegionId.required) return 'Поле обов\'язково'
        else return ''
      }
    }
  }

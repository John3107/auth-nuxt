import {email, minLength, required, sameAs, url} from "vuelidate/lib/validators";
import {correctPassword, correctPhone} from "~/utils/validator";

export default {
  data() {
    return {
      form: {
        email: '',
        phone: '+380',
        password: '',
        firstName: '',
        lastName: '',
        middleName: '',
        locale: this.language === 'УКР' ? 'uk' : 'ru',
        companyName: '',
        companyTaxStatus: '',
        code: '',
        companyUrl: '',
        companyRegionId: ''
      },
      confirmationPassword: '',
      language: 'УКР',
      taxStatusValue: '',
      isAgree: false,
      ipn: '',
      companyUsreou: '',
      isOtherPC: false
    }
  },
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
      required, sameAs: sameAs(function () {
        return this.form.password;
      })
    },
    ipn: {minLength: minLength(10)},
    companyUsreou: {minLength: minLength(8)},
  },
  computed: {
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
      if (this.$v.form.firstName.$dirty) {
        if (!this.$v.form.firstName.required) return 'Поле обов\'язково'
        else return ''
      }
    },
    surnameErrors() {
      if (this.$v.form.lastName.$dirty) {
        if (!this.$v.form.lastName.required) return 'Поле обов\'язково'
        else return ''
      }
    },
    fatherNameErrors() {
      if (this.$v.form.middleName.$dirty) {
        if (!this.$v.form.middleName.required) return 'Поле обов\'язково'
        else return ''
      }
    },
    companyErrors() {
      if (this.$v.form.companyName.$dirty) {
        if (!this.$v.form.companyName.required) return 'Поле обов\'язково'
        else return ''
      }
    },
    taxStatusErrors() {
      if (this.$v.form.companyTaxStatus.$dirty) {
        if (!this.$v.form.companyTaxStatus.required) return 'Поле обов\'язково'
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
      if (this.$v.form.companyUrl.$dirty) {
        if (!this.$v.form.companyUrl.url) return 'Неправильний формат посилання'
        else return ''
      }
    },
    regionErrors() {
      if (this.$v.form.companyRegionId.$dirty) {
        if (!this.$v.form.companyRegionId.required) return 'Поле обов\'язково'
        else return ''
      }
    }
  }
}

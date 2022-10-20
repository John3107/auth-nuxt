<template>
  <form class="registration" @submit.prevent="onSubmit">
    <form-header :title="'Реєстрація'"/>
    <main class="main">
      <input-base type="text" label="Компанія" @value="form.company = $event"/>
      <input-base type="email" label="Email" @value="form.email = $event"/>
      <input-base type="password" label="Пароль" @value="form.password = $event"/>
      <input-base type="password" label="Підтвердження пароля" @value="form.confirmationPassword = $event"/>
      <input-base type="text" label="Прізвище" @value="form.surname = $event"/>
      <input-base type="text" label="Ім'я" @value="form.name = $event"/>
      <input-base type="text" label="По батькові" @value="form.fatherName = $event"/>
      <input-base type="phone" label="Телефон" @value="form.phone = $event"/>
      <input-select label="Виберіть тип платника" :data="documentationData" @value="form.document = $event"/>
      <input-base type="text" label="ЄДРПОУ" @value="form.registrationCode = $event"/>
      <input-base type="text" label="Веб-сайт" @value="form.webSite = $event" :isntRequire="true"/>
      <input-select label="Область" :data="regionData" @value="form.region = $event"/>
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
      <button-base :title="'Реєстрація'" :type="'submit'"/>
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
import {required, email, minLength} from 'vuelidate/lib/validators'

@Component({
  name: 'Registration',
  components: {
    FormHeader,
    InputBase,
    InputSelect,
    InputCheckbox,
    ButtonBase
  },
  data(){
    return {
      form: {
        company: '',
        email: '',
        password: '',
        confirmationPassword: '',
        surname: '',
        name: '',
        fatherName: '',
        phone: '',
        registrationCode: '',
        webSite: '',
        document: '',
        region: ''
      }
    }
  },
  validations: {
    email: { required, email },
    password: { required }
  },
  computed: {
    ...mapGetters({
      registrationData: 'store/getRegistrationData',
      documentationData: 'store/getDocumentationList',
      regionData: 'store/getRegionList'
    })
  },
  methods: {
    ...mapMutations({
      putRegistrationData: 'store/setRegistrationData'
    }),
    ...mapActions({
      toSignUp: 'store/signUp'
    })
  }
})
export default class Registration extends Vue {

  onSubmit(e: any) {
    if(this.$v.$invalid){
      this.$v.$touch()
      return
    }
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


<!--<main class="main">-->
<!--<input-base type="text"-->
<!--            label="Компанія"-->
<!--            @value="putRegistrationData({...registrationData, company: $event})"/>-->
<!--<input-base type="email"-->
<!--            label="Email"-->
<!--            @value="putRegistrationData({...registrationData, email: $event})"/>-->
<!--<input-base type="password"-->
<!--            label="Пароль"-->
<!--            @value="putRegistrationData({...registrationData, password: $event})"/>-->
<!--<input-base type="password"-->
<!--            label="Підтвердження пароля"-->
<!--            @value="putRegistrationData({...registrationData, confirmationPassword: $event})"/>-->
<!--<input-base type="text"-->
<!--            label="Прізвище"-->
<!--            @value="putRegistrationData({...registrationData, surname: $event})"/>-->
<!--<input-base type="text"-->
<!--            label="Ім'я"-->
<!--            @value="putRegistrationData({...registrationData, name: $event})"/>-->
<!--<input-base type="text"-->
<!--            label="По батькові"-->
<!--            @value="putRegistrationData({...registrationData, fatherName: $event})"/>-->
<!--<input-base type="phone"-->
<!--            label="Телефон"-->
<!--            @value="putRegistrationData({...registrationData, phone: $event})"/>-->
<!--<input-select label="Виберіть тип платника"-->
<!--              :data="documentationData"-->
<!--              @value="putRegistrationData({...registrationData, document: $event})"/>-->
<!--<input-base type="text"-->
<!--            label="ЄДРПОУ"-->
<!--            @value="putRegistrationData({...registrationData, registrationCode: $event})"/>-->
<!--<input-base type="text"-->
<!--            label="Веб-сайт"-->
<!--            @value="putRegistrationData({...registrationData, webSite: $event})"-->
<!--            :isntRequire="true"/>-->
<!--<input-select label="Область"-->
<!--              :data="regionData"-->
<!--              @value="putRegistrationData({...registrationData, region: $event})"/>-->
<!--</main>-->

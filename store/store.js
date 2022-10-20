export const state = () => ({
  authData: {
    email: '',
    password: ''
  },
  registrationData: {
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
  },
  documentationList: ['Юридична особа', 'Фізична особа', 'Індивідуальний підприємець'],
  regionList: [
    'Вінницька',
    'Волинська',
    'Луганська',
    'Дніпропетровська',
    'Донецька',
    'Житомирська',
    'Закарпатська',
    'Івано-Франківська',
    'Київська',
    'Кіровоградська',
    'Львівська',
    'Миколаївська',
    'Одеська',
    'Полтавська',
    'Рівненська',
    'Сумська',
    'Тернопільська',
    'Харківська',
    'Херсонська',
    'Хмельницька',
    'Черкаська',
    'Чернігівська',
    'Чернівецька'
  ]
})

export const getters = {
  getRegistrationData: state => state.registrationData,
  getAuthData: state => state.authData,
  getDocumentationList: state => state.documentationList,
  getRegionList: state => state.regionList,
}

export const mutations = {
  setRegistrationData: (state, payload) => state.registrationData = payload,
  setAuthData: (state, payload) => state.authData = payload,
}

export const actions = {
  async signUp(formData) {
    // this.$axios.post('https://dev.api.b2b.logicpower.ua/user/account/sign/up', formData)
    //   .then((res) => {
    //     console.log(res, 1111)
    //   })
    //   .catch((err) => {
    //     console.log(err, 222)
    //   })
  }
}

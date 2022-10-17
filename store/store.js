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
  getRegionList: state => state.regionList
}

export const mutations = {
  setRegistrationData: (state, payload) => state.registrationData = payload,
  setAuthData: (state, payload) => {
    console.log(payload, 222)
    state.authData = payload
  },
  setDocumentationList: (state, payload) => state.documentationList = payload,
  setRegionList: (state, payload) => state.regionList = payload
}

export const actions = {
  // async fetchCounter({ state }) {
  //   const res = { data: 10 };
  //   state.counter = res.data;
  //   return res.data;
  // }
}

export const state = () => ({
  taxStatusList: ['Юридична особа', 'Фізична особа', 'Індивідуальний підприємець'],
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
  getTaxStatusList: state => state.taxStatusList,
  getRegionList: state => state.regionList
}

export const actions = {
  signUp(data) {
    this.$axios.$post('https://dev.api.b2b.logicpower.ua/user/account/sign/up', data)
      .then((res) => {
        console.log(res, 1111)
      })
      .catch((err) => {
        console.log(err, 2222)
      })
  }
}

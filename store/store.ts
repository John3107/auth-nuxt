import {FormType, StateType} from "~/types/types";
import axios, { AxiosResponse } from 'axios';

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
  getTaxStatusList: (state: StateType) => state.taxStatusList,
  getRegionList: (state: StateType) => state.regionList
}

export const actions = {
  signUp({commit}: any, data: FormType) {
    axios.post('https://dev.api.b2b.logicpower.ua/user/account/sign/up', data)
      .then((res: AxiosResponse) => {
        console.log(res, 1111)
      })
      .catch((err: AxiosResponse) => {
        console.log(err, 2222)
      })
  }
}

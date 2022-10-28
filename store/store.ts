import {CurrentRegionType, RegistrationFormType, StateType} from "~/types/types"
import axios, { AxiosResponse } from 'axios'
import { ActionContext } from "vuex"

export const state = () => ({
  taxStatusList: [
    { id: '1', name: { ru: 'Юридическое лицо', uk: 'Юридична особа' } },
    { id: '2', name: { ru: 'Физическое лицо', uk: 'Фізична особа' } },
    { id: '3', name: { ru: 'Индивидуальный предприниматель', uk: 'Індивідуальний підприємець' } }
  ],
  regionList: [{ id: '', name: { ru: '', uk: '' } }],
  currentRegion: { id: '', name: { ru: '', uk: '' } },
  currentTaxStatus: { id: '', name: { ru: '', uk: '' } }
})

export const getters = {
  getTaxStatusList: (state: StateType) => state.taxStatusList,
  getRegionList: (state: StateType) => state.regionList,
  getCurrentRegion: (state: StateType) => state.currentRegion,
  getCurrentTaxStatus: (state: StateType) => state.currentTaxStatus
}

export const mutations = {
  setCurrentRegion: (state: StateType, payload: CurrentRegionType) => state.currentRegion = payload,
  setRegionList: (state: StateType, payload: CurrentRegionType[]) => state.regionList = payload,
  setCurrentTaxStatus: (state: StateType, payload: CurrentRegionType) => state.currentTaxStatus = payload
}

export const actions = {
  regions({commit}: ActionContext<StateType, StateType>) {
    axios.get('https://dev.api.b2b.logicpower.ua/user/account/region/list')
      .then((res: AxiosResponse) => {
        commit('setRegionList', res.data.data)
      })
      .catch((err: AxiosResponse) => {
        console.log(err)
      })
  },
  currentRegion({commit}: ActionContext<StateType, StateType>) {
      axios.get('https://dev.api.b2b.logicpower.ua/user/account/region/current')
      .then((res: AxiosResponse) => {
        commit('setCurrentRegion', res.data.data)
      })
      .catch((err: AxiosResponse) => {
        console.log(err)
      })
  },
  signUp(ctx: ActionContext<StateType, StateType>, data: RegistrationFormType) {
    axios.post('https://dev.api.b2b.logicpower.ua/user/account/sign/up', data)
      .then(() => {
        alert('Registration success')
        location.reload()
      })
      .catch((err: AxiosResponse) => {
        console.log(err)
      })
  },
  signIn(ctx: ActionContext<StateType, StateType>, data: RegistrationFormType) {
    axios.post('https://dev.api.b2b.logicpower.ua/user/account/sign/in/credentials', data)
      .then(() => {
        alert('Authorization success')
        location.reload()
      })
      .catch((err) => {
        if(err.response.status === 403) {
          alert('Менеджер пока не утвердил вашу заявку на регистрацию - пожалуйста, ожидайте или свяжитесь с менеджером.')
        }
        console.log(err)
      })
  }
}

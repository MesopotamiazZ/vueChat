import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    isShow: false // 是否显示sendMessage
  },
  getters: {
  },
  mutations: {
    [types.IS_SHOW_SENDMESSAGE] (state, payload) {
      console.log(1111)
      state.isShow = payload
    }
  }
})

export default store

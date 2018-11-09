import * as types from './types'

export const state = {
  eventos: []
}

export const mutations = {
  [types.SET_EVENTO] (state, params) {
    state.eventos.push(params)
  }
}

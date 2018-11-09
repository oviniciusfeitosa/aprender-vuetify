// import * as avaliacaoResultadosHelperAPI from '@/helpers/api/AvaliacaoResultados';
import * as types from './types'

export const eventos = ({ commit }, params) => {
  commit(types.SET_EVENTO, params)
}

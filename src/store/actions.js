import * as types from './mutation-types'

export default {
  addtime ({commit}, time) {
    commit(types.ADD_TOTAL_TIME, time)
  },
  dectime ({commit}, time) {
    commit(types.DEC_TOTAL_TIME, time)
  },
  savePlan ({commit}, plan) {
    commit(types.SAVE_PLAN, plan)
  },
  deletePlan ({commit}, index) {
    commit(types.DELETE_PLAN, index)
  }
}

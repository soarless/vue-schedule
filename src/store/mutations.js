import * as types from './mutation-types'

export default {
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime += time
  },
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime -= time
  },
  [types.SAVE_PLAN] (state, plan) {
    state.list.unshift(plan)
  },
  [types.DELETE_PLAN] (state, index) {
    state.list.splice(index, 1)
  }
}

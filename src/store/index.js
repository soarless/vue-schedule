import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  totalTime: 114,
  list: [{
    name: '傻逼',
    date: '2016-12-25',
    totalTime: '6',
    comment: '12月25日，玩手机玩了6个小时'
  },
  {
    name: 'asd',
    date: '2016-12-25',
    totalTime: '6',
    comment: '12月25日，玩手机玩了6个小时'
  }
  ]
}
export default new Vuex.Store({
  state
})

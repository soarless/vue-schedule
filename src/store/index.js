import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  totalTime: 0,
  list: [{
    name: 'peko',
    date: '2016-12-25',
    totalTime: 6,
    comment: '12月25日，玩手机玩了6个小时。尽水源，便得一山，山有小口，仿佛若有光。便舍船，从口入。初极狭，才通人。复行数十步，豁然开朗。土地平旷，屋舍俨然，有良田美池桑竹之属。阡陌交通，鸡犬相闻。其中渔人，乃大惊，问所从来。具答之。便要还家'
  },
  {
    name: 'asd',
    date: '2016-12-25',
    totalTime: 6,
    comment: '12月25日，玩手机玩了6个小时'
  },
  {
    name: 'asd',
    date: '2016-12-25',
    totalTime: 6,
    comment: '12月25日，玩手机玩了6个小时'
  },
  {
    name: 'asd',
    date: '2016-12-25',
    totalTime: 6,
    comment: '12月25日，玩手机玩了6个小时'
  }
  ]
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})

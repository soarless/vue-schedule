import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import index from '@/components/index'
import add from '@/components/add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'list',
      component: list,
      children: [{
        path: 'add',
        name: 'add',
        component: add
      }]
    }
  ]
})

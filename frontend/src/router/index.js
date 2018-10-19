import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from 'components/IndexPage'
import Show from 'components/ShowPage'
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/movies/:id',
      name: 'show',
      component: Show
    }
  ]
})

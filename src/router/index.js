import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import DianPu from '@/components/page/DianPu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/DianPu',
      name: 'DianPu',
      component: DianPu
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import DianPu from '@/components/page/DianPu'
import Cate from '@/components/page/Cate'
import VIP from '@/components/page/VIP'
import Set from '@/components/page/Set'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Pos',
    component: Pos
  },
  {
    path: '/DianPu',
    name: 'DianPu',
    component: DianPu
  },
  {
    path: '/Cate',
    name: 'Cate',
    component: Cate
  },
  {
    path: '/VIP',
    name: 'VIP',
    component: VIP
  },
  {
    path: '/Set',
    name: 'Set',
    component: Set
  }
  ]
})

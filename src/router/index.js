import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Triplist from '@/components/Triplist'
import Addtrip from '@/components/Addtrip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/triplist',
      name: 'Triplist',
      component: Triplist
    },
    {
      path: '/addtrip',
      name: 'Addtrip',
      component: Addtrip
    }
  ]
})

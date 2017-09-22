import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Home from '@/components/Home'
import Triplist from '@/components/Triplist'
import Addtrip from '@/components/Addtrip'
import Edittrip from '@/components/Edittrip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
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
    },
    {
      path: '/edittrip/:id',
      name: 'Edittrip',
      component: Edittrip
    }
  ]
})

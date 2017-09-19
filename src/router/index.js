import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Trip from '@/components/Trip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/trip',
      name: 'Trip',
      component: Trip
    }
  ]
})

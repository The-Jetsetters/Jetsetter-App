import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Triplist from '@/components/Triplist'
import TripListAdd from '@/components/TripListAdd'
import TripListTrips from '@/components/TripListTrips'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Triplist',
      component: Triplist,
      children: [
        {
          path: 'add',
          component: TripListAdd
        },
        {
          path: 'trips',
          component: TripListTrips
        }
      ]
    }
  ]
})

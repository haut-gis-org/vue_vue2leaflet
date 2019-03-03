import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import VueLeaflet from '@/components/VueLeaflet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueLeaflet',
      component: VueLeaflet
    }
  ]
})

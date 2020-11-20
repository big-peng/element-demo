import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Top from '@/views/top/Top'
import App from '@/App'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      props: {
        msg: "123"
      }
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    }
  ]
})

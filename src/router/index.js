import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
// import Hi from '@/components/Hi'
// import Nav from '@/components/Nav'
const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld.vue')), 'chunkname1')
const Hi = r => require.ensure([], () => r(require('@/components/Hi.vue')), 'chunkname1')
// const Loading = r => require.ensure([], () => r(require('@/components/Loading.vue')), 'chunkname3')
const Nav = r => require.ensure([], () => r(require('@/components/Nav.vue')), 'chunkname3')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/hi',
      name: 'Hi',
      component: Hi
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

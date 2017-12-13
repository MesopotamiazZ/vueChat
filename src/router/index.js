import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Login'
import ChatRoom from '@/views/chatRoom/chatRoom'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/chat',
      component: ChatRoom
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

export default router

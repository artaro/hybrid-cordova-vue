// import Vue from 'vue'
// import Router from 'vue-router'
// import Hello from '@/components/Hello'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })
import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Profile from '@/components/Profile'
import Order from '@/components/Order'
import Read1 from '@/components/Read1'
import Read2 from '@/components/Read2'
import Read3 from '@/components/Read3'
import Read4 from '@/components/Read4'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/read1',
      name: 'Read1',
      component:Read1,
      meta: {
        requiresAuth: true
      }
    },
    
    {
      path: '/read2',
      name: 'Read2',
      component: Read2,
      meta: {
        requiresAuth: true
      }
    },  {
      path: '/read3',
      name: 'Read2',
      component: Read3,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/read4',
      name: 'Read4',
      component: Read4,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('hello')
  else next()
})

export default router

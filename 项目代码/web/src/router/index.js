import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/add',
    name: "Add",
    component: () => import('../views/Add.vue')
  },
  {
    path: '/edit',
    name: "Edit",
    component: () => import('../views/Edit.vue')
  }
]

const router = new VueRouter({
  routes
})

//路由守卫
router.beforeEach(function (to, from, next) {
  var token = window.localStorage.getItem("token");
  if (token) {
    next()
  } else {
    //防止死循环
    if (to.path == '/login') {
      next();
      return
    }
    next({
      path: "/login"
    })
  }
})

export default router
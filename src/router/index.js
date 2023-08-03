import { createRouter, createWebHistory } from 'vue-router'
import SideBar from '../components/SideBar.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
// import FilterById from '../components/FilterById.vue'
// import FilterByName from '../components/FilterByName.vue'
// import FilterByHair from '../components/FilterByHairColor.vue'

const routes = [
  {
    path: '/home',
  
    component: SideBar
  },
    {
    path: '/',
  
    component: LoginView
  },
      {
    path: '/signup',
  
    component: RegisterView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

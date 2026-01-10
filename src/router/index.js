import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HolaMundo from '@/views/HolaMundo.vue'
import Pregunta from '@/views/PreguntaView.vue'
import PokemonView from '@/views/PokemonView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hola/:id',
    name: 'hola',
    component: HolaMundo
  },
  {
    path: '/pregunta',
    name: 'pregunta',
    component: Pregunta
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import(/* webpackChunkName: "pokemon" */ '../views/PokemonView.vue')

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

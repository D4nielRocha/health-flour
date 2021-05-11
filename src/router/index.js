import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Landing from '../views/Landing.vue'
import CornBread from '../views/CornBread.vue'
import LowCarb from '../views/LowCarb.vue'
import Functional from '../views/Functional.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    components: {
      mainView: Home,
    } 
  },
  {
    path: '/contact',
    name: 'Contact',
    components: {
      mainView: Contact
    }
  },
  {
    path: '/',
    name: 'Landing',
    components: {
      mainView: Landing
    }
  },
  {
    path: '/cornbread',
    name: 'CornBread',
    components:{
      mainView: Landing,
      postView: CornBread
    } 
  },
  {
    path: '/lowcarb',
    name: 'LowCarb',
    components:{
      mainView: Landing,
      postView: LowCarb
    } 
  },
  {
    path: '/functional',
    name: 'Functional',
    components:{
      mainView: Landing,
      postView: Functional
    } 
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

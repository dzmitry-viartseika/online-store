import Vue from 'vue'
import VueRouter from 'vue-router'
import vCatalog from '../components/v-catalog'
import vMain from '../components/main-page/v-main'
import vCart from '../components/v-cart'
import vProductPage from '../components/v-product-page'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: vMain
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: vCatalog
  },
  {
    path: '/product',
    name: 'product',
    component: vProductPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: vCart,
    props: true,
  }
]

const router = new VueRouter({
  routes
})

export default router

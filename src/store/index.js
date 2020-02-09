import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  getters: {
    products(state) {
      return state.products;
    },
    cart(state) {
      return state.cart;
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setCart(state, product) {
      if(state.cart.length) {
        let isProductExists = false;
        state.cart.forEach((item) => {
          if(item.article === product.article) {
            isProductExists = true;
            item.quantity++
          }
        })
        if(!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    deleteProduct(state, index) {
      state.cart.splice(index,1)
    }
  },
  actions: {
    fetchProducts({commit}) {
      const url = 'http://localhost:3000/products';
      fetch(url)
          .then(response => {
            return response.json()
                .then((data) => {
                  commit('setProducts', data)
                }) .catch((e) => {
                  console.error(e)
                })
          })
    },
    addToCartProduct({commit}, product) {
      commit('setCart', product)
    },
    deleteProductFromCart({commit}, index) {
      commit('deleteProduct', index)
    }
  },
})

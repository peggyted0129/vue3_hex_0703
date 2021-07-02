import { createStore } from 'vuex'
import axios from 'axios'
import alertModules from '@/store/modules/alertMessage'
import productModules from '@/store/modules/product'

export default createStore({
  strict: true,
  state: {
    isLoading: false,
    order: {
      products: {},
      user: {}
    },
    orderStep: 'create'
  },
  actions: {
    updateLoading (context, status) {
      context.commit('LOADING', status)
    },
    getOrder (context, orderId) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${orderId}`
      context.commit('LOADING', true)
      axios.get(api).then((response) => {
        console.log(response)
        context.commit('GET_ORDER', response.data.order)
        context.commit('LOADING', false)
      })
    },
    payOrder (context, orderId) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${orderId}`
      context.commit('LOADING', true)
      axios.post(api).then((response) => {
        if (response.data.success) {
          context.dispatch('getOrder', orderId)
        }
        context.commit('LOADING', false)
      })
    },
    setOrderStep (context, step) {
      context.commit('SET_ORDER_STEP', step)
    }
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    },
    GET_ORDER (state, payload) {
      state.order = payload
    },
    SET_ORDER_STEP (state, payload) {
      state.orderStep = payload
    }
  },
  getters: {
    isLoading: (state) => state.isLoading,
    order: (state) => state.order,
    orderStep: (state) => state.orderStep
  },
  modules: {
    alertModules,
    productModules
  }
})

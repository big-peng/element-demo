import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
 
// 告诉 vue “使用” vuex
Vue.use(Vuex)
 
// 创建一个对象来保存应用启动时的初始状态
// 需要维护的状态
export default new Vuex.Store({
    plugins: [
        createPersistedState({
          // storage: window.localStorage,
          storage: window.sessionStorage,
          // 默认持久化所有state，要想持久化指定state，做如下配置
          reducer (state) {
            return {
              // 要持久化的指定state
              // token: state.token
              bankInf: state.bankInf
            }
          }
        })
      ],
  state: {
    // 放置初始状态 app启动的时候的全局的初始值
    bankInf: ""
  },
  getters: {
    hasBankInf: state => {
      return !!state.bankInf
    }
  },
  mutations: {
    setBankInf (state, val) {
      state.bankInf = val
    }
  }
})
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import routes from './router/index'
import axios from 'axios'
import Vuex from 'vuex'
import Store from './store/index'
Vue.config.productionTip = false
Vue.use(vueRouter)
Vue.use(Vuex)
axios.defaults.baseURL="/api"
axios.defaults.withCredentials = true
const router = new vueRouter({
  mode: "history",
  routes
})
const store = new Vuex.Store(Store)
router.beforeEach((to, from, next)=>{
    let login_state = store.state.isLogin  
    
    if(!login_state){
      if(to.name === 'login'||to.name === 'signup'){
        next()
      }     
      else{
        next("/login")
      }
    }else{
      next()
    }
  
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

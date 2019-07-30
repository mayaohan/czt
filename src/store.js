import Vue from 'vue'
import Vuex from 'vuex'
import http from './http'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
Vue.use(Vuex);



const store = new Vuex.Store({
    state: {
        personal:{}
    },
    mutations: {
    //   SET_CITY(state,data){
    //     Object.assign(state.city,data)
    //   },
        SET_PERSONAL(state,data){
            state.personal = Object.assign({},data)
            wx.setStorage({
                key: 'loginKey',
                data: state.personal
            })
        }
    },
    action:{
        async login(param){
            // let results = await http.put("/memberinfo",param);
            // if(results.s==1){
            //     return results
            // }
        }
    },
    getters:{
    }
  });
  
  export default store
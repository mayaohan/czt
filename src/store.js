import Vue from 'vue'
import Vuex from 'vuex'
import http from './http'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
Vue.use(Vuex);



const store = new Vuex.Store({
    state: {
        personal:{},
        memberInfo:{
            age: null,
            avatarUrl: "",
            birthdate: 0,
            detectionsLasttime: 0,
            detectionsNumber: 0,
            expSum: 0,
            id: null,
            name: "",
            nearWinTime: 0,
            openId: "",
            registrationDate: 0,
            sex: 1,
            silentNumber: 0,
            sumFailTime: 0,
            sumWinTime: 0,
            topWinTime: 0,
            sessionid: "",
            type: "i",
            outId:null
        },

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
        },
        // 登陆用得
        SET_memberInfo(state,data){
            Object.assign(state.memberInfo,{sessionid:data.sessionid},{type:data.type},data.memberInfo)
            uni.setStorage({
                key: 'memberInfo',
                data: state.memberInfo
            })
        },
        // 刷新问题
        SET_memberInfo_SINGLE(state,data){
            const value = wx.getStorageSync('memberInfo')
            if(value){
                Object.assign(value,data)
            }
            this.commit('SET_memberInfo',value)
            this.commit('UP_memberInfo',value)
        },
        // 页面刷新在缓存里取用户信息
        UP_memberInfo(state,data){
            Object.assign(state.memberInfo,data)
        },
        // 下注扣分
        KOU_expSum(state,data){
            state.memberInfo.expSum-=data
            uni.setStorage({
                key: 'memberInfo',
                data: state.memberInfo
            })
        },
        // 邀请人id
        OUT_ID(state,data){
            state.outId = data
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
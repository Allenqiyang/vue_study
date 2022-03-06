/* 该文件用于创建Vuex中的store */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
    addOdd:function(context,value){
        if(context.state.sum%2){
            context.commit('addOdd',value)
        }
    },
    addWait:function(context,value){
        setTimeout(() => {
            context.commit('addWait',value)
        },500)
    }
}
const mutations = {
    add:function(state,value){
        state.sum+=value
    },
    minus:function(state,value){
        state.sum-=value
    },
    addOdd:function(state,value){
        state.sum+=value
    },
    addWait:function(state,value){        
        state.sum+=value     
    },
    addPerson:function(state,value){
        state.personList.push(value)
    }
}
const state = {
    sum: 0,
    subject: 'Physic',
    school: 'LuoWai',
    personList: [
        {id:'01',name:'Tony'}
    ]
}
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

export default new Vuex.Store({
    actions:actions,
    mutations:mutations,
    state:state,
    getters:getters
})
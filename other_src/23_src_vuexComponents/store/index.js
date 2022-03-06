/* 该文件用于创建Vuex中的store */

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { nanoid } from 'nanoid'
Vue.use(Vuex)

const countOption = {
    namespaced: true,
    actions:{
        addOdd:function(context,value){
            if(context.state.sum%2){
                context.commit('addOdd',value)
            }
        },
        addWait:function(context,value){
            setTimeout(() => {
                context.commit('addWait',value)
            },500)
        },
    },
    mutations:{
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
    },
    state:{
        sum: 0,
        subject: 'Physic',
        school: 'LuoWai',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    },
}

const personOption = {
    namespaced: true,
    actions:{
        addServer:function(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?tepe=social').then(
                response => {
                    context.commit('addPerson',{id:nanoid(),name: response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        addPerson:function(state,value){
            state.personList.push(value)
        }
    },
    state:{
        personList: [
            {id:'01',name:'Tony'}
        ]
    },
    getters:{}
}

export default new Vuex.Store({
    modules:{
        countAbout:countOption,
        personAbout:personOption
    }
})
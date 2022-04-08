<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import {ref,customRef} from 'vue'
export default {
  name: 'App',
  setup(){
    //自定义一个ref
    function myRef(value,delay){
      let timer
      return customRef((track,trigger)=>{
        return{
          get(){
            console.log(`Data ${value} in myRef is read`)
            track()   //通知Vue追踪value的变化
            return value
          },
          set(newValue){
            console.log(`Data in myRef is changed to ${newValue}`)
            clearTimeout(timer)
            timer = setTimeout(()=>{
              value = newValue
              trigger()   //通知Vue去重新解析模板
            },delay)
          }
        }
      })
    }

    // let keyWord = ref('hello')
    let keyWord = myRef('hello',500)    //使用自定义ref
    return {keyWord}
  }
}
</script>

<style>

</style>

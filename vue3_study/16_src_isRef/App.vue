<template>
  <h3>我是祖先组件</h3>
</template>

<script>
import { ref, reactive, toRefs, isRef, isReactive, isReadonly, readonly, isProxy, } from 'vue'
export default {
  name: 'App',
  setup(){
    let sum = ref(0)
    let person = reactive({
      name: "Allen",
      age: 20
    })
    let person2 = readonly(person)
    console.log(isRef(sum))   //true
    console.log(isReactive(person))   //true
    console.log(isReadonly(person2))  //true
    console.log(isProxy(person))    //true
    console.log(isProxy(person2))   //true,说明readonly的person2并不是一个Object依然是一个Proxy
    console.log(isProxy(sum))   //false

    return {...toRefs(person)}
  }
}
</script>

<style>
.app{
  background-color:grey;
  padding: 10px;
}
</style>
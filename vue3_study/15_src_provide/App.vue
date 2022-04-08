<template>
  <div class="app">
    <h3>我是祖先组件</h3>
    <h4>{{name}}---{{age}}</h4>
    <Son></Son>
  </div>
</template>

<script>
import { provide, reactive, toRefs } from 'vue'
import Son from './components/Son.vue'
export default {
  name: 'App',
  components:{Son},
  setup(){
    let person = reactive({
      name: "Allen",
      age: 20
    })
    provide('person',person)    //给后代组件传递数据
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
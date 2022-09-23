<template>
  <h2>Home: {{$store.state.counter}}</h2>
  <h3>Home: {{counter}}</h3>
  <h3>Home: {{name}}</h3>
  <h3>Home: {{age}}</h3>
  {{sCounter}}-{{sName}}-{{sAge}}
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "Home",
  computed: {
    // mapState返回的是一个对象,对象中的各个属性都是函数
    ...mapState(["counter", "name", "age"]),
    // 还可以写成对象的写法，这样可以取别名防止与组件 data 中的名字冲突
    ...mapState({
      sCounter: state => state.counter,
      sName: state => state.name,
      sAge: state => state.age
    })
  }
}
</script>

<style>

</style>
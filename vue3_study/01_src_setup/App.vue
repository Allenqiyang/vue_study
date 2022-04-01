<template>
  <h1>I'm App</h1>
  <h3>name:{{name}}</h3>
  <h3>age:{{age}}</h3>
  <button @click="sayHello">speak</button>
</template>

<script>

export default {
  name: 'App',
  //测试setup,先不管响应式
  setup() {
    //data
    let name = 'Allen'
    let age = 18

    //methods
    function sayHello(){
      alert(`Hello, I'm ${name},I'm ${age} years old.`)
    }

    return{
      name,
      age,
      sayHello
    }
  }
}
</script>

<style>

</style>

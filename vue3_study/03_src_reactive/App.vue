<template>
  <h1>I'm App</h1>
  <h3>name:{{person.name}}</h3>
  <h3>age:{{person.age}}</h3>
  <h3>job:{{person.job.type}}</h3>
  <h3>salary:{{person.job.salary}}</h3>
  <h3>hobbies:{{person.hobbies}}</h3>
  <h3>test data:{{person.job.a.b.c}}</h3>
  <button @click="change">change</button>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'App',
  setup() {
    const person = reactive({
      name: 'Allen',
      age: 18,
      job: {
        type: 'engineer',
        salary: 100000,
        a:{
          b:{
            c:123
          }
        }
      },
      hobbies: ['study','run','eat']
    })

    function change(){
      person.name = 'Tony'
      person.age = 15
      person.job.type = 'student'
      person.job.salary = 0
      person.hobbies[2] = 'play'
      person.job.a.b.c = 456
    }

    return{
      person,
      change
    }
  }
}
</script>

<style>

</style>

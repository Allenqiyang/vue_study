<template>
  <h1>I'm App</h1>
  <h3>name:{{name}}</h3>
  <h3>age:{{age}}</h3>
  <h3>job:{{job.type}}</h3>
  <h3>salary:{{job.salary}}</h3>
  <button @click="change">change</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup() {
    //data
    let name = ref('Allen')
    let age = ref(18)
    let job = ref({
      type: 'engineer',
      salary: 100000
    })

    //methods
    function change(){
      name.value = 'Tony'
      age.value = 15
      console.log(job.value)
      job.value.type = 'student'
      job.value.salary = 0
    }

    return{
      name,
      age,
      job,
      change
    }
  }
}
</script>

<style>

</style>

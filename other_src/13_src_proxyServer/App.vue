<template>
    <div id="root">
        <button @click="getStudent">get students</button><br>
        <button @click="getCars">get cars</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"App",
    methods: {
        getStudent(){
            axios.get('http://localhost:8080/api/students').then(
                response => {
                    console.log('request success',response.data)
                },
                error => {
                    console.log('request failed',error.message)
                }
            )
        },
        getCars(){
            axios.get('http://localhost:8080/demo/cars').then(
                response => {
                    console.log('request success',response.data)
                },
                error => {
                    console.log('request failed',error.message)
                }
            )
        }
    }
}
</script>

<style>
</style>
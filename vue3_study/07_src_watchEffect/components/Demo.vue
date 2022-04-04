<template>
    <h3>The sum is: {{sum}}</h3>
    <button @click="sum++">click +1</button>
    <h3>The msg is: {{msg}}</h3>
    <button @click="msg+='!'">change</button>
    <h3>Person name: {{person.name}}</h3>
    <h3>Person age: {{person.age}}</h3>
    <h3>Person salary: {{person.job.code.salary}}k</h3>
    <button @click="person.name+='!'">change name</button>
    <button @click="person.age++">change age</button>
    <button @click="person.job.code.salary++">change salary</button>
</template>

<script>
import {ref,reactive,watchEffect} from 'vue'
export default {
    name: 'Demo',
    setup() {
        let sum = ref(0)
        let msg = ref('hello')
        let person = reactive({
            name:"Allen",
            age:20,
            job:{
                code:{
                    salary:20
                }
            }
        })

        watchEffect(()=>{
            const result1 = sum.value
            const result2 = person.job.code.salary
            console.log('watchEffect is called')
        })

        return{
            sum,
            msg,
            person
        }
    }
}
</script>

<style>

</style>
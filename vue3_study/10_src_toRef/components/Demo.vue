<template>
    <h4>{{person}}</h4>
    <h3>Person name: {{name}}</h3>
    <h3>Person age: {{age}}</h3>
    <h3>Person salary: {{job.code.salary}}k</h3>
    <button @click="name+='!'">change name</button>
    <button @click="age++">change age</button>
    <button @click="job.code.salary++">change salary</button>
</template>

<script>
import {reactive,toRef,toRefs} from 'vue'
export default {
    name: 'Demo',
    setup() {
        let person = reactive({
            name:"Allen",
            age:20,
            job:{
                code:{
                    salary:20
                }
            }
        })

        console.log(toRefs(person))     //是一个对象，里面是对象所有属性的ref对象

        return{
            person,
            /* name: toRef(person,'name'),     //取的是person中name的值，并且还是响应式的
            age: toRef(person,'age'),
            salary: toRef(person.job.code,'salary') */
            ...toRefs(person)
        }
    }
}
</script>

<style>

</style>
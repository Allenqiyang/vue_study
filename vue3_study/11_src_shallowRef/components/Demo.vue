<template>
    <h4>x is: {{x}}</h4>
    <button @click="x++">x+1</button>
    <h4>{{person}}</h4>
    <h3>Person name: {{name}}</h3>
    <h3>Person age: {{age}}</h3>
    <h3>Person salary: {{job.code.salary}}k</h3>
    <button @click="name+='!'">change name</button>
    <button @click="age++">change age</button>
    <button @click="job.code.salary++">change salary</button>
</template>

<script>
import {reactive,toRef,toRefs,shallowReactive,shallowRef} from 'vue'
export default {
    name: 'Demo',
    setup() {
        let person = shallowReactive({      //只考虑第一层数据的响应式
            name:"Allen",
            age:20,
            job:{
                code:{
                    salary:20
                }
            }
        })

        let x = shallowRef({    //如果是一个对象就不会去用reactive包装
            y:0
        })
        console.log(x)

        return{
            x,
            person,
            ...toRefs(person)
        }
    }
}
</script>

<style>

</style>
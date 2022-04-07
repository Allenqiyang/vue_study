<template>
    <h4>sum is: {{sum}}</h4>
    <button @click="sum++">sum+1</button>
    <h3>Person name: {{name}}</h3>
    <h3>Person age: {{age}}</h3>
    <h3>Person salary: {{job.code.salary}}k</h3>
    <button @click="name+='!'">change name</button>
    <button @click="age++">change age</button>
    <button @click="job.code.salary++">change salary</button>
</template>

<script>
import {ref,reactive, toRefs, readonly, shallowReadonly} from 'vue'
export default {
    name: 'Demo',
    setup() {
        let sum = ref(0)
        let person = reactive({
            name:"Allen",
            age:20,
            job:{
                code:{
                    salary:20
                }
            }
        })

        // person = readonly(person)    //直接不能改了
        person = shallowReadonly(person)    //对象里的第一层属性不能改

        return{
            sum,
            ...toRefs(person)
        }
    }
}
</script>

<style>

</style>
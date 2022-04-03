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
import {ref,watch,reactive} from 'vue'
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

        // 只监视ref定义的一个响应式数据
        /* watch(sum,(newValue,oldValue) => {
            console.log("sum is changed",newValue,oldValue)
        },{immediate: true}) */

        // 监视多个ref定义的响应式数据
        watch([sum,msg],(newValue,oldValue) => {
            console.log("sum or msg is changed",newValue,oldValue)
        },{immediate:true})

        /* 监视reactive定义的响应式数据
        此处无法正确获取oldValue   deep强制开启 */
        /* watch(person,(newValue,oldValue)=>{
            console.log('person is changed',newValue,oldValue)
        }) */

        // 监视reactive定义的响应式数据的某个属性     这里可以正确获取oldValue
        /* watch(()=>person.age,(newValue,oldValue)=>{
            console.log('name of person is changed',newValue,oldValue)
        }) */

        // 监视reactive定义的响应式数据的某些属性     这里也可以正确获取oldValue
        watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
            console.log('name of age is changed',newValue,oldValue)
        })

        // 特殊情况
        /* watch(()=>person.job,(newValue,oldValue)=>{
            console.log('job of person is changed',newValue,oldValue)
        },{deep:true}) */

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
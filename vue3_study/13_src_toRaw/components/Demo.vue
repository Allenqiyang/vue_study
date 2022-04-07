<template>
    <h4>sum is: {{sum}}</h4>
    <button @click="sum++">sum+1</button>
    <h3>Person name: {{name}}</h3>
    <h3>Person age: {{age}}</h3>
    <h3>Person salary: {{job.code.salary}}k</h3>
    <h3 v-show="person.car">Person car: {{person.car}}</h3>
    <button @click="name+='!'">change name</button>
    <button @click="age++">change age</button>
    <button @click="job.code.salary++">change salary</button>
    <button @click="showRawPerson">showRawPerson</button>
    <button @click="addCar">add car</button>
    <button @click="person.car.name+='!'">change car name</button>
    <button @click="changePrice">change car price</button>
</template>

<script>
import {ref,reactive, toRefs,toRaw,markRaw} from 'vue'
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
            },
        })

        function showRawPerson(){
            const p = toRaw(person)     //toRaw只能用在reactive定义的响应式对象上
            p.age++
            console.log(p)
        }

        function addCar(){
            let car = {name: "BenChi", price:40}
            //markRaw标记之后car永远都不是响应式数据
            person.car = markRaw(car)        //Proxy可以捕获属性的增加
        }

        function changePrice(){
            person.car.price++      //页面中操作那数据会变但是页面不会显示了
            console.log(person.car.price)
        }

        return{
            sum,
            person,
            ...toRefs(person),
            showRawPerson,
            addCar,
            changePrice
        }
    }
}
</script>

<style>

</style>
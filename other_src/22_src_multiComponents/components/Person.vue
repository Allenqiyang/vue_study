<template>
    <div id="container">
        <h4 style="color:skyblue">result of count is: {{sum}}</h4>
        <h1>Person</h1>
        <input v-model="name" type="text" placeholder="Please enter the name of the person">
        <button @click="addPerson">submit</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{person.name}}</li>
        </ul>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name: 'Person',
    data() {
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personList
        },
        sum(){
            return this.$store.state.sum
        }
    },
    methods:{
        addPerson(){
            const personObj = {id:nanoid(), name: this.name}
            this.$store.commit('addPerson',personObj)
            this.name=''
        }
    }
}
</script>

<style>
    #container {
        text-align: center;
    }
    li{
        margin: 0 auto;
        width:100px;
    }
</style>
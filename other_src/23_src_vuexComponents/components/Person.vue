<template>
    <div id="container">
        <h4 style="color:skyblue">result of count is: {{sum}}</h4>
        <h1>Person</h1>
        <input v-model="name" type="text" placeholder="Please enter the name of the person">
        <button @click="addPerson">submit</button>
        <button @click="addServer">add a server</button>
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
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        }
    },
    methods:{
        addPerson(){
            const personObj = {id:nanoid(), name: this.name}
            this.$store.commit('personAbout/addPerson',personObj)
            this.name=''
        },
        addServer(){
            this.$store.dispatch('personAbout/addServer')
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
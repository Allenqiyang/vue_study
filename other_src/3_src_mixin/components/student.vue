<template>
    <div class="student">
        <h2 @click="showName">student name:{{name}}</h2>
        <h2>age:{{age}}</h2>
    </div>
</template>

<script>
    import {mix} from '../mix'
    export default {
        name:'student',
        data(){
            return {
                name:"Tony",
                age:18
            }
        },
        mixins:[mix]
    }
</script>

<style>
    .student{
        padding: 10px;
        border:1px solid;
        border-radius: 10px;
    }
</style>
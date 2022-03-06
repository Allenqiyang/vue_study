<template>
    <div class="student">
        <h2>student name:{{studentName}}</h2>
        <h2>age:{{age}}</h2>    
    </div>
</template>

<script>
    export default {
        name:'student',
        data(){
            return {
                studentName: "Tony",
                age:15
            }
        },
    }
</script>

<style>
    .student{
        border:1px solid;
        border-radius: 10px;
    }
</style>
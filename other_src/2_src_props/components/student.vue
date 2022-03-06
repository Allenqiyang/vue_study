<template>
    <div class="student">
        <h1>{{msg}}</h1>
        <h2>student name:{{name}}</h2>
        <h2>gender:{{gender}}</h2>
        <h2>age:{{myAge}}</h2>
        <button @click="updateAge">Updata age</button> 
    </div>
</template>

<script>
    export default {
        name:'student',
        data(){
            return {
                msg: "I am a student of Luowai",
                myAge:this.age
                // 传进来的数据一般是不能改的，如果要改那就要搞个中间变量
            }
        },
        methods:{
            updateAge() {
                this.myAge++;
            }
        },
        props:['name','gender','age']    //简单接收
        
        /* props:{
            name:String,
            age:Number,
            gender:String,
        } */

        /* props:{
            name:{
                type:String,
                required:true   //name必须要传
            },
            age:{
                type:Number,
                default:20    //默认值
            },
            gender:{
                type:String,
                required:true
            }
        } */
    }
</script>

<style>
    .student{
        padding: 10px;
        border:1px solid;
        border-radius: 10px;
    }
</style>
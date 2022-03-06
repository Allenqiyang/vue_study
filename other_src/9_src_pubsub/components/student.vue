<template>
    <div class="demo">
        <h2>student name:{{name}}</h2>
        <h2>student age:{{age}}</h2>
        <button @click="sendStudentName">Send name</button>
    </div>
</template>

<script>
    // 这玩意引入进来是个对象
    import pubsub from "pubsub-js"
    export default {
        name:'student',
        data(){
            return {
                name:"Tony",
                age:18
            }
        },
        methods:{
            sendStudentName(){
                pubsub.publish('happy',this.name);
            }
        }
    }
</script>

<!--scoped指定作用域是当前文件，防止冲突-->
<style scoped>
    .demo{
        padding: 10px;
        border:1px solid;
        border-radius: 10px;
    }
</style>
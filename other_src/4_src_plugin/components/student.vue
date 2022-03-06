<template>
    <div class="demo">
        <h2>student name:{{name}}</h2>
        <h2>student age:{{age}}</h2>
        <input type="text" v-fbind:value="name">
        <!-- 这里可以直接使用v-fbind -->
    </div>
</template>

<script>
    export default {
        name:'student',
        data(){
            return {
                name:"Tony",
                age:18
            }
        },
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
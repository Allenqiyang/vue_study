<template>
    <div class="demo">
        <h2>school name:{{name}}</h2>
        <h2>school address:{{address}}</h2>
        <button @click="test">Hello</button>
    </div>
</template>

<script>
    export default {
        name:'school',
        data(){
            return {
                name:"Luowai",
                address:"Shenzhen"
            }
        },
        methods:{
            test(){
                this.hello();
            }
        }
    }
</script>

<style scoped>
    .demo{
        padding: 10px;
        border:1px solid;
        border-radius: 10px;
    }
</style>
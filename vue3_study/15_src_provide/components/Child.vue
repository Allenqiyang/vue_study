<template>
    <div class="child">
        <h3>我是Child组件(孙)</h3>
        <h4>{{person.name}}---{{person.age}}</h4>
    </div>
</template>

<script>
import { inject } from 'vue'
export default {
    name: 'Child',
    setup(){
        const person = inject('person')     //inject接收数据
        return {person}
    }
}
</script>

<style>
.child{
    background-color: skyblue;
    padding: 10px;
}
</style>
<template>
    <div class="child">
        <h3>我是Child组件</h3>
        {{sum}}
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Child',
    setup(){
        const sum = ref(0)
        // 使用了suspense，使用了异步引入就可以返回Promise对象
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(sum)
            },2000)
        })
    }
}
</script>

<style>
.child{
    background-color: skyblue;
    padding: 10px;
}
</style>
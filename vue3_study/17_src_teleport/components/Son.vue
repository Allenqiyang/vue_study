<template>
    <div class="son">
        <h3>我是Son组件(子)</h3>
        <Child></Child>
    </div>
</template>

<script>
import Child from './Child.vue'
export default {
    name: 'Son',
    components:{Child}
}
</script>

<style>
.son{
    background-color: orange;
    padding: 10px;
}
</style>
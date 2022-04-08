<template>
    <div class="child">
        <h3>我是Child组件(孙)</h3>
        <Dialog></Dialog>
    </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
    name: 'Child',
    components: {Dialog},
    setup(){
        
    }
}
</script>

<style>
.child{
    background-color: skyblue;
    padding: 10px;
}
</style>
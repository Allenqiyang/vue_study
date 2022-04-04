<template>
    <h3>The sum is: {{sum}}</h3>
    <button @click="sum++">click +1</button>
</template>

<script>
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
export default {
    name: 'Demo',
    setup() {
        console.log('--setup--')
        let sum = ref(0)
        // 组合式Api写生命周期
        onBeforeMount(() => {
            console.log('--onBeforeMount--')
        })
        onMounted(() => {
            console.log('--onMounted')
        })
        onBeforeUpdate(()=>{
            console.log('--onBeforeUpdate--')
        })
        onUpdated(()=>{
            console.log('--onUpdated--')
        })
        onBeforeUnmount(()=>{
            console.log('--onBeforeUnmount--')
        })
        onUnmounted(()=>{
            console.log('--onUnmounted--')
        })

        return{
            sum
        }
    },
    // 配置项形式写生命周期
    /* beforeCreate() {
        console.log('--beforeCreate--')
    },
    created() {
        console.log('--created--')
    },
    beforeMount(){
        console.log('--beforeMount--')
    },
    mounted() {
        console.log('--mounted--')
    },
    beforeUpdate(){
        console.log('--beforeUpdate--')
    },
    updated() {
        console.log('--updated--')
    },
    beforeUnmount(){
        console.log('--beforeUnmount--')
    },
    unmounted(){
        console.log('--unmounted--')
    } */
}
</script>

<style>

</style>
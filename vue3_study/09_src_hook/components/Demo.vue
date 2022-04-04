<template>
    <h3>The sum is: {{sum}}</h3>
    <button @click="sum++">click +1</button><hr>
    <h3>point position x: {{point.x}} y: {{point.y}}</h3>
</template>

<script>
import {ref} from 'vue'
import usePoint from '../hooks/usePoint'
export default {
    name: 'Demo',
    setup() {
        let sum = ref(0)
        let point = usePoint()
        return{
            sum,
            point
        }
    },
}
</script>

<style>

</style>
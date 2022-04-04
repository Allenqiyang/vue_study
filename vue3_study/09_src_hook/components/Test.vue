<template>
    <h3>I'm test component</h3>
    <h3>{{point.x}} {{point.y}}</h3>
</template>

<script>
import usePoint from '../hooks/usePoint'
export default {
    name:'Test',
    setup(){
        let point = usePoint()
        return {point}
    }
}
</script>

<style>

</style>
<template>
    <div>
        <!-- 要传数据直接在组件标签里写就行了 -->
        <student name="Allen" gender="male" :age="18"></student>
    </div>
</template>

<script>
import student from './components/student.vue'
export default {
    name:"App",
    components:{
        student:student
    },
}
</script>

<style>

</style>
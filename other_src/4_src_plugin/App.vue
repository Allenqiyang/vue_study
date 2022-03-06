<template>
    <div>
        <student></student>
        <school></school>
    </div>
</template>

<script>
import student from './components/student.vue'
import school from './components/school.vue'
export default {
    name:"App",
    components:{
        student:student,
        school:school
    },
}
</script>

<style>

</style>
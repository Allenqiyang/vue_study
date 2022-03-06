<template>
    <div>
        <school></school>
        <student></student>
    </div>
</template>

<script>
import school from 'school.vue'
import student from 'student.vue'
export default {
    name:"App",
    components:{
        school:school,
        student:student
    }
}
</script>

<style>

</style>
<template>
    <div>
        <h1>{{msg}}</h1>
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
    data(){
        return{
            msg:"Hello!"
        }
    }
}
</script>

<style>

</style>
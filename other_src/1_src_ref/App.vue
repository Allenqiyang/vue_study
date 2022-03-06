<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <school ref="sch"></school>
        <student></student>
        <button @click="showDOM" ref="btn">showDOM</button>
    </div>
</template>

<script>
import school from './components/school.vue'
import student from './components/student.vue'
export default {
    name:"App",
    components:{
        school:school,
        student:student
    },
    data(){
        return {msg:"Welcome to our school!"}
    },
    methods:{
        showDOM(){
            console.log(this.$refs);
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
        <student :getStudentName="getStudentName"></student>
        <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据 -->
        <school v-on:Happy="getSchoolName" @demo="m1"></school>
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
    methods:{
        getStudentName(name){
            console.log('App gets the name of student:',name);
        },
        getSchoolName(name){
            console.log('App gets the name of school:',name);
        },
        m1(){
            console.log('demo is trigger')
        }
    }
}
</script>

<style>

</style>
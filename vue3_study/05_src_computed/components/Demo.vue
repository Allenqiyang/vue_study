<template>
    姓: <input type="text" v-model="person.firstName">
    <br><br>
    名: <input type="text" v-model="person.lastName"><br>
    <span>姓名: {{person.fullName}}</span><br>

</template>

<script>
import {reactive,computed} from 'vue'
export default {
    name: 'Demo',
    setup() {
        let person = reactive({
            firstName: 'Tony',
            lastName: 'Stark'
        })
        //简写(没有考虑计算属性被修改)
        /* person.fullName = computed(() => {
            return person.firstName + '-' + person.lastName
        }) */

        person.fullName = computed({
            get(){
                return person.firstName + '-' + person.lastName
            },
            set(value){
                const nameArr = value.split('-')
                person.firstName = nameArr[0]
                person.lastName = nameArr[1]
            }
        })

        return{
            person
        }
    }
}
</script>

<style>

</style>
<template>
    <div class="demo">
        <h2>school name:{{name}}</h2>
        <h2>school address:{{address}}</h2>
        <button @click="sendSchoolName">send the name of school</button>
        <button @click="unbind">unbind</button>
    </div>
</template>

<script>
    export default {
        name:'school',
        data(){
            return {
                name:"Luowai",
                address:"Shenzhen"
            }
        },
        methods:{
            sendSchoolName(){
                //触发school组件实例身上的Happy事件
                this.$emit('Happy',this.name)
                this.$emit('demo')
            },
            unbind(){
                // this.$off("getSchoolName")  //只适用于解绑一个自定义事件
                // this.$off(["Happy","demo"])  //解绑多个自定义事件
                this.$off()     //解绑所有自定义事件
            },
        }
    }
</script>

<style scoped>
    .demo{
        padding: 10px;
        border:1px solid;
        border-radius: 10px;
    }
</style>
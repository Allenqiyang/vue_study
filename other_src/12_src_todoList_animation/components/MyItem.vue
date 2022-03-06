<template>
    <li>
        <label>
        <input type="checkbox" :checked="todo.completed" @change="change(todo.id)"/>
        <span v-show="!todo.edit">{{todo.title}}</span>
        <input 
            type="text" 
            v-show="todo.edit" 
            :value="todo.title" 
            @blur="handleBlur(todo,$event)" 
            ref='inputTitle'
        >
        </label>
        <button class="btn btn-danger" @click="getDelete(todo.id)">删除</button>
        <button class="btn btn-edit" v-show="!todo.edit" @click="getEdit(todo)">编辑</button>
    </li>
</template>

<script>
    export default {
        name:'MyItem',
        props: ['todo'],
        methods:{
            change(id){
                //一旦函数调用就去bus里触发changeTodo事件,并把id传过去
                this.$bus.$emit('changeTodo',id);
            },
            getDelete(id){
                if(confirm('Are you sure you want to delete?'))
                //一旦函数调用并且confirm为真就去bus里触发changeTodo事件,并把id传过去
                this.$bus.$emit('deleteTodo',id);
            },
            getEdit(todo){
                if(todo.hasOwnProperty('edit')){
                    todo.edit = true;
                }else{
                    console.log("@");
                    this.$set(todo,'edit',true);
                }
                this.$nextTick(function(){
                    this.$refs.inputTitle.focus();
                })
            },
            handleBlur(todo,event){
                todo.edit = false;
                this.$bus.$emit('updateTodo',todo.id,event.target.value);
            }
        },
    }
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover{
        background-color: #ddd;
    }

    li:hover button{
        display: block;
    }
</style>
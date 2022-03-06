<template>
<div id="root">
    <div class="todo-container">
        <div class="todo-wrap">
            <MyHeader :addTodo="addTodo"></MyHeader>
            <MyList :todos="todos" :changeTodo="changeTodo" :deleteTodo="deleteTodo"></MyList>
            <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></MyFooter>
        </div>
    </div>
</div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'

export default {
    name:"App",
    components:{
        MyHeader,
        MyList,
        MyFooter
    },
    data(){
        return{
            todos:JSON.parse(localStorage.getItem("todos")) || []
        }
    },
    methods:{
        //添加一个todo
        addTodo(todoObj){
            this.todos.unshift(todoObj);
        },
        //勾选or取消勾选
        changeTodo(id){
            //遍历对象数组,若id等于MyItem传来的id,则将completed值取反
            this.todos.forEach((todo)=>{
                if(todo.id===id)
                todo.completed = !todo.completed;
            })
        },
        //删除一个todo
        deleteTodo(id){
            this.todos = this.todos.filter(todo=>{
                return todo.id !== id;
            })
        },
        //全选或全不选
        checkAllTodo(state){
            this.todos.forEach(todo=>{
                todo.completed=state;
            })
        },
        //删除全部完成的todo
        clearAllTodo(){
            this.todos = this.todos.filter(todo=>{
                return !todo.completed;
            })
        }
    },
    watch:{
        todos:{
            deep:true,
            handler(value){
                localStorage.setItem('todos', JSON.stringify(value));
            }
        }
    }
}
</script>

<style>
    /*base*/
    body {
    background: #fff;
    }

    .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    }

    .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
    }

    .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
    }

    .btn:focus {
    outline: none;
    }

    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
</style>
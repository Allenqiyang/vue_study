<template>
<div id="root">
    <div class="todo-container">
        <div class="todo-wrap">
            <MyHeader @addTodo="addTodo"></MyHeader>
            <MyList :todos="todos"></MyList>
            <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>
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
        //更新todo内容
        updateTodo(id,title){
            this.todos.forEach((todo)=>{
                if(todo.id===id)
                todo.title = title;
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
    },
    mounted(){
        //当自定义事件changeTodo被触发时,调用changeTodo函数
        this.$bus.$on('changeTodo',this.changeTodo);
        //当自定义事件deleteTodo被触发时,调用deleteTodo函数
        this.$bus.$on('deleteTodo',this.deleteTodo);
        //当自定义事件updateTodo被触发时,调用updateTodo函数
        this.$bus.$on('updateTodo',this.updateTodo);
    },
    beforeDestroy(){
        this.$bus.$off('changeTodo');
        this.$bus.$off('deleteTodo');
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

    .btn-edit {
        color: #fff;
        background-color: rgb(68, 192, 241);
        border: 1px solid rgb(0, 174, 255);
        margin: 5px;
    }

    .btn-edit:hover {
        color: #fff;
        background-color: rgb(0, 174, 255);
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
<template>
    <div class="todo-footer" v-show="total">
        <label>
            <input type="checkbox" :checked="checkAll" @change="chooseAll"/>
        </label>
        <span>
            <span>已完成{{countCompleted}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'MyFooter',
        props:['todos'],
        computed:{
            total(){
                return this.todos.length;
            },
            countCompleted(){
                let i=0;
                this.todos.forEach(todo => {
                    if(todo.completed)  i++;
                })
                return i;
            },
            checkAll(){
                return this.countCompleted===this.total && this.total>0;
            }
        },
        methods:{
            chooseAll(event){
                this.$emit("checkAllTodo",event.target.checked);
            },
            clearAll(){
                if(confirm('Are you sure you want to delete?'))
                this.$emit("clearAllTodo");
            }
        }
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>
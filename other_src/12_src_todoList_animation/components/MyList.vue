<template>
    <ul class="todo-main">
        <transition-group appear name="todo">
            <MyItem 
                v-for="todoObj in todos" 
                :key="todoObj.id" 
                :todo="todoObj"
            ></MyItem>
        </transition-group>
    </ul>
</template>

<script>
    import MyItem from './MyItem'

    export default {
        name:'MyList',
        components:{MyItem},
        props:['todos']
    }
</script>

<style scoped>
    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }

    /* 动画实现 */
    .todo-enter-active{
        animation: happy 1s;
    }

    .todo-leave-active{
        animation: happy 1s reverse;
    }

    @keyframes happy{
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>
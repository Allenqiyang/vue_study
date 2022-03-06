<template>
    <div>
        <button @click="isShow=!isShow">show/hide</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">Hello!</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name:'Test',
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style>
    h1{
        background-color:skyblue;
    }
    /* 动画实现 */
    .hello-enter-active{
        animation: happy 1s;
    }

    .hello-leave-active{
        animation: happy 1s reverse;
    }

    @keyframes happy{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>
<template>
    <div>
        <button @click="isShow=!isShow">show/hide</button>
        <transition-group 
            appear
            name="animate__animated animated__bounce" 
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
        >
            <h1 v-show="!isShow" key="1">Hello!</h1>
            <h1 v-show="isShow" key="2">Allen</h1>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Test2',
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style>
    h1{
        background-color: aqua;
    }
    /* 过渡实现 */
    .hello-enter-active,.hello-leave-active{
        transition: 1s;
    }
    /* 进入的起点，离开的终点 */
    .hello-enter,.hello-leave-to{
        transform:translateX(-100%);
    }
    /* 进入的终点，离开的起点 */
    .hello-leave,.hello-enter-to{
        transform:translateX(0);
    }
</style>
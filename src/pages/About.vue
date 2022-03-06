<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:"About",
    //通过路由规则进入该组件时调用
    beforeRouteEnter (to, from, next) {
        if(to.meta.isAuth){     //判断是否需要鉴权
            if(localStorage.getItem('school')==='LuoWai'){
                next()
            }else{
                alert('School is not right! No authorized')
            }
        }else{
            next()
        }
    }
}
</script>

<style>

</style>
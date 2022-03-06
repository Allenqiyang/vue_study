<template>
    <div class="demo">
        <h2>school name:{{name}}</h2>
        <h2>school address:{{address}}</h2>
    </div>
</template>

<script>
    import pubsub from "pubsub-js"
    export default {
        name:'school',
        data(){
            return {
                name:"Luowai",
                address:"Shenzhen"
            }
        },
        mounted(){
            // 这玩意会接收到一个ID，可以用来取消订阅
            this.pubId = pubsub.subscribe('happy',function(msgName,data){
                console.log("happy!",data)
            })
        },
        beforeDestroy(){
            pubsub.unsubscribe(this.pubId)
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
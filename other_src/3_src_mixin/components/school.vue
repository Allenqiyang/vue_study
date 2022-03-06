<template>
    <div class="school">
        <h2 @click="showName">school name:{{name}}</h2>
        <h2>school address:{{address}}</h2>
    </div>
</template>

<script>
    import {mix} from "../mix"
    export default {
        name:'school',
        data(){
            return {
                name:"Luowai",
                address:"Shenzhen"
            }
        },
        mixins:[mix]
    }
</script>

<style>
    .school{
        padding: 10px;
        border:1px solid;
        border-radius: 10px;
    }
</style>
<template>
    <div class="school">
        <h2>school name:{{schoolName}}</h2>
        <h2>school address:{{address}}</h2>
        <button @click="show">Show the school name</button>    
    </div>
</template>

<script>
    export default {
        name:'school',
        data(){
            return {
                schoolName: "Luowai",
                address:"Shenzhen"
            }
        },
        methods: {
            show() {
                alert(this.schoolName);
            }
        }
    }
</script>

<style>
    .school{
        border:1px solid;
        border-radius: 10px;
    }
</style>
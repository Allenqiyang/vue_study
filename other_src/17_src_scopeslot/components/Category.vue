<template>
    <div class="category">
        <h3>{{title}}</h3>
        <slot :games="games" msg="hello">Default value, show when concrete structure is not transferred</slot>
    </div>
</template>

<script>
export default {
    name:"Category",
    props:['title','data'],
    data(){
        return {
            games:['PUBG','CSGO','BATTLE FIELD','The Horizon']
        }
    }
}
</script>

<style>
    h3{
        text-align: center;
        background-color:aquamarine;
    }
    .category{
        background-color: skyblue;
        width:300px;
        height:310px;
    }
</style>
<template>
    <div class="category">
        <h3>{{title}}</h3>
        <slot name="center">Default value, show when concrete structure is not transferred</slot>
        <slot name="footer"> Default value, show when concrete structure is not transferred</slot>
    </div>
</template>

<script>
export default {
    name:"Category",
    props:['title','data']
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
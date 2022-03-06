<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
      />&nbsp;<button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios"
export default {
    name:"Search",
    data(){
        return{
            keyWord: ""
        }
    },
    methods:{
        searchUser(){
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    console.log('request success',response.data);
                },
                error => {
                    console.log('request failed',error);
                }
            )
        }
    }
};
</script>

<style>
</style>
<template>
<div class="app">
  <h3>我是祖先组件</h3>
  <Son></Son>
</div>
</template>

<script>
import Son from './components/Son.vue'
export default {
  name: 'App',
  components:{Son},
}
</script>

<style>
.app{
  background-color:grey;
  padding: 10px;
}
</style>
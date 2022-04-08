<template>
<div class="app">
  <h3>我是祖先组件</h3>
  <Suspense>
    <template v-slot:default>
      <Child></Child>
    </template>
    <template v-slot:fallback>
      <h4>loading... Please wait...</h4>
    </template>
  </Suspense>
</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
// import Child from './components/Child.vue'    //静态引入
const Child = defineAsyncComponent(()=>import('./components/Child.vue'))    //异步引入
export default {
  name: 'App',
  components:{Child},
}
</script>

<style>
.app{
  background-color:grey;
  padding: 10px;
}
</style>
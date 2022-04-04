<template>
  <button @click="isShow=!isShow">Show/Hide</button>
  <Demo v-if="isShow"></Demo><hr>
  <Test></Test>
</template>

<script>
import {ref} from 'vue'
import Demo from './components/Demo.vue'
import Test from './components/Test.vue'
export default {
  name: 'App',
  components: {Demo,Test},
  setup(){
    let isShow = ref(true)
    return {isShow}
  }
}
</script>

<style>

</style>

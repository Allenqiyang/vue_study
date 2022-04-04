<template>
  <button @click="isShow=!isShow">Show/Hide</button>
  <Demo v-if="isShow"></Demo>
</template>

<script>
import {ref} from 'vue'
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components: {Demo},
  setup(){
    let isShow = ref(true)
    return {isShow}
  }
}
</script>

<style>

</style>

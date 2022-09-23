<template>
  <Home/>
  <h3>App: {{$store.state.counter}}</h3>
  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<script>
import Home from './pages/Home.vue'
export default {
  name: "App",
  components: {
    Home
  },
  methods: {
    increase() {
      this.$store.commit("increment")
    },
    decrease() {
      this.$store.commit("decrement")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

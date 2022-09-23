<template>
  <h3>Home: {{$store.state.counter}}</h3>
  <button @click="increment">+1</button>
</template>

<script>
export default {
  name: "Home",
  methods: {
    increment() {
      this.$store.dispatch("incrementAction")
    }
  },
  mounted() {
    this.$store.dispatch("getBanner")
  }
}
</script>

<style>

</style>
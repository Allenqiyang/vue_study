<template>
  <h3>Home: {{$store.state.counter}}</h3>
  <button @click="$store.commit('increment')">+1</button>
  <button @click="$store.commit('decrement')">-1</button>
  <button @click="addNum(10)">+10</button>
  <button @click="addNum(100)">+100</button>
</template>

<script>
export default {
  name: "Home",
  methods: {
    addNum(n) {
      this.$store.commit("incrementN", {num: n, name: "Allen", age: 18})
      
      // 另一种提交风格
      // this.$store.commit({
      //   type: "incrementN",
      //   num: n,
      //   name: "Allen",
      //   age: 18
      // })
    }
  }
}
</script>

<style>

</style>
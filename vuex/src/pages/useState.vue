<template>
  <h2>Home: {{$store.state.counter}}</h2>
  <h3>Home: {{counter}}</h3>
  <h3>Home: {{name}}</h3>
  <h3>Home: {{age}}</h3>
</template>

<script>
import useState from "../hooks/useState"

export default {
  name: "Home",
  setup() {
    const storeState = useState(["counter", "name", "age"])
    // 写成对象也是可以的,因为都是直接放到mapState中
    // const storeState2 = useState({
    //   counter: state => state.counter,
    //   name: state => state.name
    // })
    return {
      ...storeState
    }
  }
}
</script>

<style>

</style>
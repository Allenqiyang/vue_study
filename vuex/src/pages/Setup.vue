<template>
  <h2>Home: {{$store.state.counter}}</h2>
  <h3>Home: {{sCounter}}</h3>
  <h3>Home: {{counter}}</h3>
  <h3>Home: {{name}}</h3>
  <h3>Home: {{age}}</h3>
</template>

<script>
import {computed} from "vue"
import {mapState, useStore} from "vuex"
export default {
  name: "Home",
  setup() {
    const store = useStore()
    const sCounter = computed(() => store.state.counter)    // 可以这样一个个拿

    const storeStateFns = mapState(["counter", "name", "age"])
    const storeState = {}
    
    for(const key in storeStateFns) {
      const fn = storeStateFns[key].bind({$store: store})
      storeState[key] = computed(fn)
    }

    return {
      sCounter,
      ...storeState
    }
  }
}
</script>

<style>

</style>
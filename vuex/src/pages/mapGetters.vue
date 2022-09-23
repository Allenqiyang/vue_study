<template>
  <h3>Home: {{$store.getters.totalPrice}}</h3>
  <h3>Home: {{$store.getters.totalPriceN(2)}}</h3>
  <h3>{{nameInfo}}</h3>
  <h3>{{ageInfo}}</h3>
  <h3>{{nameInfo2}}</h3>
  <h3>{{ageInfo2}}</h3>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "Home",
  computed: {
    // 数组写法
    ...mapGetters(["nameInfo", "ageInfo"]),
    // 对象写法
    ...mapGetters({
      nameInfo2: "nameInfo",
      ageInfo2: "ageInfo"
    })
  }
}
</script>

<style>

</style>
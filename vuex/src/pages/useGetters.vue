<template>
  <h3>{{nameInfo2}}</h3>
  <h3>{{nameInfo}}</h3>
  <h3>{{ageInfo}}</h3>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import useGetters from "../hooks/useGetter"

export default {
  setup() {
    const store = useStore()
    const nameInfo2 = computed(() => store.getters.nameInfo)

    const storeGetters = useGetters(["nameInfo", "ageInfo"])

    return {
      nameInfo2,
      ...storeGetters
    }
  }
}
</script>

<style>

</style>
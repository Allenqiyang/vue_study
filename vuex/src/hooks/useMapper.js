import { computed } from "vue"
import { useStore } from "vuex"

export default function useMapper(mapper, mapFn) {
  const store = useStore()
  const storeMapperFns = mapFn(mapper)
  const storeMapper = {}

  for (const key in storeMapperFns) {
    const fn = storeMapperFns[key].bind({ $store: store })
    storeMapper[key] = computed(fn)
  }
  
  return storeMapper
}
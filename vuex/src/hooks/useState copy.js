import {computed} from "vue"
import {mapState, useStore} from "vuex"

export default function useState(mapper) {
  const store = useStore()
  const storeStateFns = mapState(mapper)
  const storeState = {}

  for (const key in storeStateFns) {
    const fn = storeStateFns[key].bind({ $store: store })
    storeState[key] = computed(fn)
  }
  
  return storeState
}

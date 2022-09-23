import {mapState} from "vuex"
import useMapper from "./useMapper"

export default function useState(mapper) {
  return useMapper(mapper, mapState)
}

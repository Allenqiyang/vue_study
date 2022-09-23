import {mapGetters} from "vuex"
import useMapper from "./useMapper"

export default function useGetters(mapper) {
  return useMapper(mapper, mapGetters)
}

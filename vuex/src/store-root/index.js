import { createStore } from "vuex"
import axios from "axios"

const store = createStore({
  state() {
    return {
      counter: 10,
      name: "Allen",
      age: 18,
      books: [
        {name: "Vue", price: 100, quantity: 3},
        {name: "React", price: 200, quantity: 2},
        {name: "Node", price: 150, quantity: 1},
        {name: "Webpack", price: 180, quantity: 4}
      ],
      discount: 0.7,
      banner: []
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementN(state, payload) {
      state.counter += payload.num
    },
    addBanner(state, payload) {
      state.banner = payload
    }
  },
  getters: {
    totalPrice(state, getters) {
      let totalPrice = 0
      for(let book of state.books) {
        totalPrice += book.price * book.quantity
      }
      return totalPrice * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.9     // 折上折
    },
    totalPriceN(state, getters) {
      return function(n) {
        let totalPrice = 0
        for(let book of state.books) {
          if(book.quantity > n) {
            totalPrice += book.price * book.quantity
          }
        }
        return totalPrice * getters.currentDiscount
      }
    },
    nameInfo(state) {
      return `name: ${state.name}`
    },
    ageInfo(state) {
      return `age: ${state.age}`
    }
  },
  actions: {
    incrementAction(context) {
      setTimeout(() => {
        context.commit("increment")
      }, 1000)
    },
    getBanner(context) {
      axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
        context.commit("addBanner", res.data.data.banner.list)
      })
    }
  }
})

export default store
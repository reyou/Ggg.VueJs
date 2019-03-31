import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const moduleA = {
  namespaced: true,
  state: {
    count: 3
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  },
  actions: {
    incrementIfOdd({ state, commit }) {
      if (state.count % 2 === 1) {
        commit("increment");
      }
    }
  }
};

const moduleB = {
  state: {
    count: 8
  },
  mutations: {},
  getters: {},
  actions: {}
};

const store = new Vuex.Store({
  state: {
    count: 2
  },
  modules: {
    a: moduleA,
    b: moduleB
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {},
  actions: {}
});

new Vue({
  el: "#app",
  store,
  data: {},
  computed: {}
});

console.log(store.state.a.count);
// console.log(store.state.b.count);
store.commit("a/increment");
store.commit("increment");
console.log(store.state.a.count);
console.log(store.state.count);

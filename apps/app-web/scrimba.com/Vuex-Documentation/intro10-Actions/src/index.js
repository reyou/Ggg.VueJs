import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    someMutation: "initial data",
    otherMutation: "initial data"
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    someMutation(state) {
      state.someMutation = "someMutation called.";
    },
    someOtherMutation(state) {
      state.otherMutation = "someOtherMutation called.";
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    actionA({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("someMutation");
          resolve();
        }, 1000);
      });
    },
    actionB({ dispatch, commit }) {
      return dispatch("actionA").then(() => {
        commit("someOtherMutation");
      });
    },
    async actionC({ commit }) {
      commit("gotData", await getData());
    },
    async actionD({ dispatch, commit }) {
      await dispatch("actionC");
      commit("gotOtherData", await getOtherData());
    }
  }
});

import { mapState, mapMutations } from "vuex";

new Vue({
  el: "#app",
  store,
  data: {},
  computed: mapState(["count", "someMutation", "otherMutation"]),
  methods: {
    increment() {
      this.$store.dispatch("incrementAsync");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    testAction() {
      this.$store.dispatch("actionA").then(() => {
        alert("Test Action Completed!");
      });
    }
  }
});

// Following is a valid call
// dispatch({
//   type: 'incrementAsync',
//   payload: payload
// })

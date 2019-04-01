import Vue from "vue";
import Vuex from "vuex";
import $ from "jquery";
Vue.use(Vuex);

const myPlugin = store => {
  // Called when store is initialized
  store.subscribe((mutation, state) => {
    // Called after every mutation
    // Mutation comes in the format `{ type, payload }`
    $("#debug").append(
      `store.subscribe has been called. mutation: ${JSON.stringify(
        mutation
      )} state: ${JSON.stringify(state)} <br />`
    );
  });
};

const store = new Vuex.Store({
  //...
  plugins: [myPlugin],
  state: {
    message: "Hello Vuex"
  },
  mutations: {
    updateMessage(state, message) {
      state.message = message;
    }
  }
});

new Vue({
  el: "#app",
  store,
  data: {},
  computed: {
    message: {
      get() {
        return this.$store.state.message;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      }
    }
  }
});

<template>
    <div class="test">
        <input type="text" v-model="title"> <br/>
        <h1>{{title}}</h1>
        <span v-html="titleHtml"></span>
        <p>{{user.first_name}}</p>
        <p v-text="user.first_name"></p>
        <p>Show Name if true:</p>
        <p v-if="showName">{{user.first_name}}</p>
        <p v-else>{{user.last_name}}</p>
        <p>
            <ul>
                <li v-for="item in items" :key="item.id">{{item.title}}</li>
            </ul>
            <button v-on:click="greet('Custom Parameter!')">Say Greeting</button>
            <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
        </p>
        <hr>
        <label>First Name:</label>
        <input type="text" v-model="user.first_name">
        <br>
         <label>Last Name:</label>
        <input type="text" v-model="user.last_name">
        <h3>{{fullName}}</h3>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
export default {
  name: "test",
  props: {
    msg: {
      type: String,
      default: "Foobar"
    }
  },
  data() {
    return {
      title: "Title!",
      titleHtml: "<h1>Title HTML!</h1>",
      user: {
        first_name: "John",
        last_name: "Doe"
      },
      showName: true,
      items: [
        { id: 1, title: "Item 1" },
        { id: 2, title: "Item 2" },
        { id: 3, title: "Item 3" }
      ]
    };
  },
  methods: {
    greet: function(greetingMessage) {
      alert("Hello! " + greetingMessage);
    },
    pressKey: function(e) {
      alert(e.target.value);
    },
    enterHit: function(e) {
      alert("You hit enter!");
    }
  },
  computed: {
    fullName: function() {
      return this.user.first_name + " " + this.user.last_name;
    }
  }
};
</script>

<style scoped>
</style>

<template>
  <!-- body container 
  https://getbootstrap.com/docs/4.0/layout/overview/
  https://getbootstrap.com/docs/4.0/layout/grid/-->
  <div class="container-fluid">
    <div class="row">
      <!-- left container 
      https://getbootstrap.com/docs/4.0/utilities/display/-->
      <div class="col-2 d-none d-sm-block" style>
        <!-- vertical navbar 
        https://getbootstrap.com/docs/4.0/components/navs/-->
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
      <!-- right container -->
      <div class="col" style>
        <h4 class="bg-primary text-white text-center p-2">Adam's To Do List</h4>
        <!-- grid -->
        <div class="container-fluid p-4">
          <!-- headers -->
          <div class="row">
            <div class="col font-weight-bold">Task</div>
            <div class="col-2 font-weight-bold">Done</div>
          </div>
          <!-- rows -->
          <div class="row" v-for="t in tasks" v-bind:key="t.action">
            <div class="col">{{t.action}}</div>
            <div class="col-2">{{t.done}}</div>
          </div>
        </div>
        <!-- table  -->
        <h1>Table View</h1>
        <table class="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th>Task</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="t in tasks" v-bind:key="t.action">
              <td>{{t.action}}</td>
              <td>{{t.done}}</td>
            </tr>
          </tbody>
        </table>
        <div class="form-group m-2">
          <label>New Item:</label>
          <input v-model="newItemText" class="form-control">
        </div>
        <div class="text-center">
          <button class="btn btn-primary" v-on:click="addNewTodo">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      tasks: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false }
      ],
      newItemText: ""
    };
  },
  methods: {
    addNewTodo() {
      this.tasks.push({
        action: this.newItemText,
        done: false
      });
    }
  }
};
</script>
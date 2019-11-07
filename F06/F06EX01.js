const vm = new Vue({
  el: "#intro",
  data: {
    id: 0,
    type: "personal",
    name: "",
    tasks: [],
    filter: "all" 
  },

  created() {
    //buscar viagens da local storage
    if (localStorage.getItem("tasks")) {
      this.tasks = JSON.parse(localStorage.getItem("tasks"));
    }
  },
  destroyed() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },

  methods: {
    getLastId() {
      if (this.tasks.length) return this.tasks[this.tasks.length - 1].id;
      else return 0;
    },

    addTask() {
      if (this.name != "") {
        this.tasks.push({
          id: this.getLastId() + 1,
          type: this.type,
          name: this.name
        });
      } else {
        alert("introduza uma tarefa");
      }
    },

     removeTask(id){
       this.tasks = this.tasks.filter( 
         (task) => task.id !== id
       );
     },

    saveStorage() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter(
        (task) => task.type === this.filter || this.filter == "all" 
      )
    }
  }
})



window.onunload = function() {
  vm.$destroy();
};

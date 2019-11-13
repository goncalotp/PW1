







const vm = new Vue({
  el: "#app",
  data: {
    series: [],
    form: {
      id: "",
      name: "",
      seasons: "",
      episodes: "",
      url:"",
      editId: "",
      editName: "",
      filterName: "",
      filterSeason: ""
    }
  },

  created() {
    if (localStorage.getItem("series")) {
      this.series = JSON.parse(localStorage.getItem("series"));
    }
  },
  destroyed() {
    localStorage.setItem("series", JSON.stringify(this.series));
  },

  methods: {
    //getlastid
    getLastId() {
      if (this.series.length) return this.series[this.series.length - 1].id;
      else return 0;
    },
    //add

    addSeries() {
      console.log("entao");
      document.getElementById("addSeriesDialog").showModal();
    },

    addSeriesModal() {
      if (this.form.series !== "") {
        this.series.push({
          id: this.getLastId() + 1,
          name: this.form.name,
          seasons: this.form.seasons,
          episodes: this.form.episodes,
          url: this.form.url
          
        });
       
       
      } else {
        alert("preenche os campos");
      }

      
    },

   

    

    //edit
    editSeries(id) {
      document.getElementById("editSeriesDialog").showModal();

      const serie = this.series.filter(serie => serie.id === id)[0];
      this.form.editId = serie.id;
      this.form.editName = serie.name;
    },

    //update
    updateSeries() {
      this.series.map(serie => {
        if (serie.id === this.form.editId) {
          serie.name = this.form.editName;
        }
      });
      document.getElementById("editSeriesDialog").close();
    },

    //remove
    removeSeries(id) {
      this.series = this.series.filter(serie => serie.id !== id);
    },

    compareName(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      else return 0;
    },

    orderByName() {
      this.series.sort(this.compareName);
    },


    compareSeason(a, b) {
      if (a.season < b.season) return -1;
      if (a.season > b.season) return 1;
      else return 0;
    },

    orderBySeason() {
      this.series.sort(this.compareSeason);
    },

    saveStorage() {
      localStorage.setItem("series", JSON.stringify(this.series));
    }
  },

  computed: {
    //filtros
    filteredSeries() {
      return this.series.filter(serie => {
        let filterNameResult = true;
        let filterSeasonResult = true;
       
        if (this.form.filterName !== "") {
          filterNameResult = serie.name === this.form.filterName;
        }

        if (this.form.filterSeason !== "") {
          filterSeasonResult = serie.seasons === this.form.filterSeason;
        }
        
        return filterNameResult && filterSeasonResult
      });
    }
  }
});


// Vue.component("img-card", {
//   props: ["img"],
//   template: `
  
//           <div class="card"   style="width: 18rem;" >
//                   <img  :src="img.url" class="card-img-top" >        
//           </div>

// `
// }),

window.onunload = function() {
  vm.$destroy();
};

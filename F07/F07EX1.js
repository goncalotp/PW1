const vm = new Vue({
  el: "#app",
  data: {
    id: 0,
    continent: "all",
    country: "",
    cities: "",
    desc: "",
    startDate: "",
    endDate: "",
    type: "all",
    link: "",
    travels: [],
    startDate: "",
    endDate: "",
    filterContinent: "",
    filterStartDate: "",
    filterEndDate: "",
    filterType: ""
    
    
  },
  created() {
    //buscar viagens da local storage
    if (localStorage.getItem("travels")) {
      this.travels = JSON.parse(localStorage.getItem("travels"));
    }
  },
  destroyed() {
    localStorage.setItem("travels", JSON.stringify(this.travels));
  },

  methods: {
    //ultimo id
    getLastId() {
      if (this.travels.length) return this.travels[this.travels.length - 1].id;
      else return 0; q 
    },
    addTravel() {
    if(this.country != "" ){
      this.travels.push({
        id: this.getLastId() + 1,
        continent: this.continent,
        country: this.country,
        cities: this.cities,
        desc: this.desc,
        startDate: new Date( this.startDate),
        endDate: new Date(this.endDate),
        type: this.type,
        link: this.link
      })
    }
    else (
        alert("PREENCHA O CAMPO PAIS")
    )
    },
    removeTravel(id) {
      this.travels = this.travels.filter( 
        (travel) => travel.id !== id
      );
      
    },

    editTravel(id) {
        const index = this.travels.findIndex(
            (travel) => travel.id === id
        )
        this.travels[index].country = prompt("mudar nome pais?")
    },

    compareCountry(a, b) {
        if(a.country < b.country) return -1 
        if(a.country > b.country) return 1
        else return 0 
    },
    orderByCountry() {
        this.travels.sort(this.compareCountry)
    },
    compareDate(a,b) {
        if(a.startDate < b.startDate) return -1
        if(a.startDate > b.startDate) return 1 
        else return 0 
    
    },

    orderByDate() {
        this.travels.sort(this.compareDate)
    },

    saveStorage(){
        localStorage.setItem("travels", JSON.stringify(this.travels))
    }
  },

  
computed: {
    // Returns a new array of travels based on the user's filter
    filteredTravels() {
        return this.travels.filter(
            (travel) => {
                let filterContinentResult = true
                let filterDatesResult = true
                let filterTypeResult = true
                

                if(this.filterType !== ""){
                    filterTypeResult =  (travel.type === this.filterType) || (this.filterType == "all")
                }

                // Filter continent
                if(this.filterContinent!=="") {
                    filterContinentResult =  (travel.continent === this.filterContinent) || (this.filterContinent == "all")     
                } 

                // Filter dates                    
                if(this.filterStartDate!=="" && this.filterEndDate!=="") {
                    filterDatesResult = 
                        travel.startDate >= new Date(this.filterStartDate) && 
                        travel.startDate <= new Date(this.filterEndDate)
                }
                
                
                 
                // return the conjunction of the two filters
                return filterContinentResult && filterDatesResult && filterTypeResult

                

            }

        )

        
    }
}
})

window.onunload = function() {
  vm.$destroy();
};


        
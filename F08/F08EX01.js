const vm = new Vue({
  el: "#app",
  data: {
    castles: [],
    form: {
     
      name: "",
      link: "",
      editName: "",
      editLink: "",
      editId:"",
      filterName: ""
    }
  },
  created() {
      this.castle = ({
        id: 1, 
        name: "Castelo de Bragança",
        link: "https://upload.wikimedia.org/wikipedia/commons/1/15/Castelo_de_Bragan%C3%A7a.jpg",
        year: 1000
      },
      {
        id: 2, 
        name: "Castelo de Almourol",
        link: "https://static.natgeo.pt/files/Castelo%20Almourol.jpg",
        year: 1000
      },
      {
        id: 3, 
        name: "Castelo de Marvão",
        link: "https://www.visitevora.net/wp-content/uploads/2016/05/castelo-marvao-660x330.jpg",
        year: 1000
      },
      {
        id: 4, 
        name: "Castelo de Montalegre",
        link: "https://www.publituris.pt/wp-content/uploads/2018/08/castelo-de-montalegre.jpg",
        year: 1000
      },
      {
        id: 5, 
        name: "Castelo de Sortelho",
        link: "https://upload.wikimedia.org/wikipedia/commons/a/a7/SortelhaCastle.jpg",
        year: 1000
      },
      {
        id: 6, 
        name: "Castelo de Arraiolos",
        link: "https://portugalpatrimonio.files.wordpress.com/2016/01/post-02-02-16-01.jpg",
        year: 1000
      },
      {
        id: 7, 
        name: "Castelo de Santa Maria da Feira",
        link: "https://www.culturanorte.pt/fotos/galerias/feira_2_104090068154edf7de7e825.jpg",
        year: 1000
      }
      )
  },
  methods: {
    getLastId() {
        if (this.castles.length) return this.castles[this.castles.length - 1].id;
        else return 0; 
      },

      addCastle() {
          this.castles.push({
              id: this.getLastId() + 1,
              name: this.form.name,
              link: this.form.link
          })
          console.log("ola")
      },

      editCastle(id) {
          document.getElementById("editCastleDialog").showModal()

          const castle = this.castles.filter(castle => castle.id === id) [0]
          this.form.editId = castle.id
          this.form.editName = castle.name
          this.form.editLink = castle.link
      },

      updateCastle() {
          this.castles.map(
              (castle) => {
                  if (castle.id === this.form.editId) {
                      castle.name = this.form.editName 
                      castle.link = this.form.editLink
                  }
              }
          )
          document.getElementById("editCastleDialog").close()
      },

      removeCastle(id) {
          this.castles = this.castles.filter(
              (castle) => castle.id !== id
          )
      }






  },
  computed: {
      filteredCastles() {
          return this.castles.filter( 
              (castle) => {
                  let filterCastleResult = true
                  if( this.form.filterName !== "") {
                      filterCastleResult = castle.name.includes(this.form.filterName)
                  }
                  return filterCastleResult
              }
          )
      }
  }
});

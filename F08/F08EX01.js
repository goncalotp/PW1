const vm = new Vue({
  el: "#app",
  data: {
    castles: [],
    form: {
      name: "",
      link: "",
      year: "",
      editName: "",
      editLink: "",
      editYear: "",
      editId: "",
      filterName: ""
    }
  },
  created() {
    this.castles =
      ({
        id: 1,
        name: "Castelo de Bragança",
        link:
          "https://upload.wikimedia.org/wikipedia/commons/1/15/Castelo_de_Bragan%C3%A7a.jpg",
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
        link:
          "https://www.visitevora.net/wp-content/uploads/2016/05/castelo-marvao-660x330.jpg",
        year: 1000
      },
      {
        id: 4,
        name: "Castelo de Montalegre",
        link:
          "https://www.publituris.pt/wp-content/uploads/2018/08/castelo-de-montalegre.jpg",
        year: 1000
      },
      {
        id: 5,
        name: "Castelo de Sortelho",
        link:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/SortelhaCastle.jpg",
        year: 1000
      },
      {
        id: 6,
        name: "Castelo de Arraiolos",
        link:
          "https://portugalpatrimonio.files.wordpress.com/2016/01/post-02-02-16-01.jpg",
        year: 1000
      },
      {
        id: 7,
        name: "Castelo de Santa Maria da Feira",
        link:
          "https://www.culturanorte.pt/fotos/galerias/feira_2_104090068154edf7de7e825.jpg",
        year: 1000
      });
    //buscar viagens da local storage
    if (localStorage.getItem("castles")) {
      this.castles = JSON.parse(localStorage.getItem("castles"));
    }
  },
  destroyed() {
    localStorage.setItem("castles", JSON.stringify(this.castles));
  },

  methods: {
    getLastId() {
      if (this.castles.length) return this.castles[this.castles.length - 1].id;
      else return 0;
    },

    addCastle() {
      if (this.form.name !== "") {
        this.castles.push({
          id: this.getLastId() + 1,
          name: this.form.name,
          link: this.form.link,
          year: this.form.year
        });
        console.log("heya");
      } else {
        alert("preenche os campos");
      }
    },

    editCastle(id) {
      document.getElementById("editCastleDialog").showModal();

      const castle = this.castles.filter(castle => castle.id === id)[0];
      this.form.editId = castle.id;
      this.form.editYear = castle.year;
      this.form.editName = castle.name;
      this.form.editLink = castle.link;
    },

    updateCastle() {
      this.castles.map(castle => {
        if (castle.id === this.form.editId) {
          castle.name = this.form.editName;
          castle.link = this.form.editLink;
          castle.year = this.form.editYear;
        }
      });
      document.getElementById("editCastleDialog").close();
    },

    removeCastle(id) {
      if (confirm("Tem a certeza que quer remover o castelo?")) {
        this.castles = this.castles.filter(castle => castle.id !== id);
      }
    },

    compareCastle(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      else return 0;
    },

    orderByCastle() {
      this.castles.sort(this.compareCastle);
    },

    click() {
      alert("CERTO");
    },

    manipulateArray(op) {
      switch (op) {
        case "ei":
          //remove a palavra castelo do nome
          const str = "Castelo";
          this.castles = this.castles.map(castle => {
            castle.name = castle.name.replace(str, "");
            return castle;
          });
          break;
        case "eii":
          //calcular media de ano
          const averageDate =
            this.castles.reduce((sum, cur) => sum + cur.year, 0) /
            this.castles.length;
          alert(`averagge date creation; ${averageDate}`);
          break;
        case "eiii":
          //procurar castelos chamados Castelo do Marvão
          const existMarvaoCastle = this.castles.some(castle =>
            castle.name.includes("Marvão")
          );
          alert(`Existe algum Castelo do Marvão? ${existMarvaoCastle}`);
          break;
        case "eiv":
          //listar castelos começados por A
          const letter = "A";
          console.log(
            this.castles.filter(castle => castle.name.startsWith(letter))
          );
          break;
        case "evii":
          //retorna se existir o castelo em questão
          const name = "Castelo de Santa Maria da Feira";
          console.log(this.castles.find(castle => castle.name === name));
          break;
        case "eviii": 
        // retorna posiçao do castelo de arraiolos
          const newName = "Castelo de Arraiolos";
          console.log(
            this.castles.findIndex(castle => castle.name === newName)
          );
          break;
        case "fi":
          //insere um hifen entre os castelos
          const separator = "-";
          console.log(this.castles.map(castle => castle.name).join(separator));
          break;
        case "fii":
          //retorna os castelos construidos depois de 1950
          const modernCastlesYear = 1950;
          console.log(
            this.castles.filter(castle => {
              if (castle.year > modernCastlesYear) {
                return castle.name;
              }
            })
          );
          break;
        case "fiii":
          //limpa o campo do link aos castelos que foram construidos antes de 1900
          const resetLinksYear = 1900;
          console.log(
            this.castles.map(castle => {
              if (castle.year < resetLinksYear) {
                castle.link = "";
              }
              return castle;
            })
          );
          break;
        case "fiv":
          const incrementsYear = 5;
          //insere 5 anos a todos os castelos começados com vogais
            console.log(this.castles.map(
              (castle) => {
              if (
                castle.name.toLowerCase().startWith("a") 
                // ||
                // castle.name.toLowerCase().startWith("e") ||
                // castle.name.toLowerCase().startWith("i") ||
                // castle.name.toLowerCase().startWith("o") ||
                // castle.name.toLowerCase().startWIth("u")
              ) {
                castle.year += incrementsYear;
              }
              return castle;
            })
            )

          break;
        default:
          break;
      }
    }
  },

  computed: {
    filteredCastles() {
      return this.castles.filter(castle => {
        let filterCastleResult = true;
        if (this.form.filterName !== "") {
          filterCastleResult = castle.name === this.form.filterName;
        }
        return filterCastleResult;
      });
    }
  }
});

window.onunload = function() {
  vm.$destroy();
};

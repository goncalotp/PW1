Vue.component("game-soccer-card", {
    props: ["game"],
    template: `
    
            <div class="card"   style="width: 18rem;" >
                    <img  :src="game.stadiumLink" class="card-img-top" >
                    <div class="card-body" >
                        <h2 class="card-title"> {{game.stadiumName}} </h2>
                        <h6 class="card-text"> 
                        {{getResult(game)}} 
                        </h6>
                  <p class="card-text" v-for="goal in game.goals">
                        {{goal.minute}}'{{goal.playerName}}
                 </p>
   
            </div>
            </div>

 
 `
,
 methods: {

    
     getResult(game) {
        //contabilizar os golos da primeira equipa
        let goals1 = game.goals.filter(
            goal => (game.teamName1 === goal.playerTeam)
        ).length

        //contabilizar os golos da segunda equipa
        let goals2 = game.goals.filter(
            goal => (game.teamName2 === goal.playerTeam)
        ).length

        return ` ${game.teamName1}  ${goals1} -  ${goals2} ${game.teamName2}`
          
     }
 }
})

const vm = new Vue({
    el: "#app",
    data: {
        games: [],
        filterRegion: "todos",
        filterStadium: "",
        filterTeam: ""
    
    },
    
    created: function () {

        
        this.games = [
            {
                id: 1,
                date: "12-12-2019",
                stadiumName: "Estádio da Luz",
                region: "sul",
                stadiumLink: "https://cdn1.newsplex.pt/media/2019/2/12/679305.jpg?type=artigo",
                teamName1: "Benfica",
                teamName2: "Sporting",
                goals: [
                    {
                        playerName: "Seferovic", minute: 3, playerTeam: "Benfica"
                    },
                    {
                        playerName: "Jota", minute: 23, playerTeam: "Benfica"
                    },
                    {
                        playerName: "Vinicius", minute: 72, playerTeam: "Benfica"
                    },
                    {
                        playerName: "Coates", minute: 92, playerTeam: "Sporting"
                    }
                ]
            },
            {
                id: 2,
                date: "13-12-2019",
                stadiumName: "Estádio do Dragão",
                region: "norte",
                stadiumLink: "https://files.app.fcporto.pt/sources/5c90c108c4b3b1J17qAEFdZDq1XiD.jpg",
                teamName1: "Porto",
                teamName2: "Aves",
                goals: [
                    {
                        playerName: "Marcano", minute: 10, playerTeam: "Porto"
                    },

                ]
            },
            {
                id: 3,
                date: "14-12-2019",
                stadiumName: "Estádio de Alvalade",
                region: "sul",
                stadiumLink: "https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=ZDA5f0z5jb0PPxHpbNOK+A/tqAWm/fFVszuoqpYGI1LvrJrt66e9wAeUVCgRpPl0QfW/kBP7t0T6vq9aY1XFaqFo+anG8+SkYUeGHPbZqMiR2es=",
                teamName1: "Sporting",
                teamName2: "Leixões",
                goals: [
                    {
                        playerName: "Bas Dost", minute: 90, playerTeam: "Sporting"
                    },

                ]
            }
        ]
    },

    computed: {
        showGames() {
            return this.games.filter(
                (game) => {
                    let filterRegionResult = true
                    let filterStadiumResult = true
                    let filterTeamResult = true

                    if(this.filterRegion !== ""){
                        filterRegionResult = (game.region === this.filterRegion) || (this.filterRegion == "todos")
                    }

                    if(this.filterStadium!=="") {
                        filterStadiumResult = game.stadiumName === this.filterStadium     
                    } 

                    if(this.filterTeam !=="") {
                        filterTeamResult = (game.teamName1 === this.filterTeam) || (game.teamName2 === this.filterTeam)
                    }
                    return filterRegionResult && filterStadiumResult && filterTeamResult
                }
            )
        }
    }
    
   
})
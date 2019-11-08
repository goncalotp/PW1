Vue.component("game-soccer-card", {
    props: ["game"],
    template: `
 
            <div class="card" style="width: 18rem;">
                    <img  :src="game.stadiumLink" class="card-img-top" >
                    <div class="card-body" >
                        <h1  class="card-title"> {{game.stadiumName}} </h1>
                        <h6 class="card-text"> 
                        {{getResult(game)}} 
                        </h6>
                  <p class="card-text" v-for="goal in game.goals">
                        {{goal.minute}}'{{goal.name}}
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
        games: []
    },
    created: function () {
        this.games = [
            {
                id: 1,
                date: "12-12-2019",
                stadiumName: "Estádio da Luz",
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
                stadiumLink: "https://files.app.fcporto.pt/sources/5c90c108c4b3b1J17qAEFdZDq1XiD.jpg",
                teamName1: "Porto",
                teamName2: "Aves",
                goals: [
                    {
                        playerName: "Marcano", minute: 10, playerTeam: "Porto"
                    },

                ]
            }
        ]
    }


})
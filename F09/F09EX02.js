Vue.component("game-soccer-card", {
 props: ["game"],
 template: `
 <p>{{game.teamName1}} - {{game.teamName2}}</p>`
})

const vm = new Vue({
    el:"#app",
    data: {
        games: []
    },
    created:function() {
        this.games = [
            {
                id:1,
                date:"12-12-2019",
                stadiumName: "Estádio da Luz",
                stadiumLink: "https://cdn.record.pt/images/2013-06/img_920x518$2013_06_14_20_21_00_796962.jpg",
                teamName1: "Benfica",
                teamName2: "Porto",
                goals: [
                    {
                        name:"Seferovic", minute: 3, team:"Benfica"
                    },
                    {
                        name:"Jota", minute: 23, team:"Benfica"
                    },
                    {
                        name:"Vinicius", minute: 72, team:"Benfica"
                    },
                    {
                      name:"Coates", minute: 92, team:"Sporting"
                    }
                ] 
            },
            {
                id:2,
                date:"13-12-2019",
                stadiumName: "Estádio do Dragão",
                stadiumLink: "https://files.app.fcporto.pt/sources/5c90c108c4b3b1J17qAEFdZDq1XiD.jpg",
                teamName1: "Porto",
                teamName2: "Aves",
                goals: [
                    {
                        name:"Marcano", minute: 10, team:"Porto"
                    },
                   
                ] 
            }
        ]
    }

   
})
const vm = new Vue({
    el: "#app",
    data : {
        teams: [
            {name: "Benfica", year: 1910},
            {name: "Porto", year: 1912},
            {name: "Sporting", year: 1914}
        ],
        location: "" 
    },
    methods: {
        addTeam(name, year) {
            this.teams.push({name: name, year: year})
        },
        filterTeams(location) {
            this.location = location
        }
    },
    computed: {
        listFilterTeams() {
            return this.teams.filter(
                (team) => team.location === this.location
            )
        }
    }
})
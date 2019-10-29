const vm = new Vue({
    el: "#intro",
    data: {
    schools: ["ESMAD", "ISEP", "ESE", "ISCAP", "ESTG", "ESS", "ESHT"],
    char: ""
    },

    methods: {
        pushSchools:function(){
            this.schools.push("ESMAE")
            return `this.schools.push("ESMAE")`
        },
        filterSchool(char) {
            this.char = char
        }
    },
    computed: {
        number() {
            console.log(`${this.schools.length}`)
           return `${this.schools.length}`
          
        },
        filterSchools() {
            return this.schools.filter(
            
                (school) => school.startsWith(this.char)
                
            )
        } 
    }
    })
   
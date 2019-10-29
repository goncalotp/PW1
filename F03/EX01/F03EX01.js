const vm = new Vue({
    el:"#intro",
    data:{
        person: {firstName: "Rui", lastName: "Silva", age: 23,  balance: 4432},
    },
    methods:{
        dataPerson:function(){
            console.log(`Method--> Name:${this.person.firstName} and Age:${this.person.age}`)
            return `Method--> Name:${this.person.firstName} and Age:${this.person.age}`
        }
    },
    computed:{
        dataPersonComputed:function(){
            console.log(`Computed--> Name:${this.person.firstName} and Age:${this.person.age}`)
        },
        fullNameComputed:function(){
            console.log(this.person.firstName + " " + this.person.lastName)
            return this.person.firstName + " " + this.person.lastName
        }
    },
    watch:{
        'person.age'(newAge,oldAge){
           console.log(`Age changed from ${oldAge} to ${newAge}`)
        }

    },
    filters:{   
        formatBalance: function(value){
            return `${(value/100).toFixed(2)} €`
        }
    },
    created:function(){
        console.log("EVENT:CREATION")
    },
    mounted:function(){
        console.log("EVENT:MOUNTING")
    },
    updated:function(){
        console.log("EVENT:UPDATE")
    },
})
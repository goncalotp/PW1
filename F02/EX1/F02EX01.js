const vm = new Vue({
    el:"#intro",
    data: {
        number : 0,
    },
    methods:{
        increment:function(){
            this.number++
        },
        decrement:function(){
            this.number--
        }
    },
    created:function(){
        console.log("Vue instance was created")
    if (localStorage.number){
        this.number = parseInt(localStorage.number)
    }},
    mounted:function(){
        console.log("Vue instance was mounted on the DOM")},
    updated :function(){
        console.log("updated")
        localStorage.setItem("number", this.number)
    }
})
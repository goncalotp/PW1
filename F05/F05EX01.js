const vm = new Vue({
    el: "#app",
    data: {
    msg: "Programação Web I"
    },
    methods: {
        showMessage(newMsg) {
            alert(newMsg)
            
        },
        showMessage2(e){
            console.log(e.target.tagName)
            console.log(event.type)
        },
        bubbling(){
            alert("bubbling!")
        }
    }
    }) 
   
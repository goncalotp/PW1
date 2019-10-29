const vm = new Vue({
    el: "#intro",
    data: {
    msg: "A ESMAD é uma escola do IPP",
    textColor:'black',
    fontSize:12, 
    backgroundColor:"white",
    show:'visible'
    
    },
    methods:{
        changeTextColor:function(){
           
           if(this.textColor == 'black'){
               this.textColor = 'red'
           } else {
               this.textColor = 'black'
           }
        },
        changeFontSize:function(){
           
                if(this.fontSize == 12){
                this.fontSize = 36
                botao = "small"
            } else {
                this.fontSize = 12
            }
        },
        changeBackgroundColor:function(color){
            this.backgroundColor = color
        },
        changeShow:function(){
            if(this.show == 'visible'){
                this.show = 'hidden'
            }
            else{
                this.show = 'visible'
            }
        }
    }
    })

    
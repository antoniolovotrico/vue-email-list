let app = new Vue ({
    el: "#app",
    data: {
       numArr:[],
    },
    mounted(){
        this.pushFunc();
        
    },
    methods:{
        pushFunc:function() {
            for (let i = 0; i <= 35; i++){
                this.numArr.push("");
            }
        },
        showFunc:function(i){
            axios.get("https://flynn.boolean.careers/exercises/api/random/int")
            .then(response => {
            //console.log(response.data.response);
            let rndNum = response.data.response;
            this.numArr.splice(i,1,rndNum)
            })
        }
                
            
        
    }
})
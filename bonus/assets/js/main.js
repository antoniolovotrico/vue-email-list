let app = new Vue ({
    el: "#app",
    data: {
       numArr:[],
    },
    // insert pushFunc in mounted to use it on loading page
    mounted(){
        this.pushFunc();
        
    },
    methods:{
        // function to populate numArr with 36 elements 
        pushFunc:function() {
            for (let i = 0; i <= 35; i++){
                this.numArr.push("");
            }
        },
        // function to set rndNum from Api to the square clicked
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
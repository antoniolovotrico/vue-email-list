let app = new Vue ({
    el: "#app",
    data: {
       rndNum:[] 
    },
    mounted(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/int")
        .then(response => {
            console.log(response);
        })
    }
})
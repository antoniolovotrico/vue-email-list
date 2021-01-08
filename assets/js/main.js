let app = new Vue ({
    el: "#app",
    data: {
        email: [],
    },
    mounted(){
        for (let i=0; i<= 9; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                //console.log(response);
                this.email.push(response.data.response);
                console.log(this.email);  
            })
        }
    }
})
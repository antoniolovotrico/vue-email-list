// Genera 10 mail tramite api e stampale in una lista
// Usate Vue e Axios.
// La richiesta AJAX per gli indirizzi email inviatela al seguente link:
// https://flynn.boolean.careers/exercises/api/random/mail
// La lista di email va stampata a schermo nella pagina html.

let app = new Vue ({
    el: "#app",
    data: {
        email: [],
    },
    methods:{
        // this function will cycle 10 timea requesting a random email to the API
        generateFunc:function(){
            for (let i=0; i<= 9; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    //console.log(response);
                    this.email.push(response.data.response);
                    console.log(this.email);  
                })
            }
        }
    },
    // set the generateFunc inside mounted section to recall it on loading page
    mounted(){
       this.generateFunc(); 
    }
})
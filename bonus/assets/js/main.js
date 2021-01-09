let app = new Vue ({
    el: "#app",
    data: {
       numArr:[],
    },
    mounted(){
        this.pushFunc();
        axios.get("https://flynn.boolean.careers/exercises/api/random/int")
        .then(response => {
            //console.log(response);
        })
    },
    methods:{
        pushFunc:function() {
            for (let i = 0; i <= 35; i++){
                this.numArr.push(i);
            }
        }
    }
})
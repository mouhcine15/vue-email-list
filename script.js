const app = new Vue ({
    el: "#app",
    data: {
        emailUser1: "",
        emailUser2: "",
        emailUser3: "",
        emailUser4: "",
        emailUser5: "",
        emailUser6: "",
        emailUser7: "",
        emailUser8: "",
        emailUser9: "",
        emailUser10: ""
    },
    mounted() {
        
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser1=risultato;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser2=risultato;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser3=risultato;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser4=risultato;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser5=risultato;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser6=risultato;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser7=risultato;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser8=risultato;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser9=risultato;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser10=risultato;   
            });
    }
});
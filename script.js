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
                document.getElementsByClassName("nostraEmail").innerHTML = this.emailUser;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser2=risultato;
                document.getElementsByClassName("nostraEmail").innerHTML = this.emailUser;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser3=risultato;
                document.getElementsByClassName("nostraEmail").innerHTML = this.emailUser;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser4=risultato;
                document.getElementsByClassName("nostraEmail").innerHTML = this.emailUser;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser5=risultato;
                document.getElementsByClassName("nostraEmail").innerHTML = this.emailUser;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser6=risultato;
                document.getElementsByClassName("nostraEmail").innerHTML = this.emailUser;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser7=risultato;
                document.getElementsByClassName("nostraEmail").innerHTML = this.emailUser;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser8=risultato;
                document.getElementsByClassName("nostraEmail").innerHTML = this.emailUser;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser9=risultato;
                document.getElementsByClassName("nostraEmail").innerHTML = this.emailUser;
            });

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.emailUser10=risultato;
                document.getElementsByClassName("nostraEmail").innerHTML = this.emailUser;
            });
    }
});
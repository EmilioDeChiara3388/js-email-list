//console.log("Funzioni?");

/* 
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

let listItemEl = document.querySelector(".listItem");
let listEl = document.querySelector("ul");


const emailList = [];
for (let i = 1; i <= 10; i++) {
    emailList.push(
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
            const email = response.data.response;
            console.log(email);
        })
    )
}






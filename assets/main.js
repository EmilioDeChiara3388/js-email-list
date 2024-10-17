//console.log("Funzioni?");

/* 
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

let listEl = document.querySelector(".list");

const emailList = [];
for (let i = 1; i <= 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
            email = response.data.response;
            //console.log(email);
            emailList.push(email);
            listEl.innerHTML += `<li> ${email} </li>`;
        })
        
}

console.log(emailList);





//










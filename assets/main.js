//console.log("Funzioni?");

/* 
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

let listEl = document.querySelector(".list");
let bonusListEl = document.querySelector(".bonusList");
let buttonEl = document.querySelector("button");

let emailList = [];
for (let i = 1; i <= 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
            let email = response.data.response;
            //console.log(email);
            emailList.push(email);
            listEl.innerHTML += `<li> ${email} </li>`;
        })
        
}

console.log(emailList);

buttonEl.addEventListener("click", () => {
    listEl.classList.add("d-none");
    let bonusEmailList = [];
    for (let i = 1; i <= 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response =>{
            let bonusEmail = response.data.response;
            bonusEmailList.push(bonusEmail);
            bonusListEl.innerHTML += `<li> ${bonusEmail} </li>`;
        })
    }

})












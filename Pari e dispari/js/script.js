console.log('HI, I am java and I am working fine');

// 1. L'utente sceglie pari o dispari
// Quindi due input da cliccare:
// 2. L'utente inserisce un numero da 1 - 5
// 3. Generiamo un numero random per il PC
// 4. Sommiamo il numero utente con quello pc
// 5. Verifichiamo se la somma dei numeri è pari o dispari
// 6. Dichiariamo chi ha vinto


// Collegamento con i bottoni:

let pari = document.getElementById('pari');
let dispari = document.getElementById('dispari');

// Dichiarazioni di variabili prima del prompt utente:

let utentePari = 0;
let utenteDispari = 0;

// Numero variabile del pc 
let pcUser = parseInt(Math.floor((Math.random() * 5) + 1));
console.log('numero del pc:', pcUser, typeof pcUser );

//Funzione di controllo per numeri pari/dispari

function pariODispari(num) {

    if (num % 2 == 0) {
        let A = 'pari';
        return A;

    } else {
        let B = 'dispari';
        return B;
    }
}

// Create due variabili per verifica funzione: 

let controllo = pariODispari(5);
console.log('Se leggi dispari funziona:', controllo, typeof controllo)
let controllo2 = pariODispari(4)
console.log('Se leggi pari funziona:', controllo2, typeof controllo2)


// Crezione evento se utente sceglie PARI

pari.addEventListener('click', function() {

   alert('Sei il giocatore Pari');
   let utentePari = parseInt(prompt('Inserisci un numero da 1-5'));

   if (isNaN(utentePari)) {
    
      alert('Numero inserito errato')

   }  else {

    let somma = parseInt(utentePari + pcUser);
    console.log('Somma dei numeri', somma, typeof somma)
    
   }




})
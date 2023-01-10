console.log('HI, I am java and I am working fine');

// STEPS:

// 1. Chiedere all'utente di inserire una parola
// La parola inserita deve essere palindroma
// 2. invertire la parola inserita con una funzione
// 3. se la parola invertita è == alla parola originale
// -- la parola è palindroma
// -- se la parola invertita è !== alla parola originale 
// -- la parola non è palindroma

const userWord = prompt('Inserisci qui la tua parola da verificare');
console.log('Parola inserita:', userWord, typeof userWord);

//funzione     //nome funzione arbitrario //  (str) sta per stringa
function            inverter                  (str) { 
    
    let splitting = str.split(''); //Serve a dividire ogni lettera di str in un array: ["e","e", "l", "l", "o"]    
    let reversing = splitting.reverse(); // Serve ad invertire ogni elemento dell'array: [ "o", "l", "l","e","h"]
    let joining = reversing.join(''); // Serve a ricomporre l'array in stringa;
    
    return joining;
    // la funzione termina qui, con il valore di result

}


let reverse = inverter(userWord);
console.log('Parola invertita:', reverse, typeof reverse);

if (reverse == userWord) {

    alert('The word is palindrome')
    
} else {

    alert('The word in not palindome')
}

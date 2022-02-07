let userKm = parseFloat(prompt('inserisci il numero di km da effettuare'));
let userAge = parseFloat(prompt ('inserisci qui la tua età')) ;

const PRICE_KM = 0.21

console.log( userKm , userAge )

let sconto = 0;

let prezzoFinale = userKm * PRICE_KM

console.log(prezzoFinale)
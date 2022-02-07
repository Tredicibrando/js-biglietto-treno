let userKm = parseFloat(prompt('inserisci il numero di km da effettuare'));
let userAge = parseFloat(prompt ('inserisci qui la tua età')) ;

const PRICE_KM = 0.21
const SCONTO_YOUNG = 20 / 100
const SCONTO_OLD = 40 / 100

const asd = document.getElementById('prezzo')

console.log( userKm , userAge )

let prezzoStandard = userKm * PRICE_KM;
let sconto = 0;

if (userAge < 18 ) {
    sconto = prezzoStandard * SCONTO_YOUNG;
    console.log(sconto)
    
} else if( userAge > 65 ){
    sconto = prezzoStandard * SCONTO_OLD;
    
}   

console.log(sconto)

prezzoFinale = prezzoStandard - sconto;

console.log(prezzoFinale)

asd.innerHTML = `${prezzoFinale} &euro;`;


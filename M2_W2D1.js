//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
console.log("ESERCIZIO 1");

let numeroA = 5;
let numeroB = 6;

if (numeroA > numeroB) {
  console.log(numeroA + " è più grande");
} else {
  console.log(numeroB + " è più grande di " + numeroA);
}
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

console.log();
console.log("ESERCIZIO 2");

let x = 10;

if (x <= 5) {
  console.log("Tiny");
} else if (x <= 10) {
  console.log("Small");
} else if (x <= 15) {
  console.log("Medium");
} else if (x <= 20) {
  console.log(Large);
} else if (x >= 20) {
  console.log(Huge);
}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 
  (suggerimento: ripassa l'uso di "continue").
*/

console.log();
console.log("ESERCIZIO 3");

for (let y = 0; y <= 10; y++) {
  if (y === 3 || y === 8) continue;
  console.log(y);
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare 
  che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

console.log();
console.log("ESERCIZIO 4");

for (let z = 0; z <= 15; z++) {
  if (z % 2 === 0) {
    console.log(z + " è pari.");
  } else {
    console.log(z + " è dispari.");
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure
  se la loro addizione/sottrazione sia uguale a 8.
*/

console.log();
console.log("ESERCIZIO EXTRA 1");

let a = 24;
let b = 16;

if (a === 8 || b === 8) {
  console.log(a + " è 8");
} else if (a + b === 8) {
  console.log("a + b è uguale a 8");
} else if (a - b === 8) {
  console.log("a - b è uguale a 8");
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente 
in una variabile "totalShoppingCart". C'è una promozione in corso: se il totale del carrello supera 50,
l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log();
console.log("ESERCIZIO EXTRA 2");

let articolo1 = 10;
let articolo2 = 6;
let articolo3 = 4;

let totalShoppingCart = articolo1 + articolo2 + articolo3;

let costoSpedizione = 10;

if (totalShoppingCart > 50) {
  console.log(
    "Complimenti! Superando 50€ di spesa hai diritto alla spedizione gratuita! Il totale della tua spesa è " +
      totalShoppingCart +
      "€"
  );
} else if (totalShoppingCart < 50) {
  let totalConSpedizione = totalShoppingCart + costoSpedizione;
  console.log(
    "Non hai raggiunto 50€ minimo di spesa per la spedizione gratuita. Il totale della tua spesa, compresa di spedizione, è " +
      totalConSpedizione +
      "€"
  );
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, 
  determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no 
  e calcolando il totale.
*/

console.log();
console.log("ESERCIZIO EXTRA 3");

let blackFriday = totalShoppingCart * 0.8;
let blackFridayConSpedizione = blackFriday + costoSpedizione;

if (blackFriday > 50) {
  console.log(
    "Oggi è il Black Friday e viene applicato il 20% su ogni prodotto. Superando 50€ di spesa hai anche il diritto alla spedizione gratuita! Il totale della tua spesa è " +
      blackFriday +
      "€"
  );
} else if (blackFriday < 50) {
  console.log(
    "Oggi è il Black Friday e viene applicato il 20% su ogni prodotto. Il totale della tua spesa, compresa di spedizione, è " +
      blackFridayConSpedizione +
      "€"
  );
}
/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. 
  Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e 
  se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

console.log();
console.log("ESERCIZIO EXTRA 5");

for (let c = 1; c <= 100; c++) {
  if (c % 3 === 0 && c % 5 === 0) {
    console.log("FizzBuzz");
  } else if (c % 3 === 0) {
    console.log("Fizz");
  } else if (c % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(c);
  }
}

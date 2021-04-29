/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare? */

var numeri = [];

for (var i = 1; i < 101; i++) {
    numeri.push(i);
}

for (var i = 0; i < numeri.length; i++) {
    if (!(numeri[i] % 3) && !(numeri[i] % 5)) {
        console.log("FizzBuzz");
    } else if (!(numeri[i] % 5)) {
        console.log("Buzz")
    } else if (!(numeri[i] % 3)) {
        console.log("Fizz");
    } else {
        console.log(numeri[i]);
    }
}
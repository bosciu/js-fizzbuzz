/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare? */

var numeri = [];
var lista = document.getElementById("lista");
var lista2 = document.getElementById("lista-2");

for (var i = 1; i < 101; i++) {
    numeri.push(i);
}

for (var i = 0; i < numeri.length; i++) {
    if (i <= 49) {
        if (!(numeri[i] % 3) && !(numeri[i] % 5)) {
            lista.innerHTML += "<li class='color-green'>FizzBuzz</li>";
        } else if (!(numeri[i] % 5)) {
            lista.innerHTML += "<li class='color-blue'>Buzz</li>";
        } else if (!(numeri[i] % 3)) {
            lista.innerHTML += "<li class='color-red'>Fizz</li>";
        } else {
            lista.innerHTML += "<li>" + numeri[i] + "</li>";
        }
    } else {
        if (!(numeri[i] % 3) && !(numeri[i] % 5)) {
            lista2.innerHTML += "<li class='color-green'>FizzBuzz</li>";
        } else if (!(numeri[i] % 5)) {
            lista2.innerHTML += "<li class='color-blue'>Buzz</li>";
        } else if (!(numeri[i] % 3)) {
            lista2.innerHTML += "<li class='color-red'>Fizz</li>";
        } else {
            lista2.innerHTML += "<li>" + numeri[i] + "</li>";
        }
    }
}
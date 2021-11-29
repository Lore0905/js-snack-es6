// Snack 1
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const min = 1;
const max = 5;

const myArrayuno = [];


// scorro myArray 
myArray.forEach( (element, index, array) => {
    // pusho solo gli elementi che sono compresi dall'indice (min) all'indice (max) di myArray
    if((index > min) && (index < max)){
        myArrayuno.push(element);
    }

});

console.log(myArrayuno);

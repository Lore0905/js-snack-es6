// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse
// proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate 
// a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
// contengono solo nomi e falli subiti e stampiamo tutto in console.

const footballTeam = [
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Venezia',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Verona',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// creo un nuovo arrey che contiene i punti e i falli subiti
const newFotballArrey = [];

for( let i = 0; i < footballTeam.length; i++) {

    const thisTeam = footballTeam[i];

    footballTeam.puntiFatti = getRndInteger(0, 30);
    footballTeam.falliSubiti = getRndInteger(10, 20);
    
    const {nome} = thisTeam;
    const {falliSubiti} = footballTeam;

    const copyfootballTeam = {
        nome, 
        falliSubiti
    };

    newFotballArrey.push(copyfootballTeam);
}
console.log(newFotballArrey);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
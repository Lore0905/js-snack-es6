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
newFotballArrey = [];

for( let i = 0; i < footballTeam.length; i++) {

    let singleTeam = footballTeam[i];

    const footballTeamPoints = getRndInteger(0, 30);
    const footballTeamFouls = getRndInteger(10, 20);
    
    singleTeam.puntiFatti = footballTeamPoints;
    singleTeam.falliSubiti = footballTeamFouls;

    const footballTeam = {
        puntiFatti, 
        falliSubiti
    };

    newFotballArrey.push(footballTeam);
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
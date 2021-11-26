// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti 
// proprietà: nome e peso.
// Stampare a schermo la bici con peso minore 
// utilizzando destructuring e template literal nel DOM


const bike = [
    {
        nome: 'red-bike',
        peso: 15
    },
    {
        nome: 'white-bike',
        peso: 17
    },
    {
        nome: 'black-bike',
        peso: 20
    },
    {
        nome: 'green-bike',
        peso: 10
    },
    
]


let currentLightBike = bike[0];

// ciclo tutto l'arrey
for ( let i = 0; i < bike.length; i++ ){

    const thisBike = bike[i];

    // tengo in considerazione solo la bici con il peso più basso
    if ( thisBike.peso < currentLightBike.peso ){

        currentLightBike = thisBike;      
    }

}
console.log(currentLightBike);

// stampo il risultato nel DOM

// const lighterBikeHTML = `
// <div>
//     <h2>la bici più performante che abbiamo, ha un peso di:</h2>
//     <h1>${currentLightBike.peso} kg</h1>
// </div>
// `;

// const bikeContainer = document.getElementById('container');
// bikeContainer.innerHTML = lighterBikeHTML;

// versione con la destruturazione

const {peso} = currentLightBike;

console.log(peso);

const lighterBikeHTML = `
<div>
    <h2>la bici più performante che abbiamo, ha un peso di:</h2>
    <h1>${peso} kg</h1>
</div>
`;

const bikeContainer = document.getElementById('container');
bikeContainer.innerHTML = lighterBikeHTML;

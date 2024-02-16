let raddoppio = (a) => {
    return a*2;
}
let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arrayNum.forEach((el) => {
    console.log(raddoppio(el))
});

let molt = arrayNum.map((el) => el*2);
console.log(molt);

let pari = [];

for(let el of arrayNum) {
    if(el % 2 == 0) {
        pari.push(el);
    }
}

let pariConFilter = arrayNum.map((el) => (el%2==0) ? el: 'Dispari');

console.log(pari);
console.log(pariConFilter);

let count = 1;
while (count<5) {
    console.log(count);
    count++;
}

let array = [
    {
    nome: 'Luca Bianchi',
    citta: 'Milano',
    hobbies: [
    {tipo: 'Calcio', level: 'medium'},
    {tipo: 'Cucina', level: 'high'},
    {tipo: 'Viaggi', level: 'low'}
    ]
    },
    {
    nome: 'Giulia Verdi',
    citta: 'Roma',
    hobbies: [
    {tipo: 'Pittura', level: 'high'},
    {tipo: 'Yoga', level: 'medium'},
    {tipo: 'Lettura', level: 'high'}
    ]
    },
    {
    nome: 'Marco Neri',
    citta: 'Napoli',
    hobbies: [
    {tipo: 'Musica', level: 'low'},
    {tipo: 'Fotografia', level: 'high'},
    {tipo: 'Trekking', level: 'medium'}
    ]
    },
    {
    nome: 'Sofia Gialli',
    citta: 'Firenze',
    hobbies: [
    {tipo: 'Lettura', level: 'high'},
    {tipo: 'Scrittura', level: 'medium'},
    {tipo: 'Nuoto', level: 'low'}
    ]
    },
    {
    nome: 'Antonio Marrone',
    citta: 'Bologna',
    hobbies: [
    {tipo: 'Ginnastica', level: 'medium'},
    {tipo: 'Ciclismo', level: 'high'},
    {tipo: 'Escursionismo', level: 'medium'}
    ]
    }
    ];
    
    // console.log(array[4].hobbies[2].level);

    let newObject = [];

    for(let i = 0; i < array.length; i++){
        newObject.push({nome: array[i].nome});
        newObject[i]['hobbies'] = [];
        for(let j = 0; j < array[i].hobbies.length; j++){
            newObject[i]['hobbies'].push(array[i].hobbies[j].tipo);
        }
    }

    /* let newArrObj = array.map((el) => {
        let data = {nome: el.nome, hobbies: el.hobbies.map()}
    }) */

    console.log(newObject);
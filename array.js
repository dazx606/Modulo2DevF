let miArray = ['pinguino', 'caballo', 60, 'javier', undefined, 'otro', 73];
//              '0',         '1',     '2',   '3',    '4',  ....

//agrego soy nuevo al array
miArray.push('soy nuevo');

console.log(miArray);

//elimine soy nuevo del array y lo guarde en la let eliminado
let eliminado = miArray.pop();

console.log(miArray); // el array sin soy nuevo
console.log(eliminado); // soy nuevo


let numeros = [0, 1, 2, 3, 4, 5]; // se crea el array
let numEliminado = numeros.shift(); // elimino el indice 0 y reorgnaizo el array
console.log(numeros); // array sin 0
console.log(numEliminado); // 0

let animals = ['pajaro', 'leon', 'pinguino'];
animals.unshift('gato');  // agrega gato al inicio del array
console.log(animals);


delete animals[2];
console.log(animals);

let saludo = 'hola como estas, que haces';
let saludo2 = saludo.split(', ');
console.log(saludo2);

const num2 = [34, 1, 9, 345, 4, 81];
//console.log(num2[num2.length - 1]);


for (let index = 0; index < num2.length; index++) {
    console.log(num2[index])
}





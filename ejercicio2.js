//van crear un objeto llamado persona, que tiene 3 atibutos, nombre, edad e hijos
//hijos va a ser un array vacio => []
//crear una funcion que reciba el objeto persona y le agrege hijos al array,
// crear una funcion que cree otra propiedad llamada capital, y la inicializa con un valor
//crear 2 funciones mas, una para agregar dinero a ese capital y otra para retirarlo
//una funcin para cambiar el nombre

let persona = {
    nombre: 'David Zuleta',
    edad: 30,
    hijos: []
}

function addHijos(objeto, hijo) {
    objeto.hijos.push(hijo)
}

function crearCapital(objeto, capital) {
    objeto['capital'] = capital;
}

function addCapital(objeto, monto) {
    objeto.capital = objeto.capital + monto;
    //objeto['capital'] = objeto.capital + monto; lo mismo
}

function retirarCapital(objeto, monto) {
    objeto['capital'] = objeto.capital - monto;
}

function cambiarNombre(objeto, nuevoNombre) {
    objeto.nombre = nuevoNombre;
}

addHijos(persona, 'Jose');
addHijos(persona, 'Mati');
addHijos(persona, 'Laura');
crearCapital(persona, 100000);
addCapital(persona,10000);
addCapital(persona,5000);
addCapital(persona,100000);
retirarCapital(persona, 150000);
cambiarNombre(persona, "Javier Hernandez")
console.log(persona);
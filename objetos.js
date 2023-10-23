let persona = {
    nombre: 'David',
    apillido: 'Zuleta',
    titulo: 'ing mecanico',
    edad: 30,
    estado: 'feliz',
    capital: 10000,
}

let nombre = 'nombre';
persona['esposa'] = 'Diana';
persona['estado'] = 'infeliz';
persona['capital'] = 0;
persona.apillido = 'Molina';


//console.log('se casa: ', persona);

persona.esposa = undefined;
persona.capital = 15000;
persona.estado = 'Feliz'

//console.log('se divorcia: ', persona);

// Hola David Molina, su edad es 30
console.log('Hola ' + persona.nombre + ' ' + persona.apillido + ', su edad es ' + persona.edad);
console.log(`Hola ${persona.nombre} ${persona.apillido}, su edad es ${persona.edad}`)


function cambiarNombre(sujeto, nuevoNombre) {
    sujeto.nombre = nuevoNombre;
    console.log(sujeto);
}

function agregarSegundoNombre(sujeto, segundoNombre) {
    sujeto.nombre = sujeto.nombre + ' ' +segundoNombre
}


//cambiarNombre(persona, 'Daniel')
agregarSegundoNombre(persona, 'Alejandro');
console.log(persona)
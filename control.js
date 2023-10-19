//variables - pueden cambair de valor
let miVariable = 30;
miVariable = 'hola';

//constantes - no pueden cambiar de valor
const gravedad = 9.81;
// gravedad = 20; NO SE PUEDE RE NOMBRAR!!!!

// tipos de datos

//number 
let myNum = 10;
console.log('myNum: ' + typeof myNum);
console.log('\n');
//string
let myString = 'Hola mundo';
console.log('myString: ' + typeof myString);
console.log('\n');
//boolean
let verdadero = true;
let falso = false;
console.log('verdadero: ' + typeof verdadero);
console.log('\n');
//operadores
// and => todas las condiciones deben ser verdaderas para que la respuesta sea verddera (&&)
true && true && true //=> true
false && true && true //=> false
console.log('AND');
console.log(true && true && true);
console.log(true && false && true);
console.log('\n');
//or => una de las condiciones debe ser verdadera para que la respuesta sea verdadero
false || false || false //=> false
true || false || false //=> true
console.log('OR');
console.log(false || false || false);
console.log(false || true || false);
console.log('\n');

//comparadores matematicos

console.log('OPERADORES ')
console.log(5 > 7); // > mayor que 
console.log(5 < 5); // < menor que
console.log(5 >= 5);// >= mayor o igual que
console.log(5 >= 5);// <= menor o gual que
console.log(5 == '5');
console.log(5 === '5');// === triple igualdad 'compara la igualdad entre 2 valores' si son iguaoles retorna true
console.log(5 !== 7);// !== diferente de 'si los valores son diferentes retorna true'


// if else
let edad = 17;

if (edad >= 18) {
    console.log('puedes comprar cerveza');
}
else {
    console.log('no puedes comprar cerveza');
};

let dia = 3;
if (dia == 1) {
    console.log('lunes');
} else if (dia == 2) {
    console.log('martes');
}
else {
    console.log('otro dia')
}

let dia2 = 2;

switch (dia2) {
    case 1:
        console.log('lunes');
        break;

    case 2:
        console.log('martes');
        break;

    default:
        console.log('otro dia');
        break;
};



// for
for (let dia = 1; dia < 10; dia++) {
    console.log('el dia es: ' + dia);
    switch (dia) {
        case 1:
            console.log('lunes');
            break;

        case 2:
            console.log('martes');
            break;

        case 3:
            console.log('miercoles');
            break;

        case 4:
            console.log('jueves');
            break;

        case 5:
            console.log('viernes');
            break;

        case 6:
            console.log('sabado');
            break;

        case 7:
            console.log('domingo');
            break;


        default:
            console.log('no se puede poner mayor a 7');
            break;
    };
};


// while
dia = 9;
while (dia <= 7) {

    switch (dia) {
        case 1:
            console.log('lunes');
            break;

        case 2:
            console.log('martes');
            break;

        case 3:
            console.log('miercoles');
            break;

        case 4:
            console.log('jueves');
            break;

        case 5:
            console.log('viernes');
            break;

        case 6:
            console.log('sabado');
            break;

        case 7:
            console.log('domingo');
            break;


        default:
            console.log('no se puede poner mayor a 7');
            break;
    };

    dia++

}

let lluvia = !false;

while (!lluvia) {
    console.log('regar los aguacates');
}

// funciones

function saludar() {
    console.log('Hola, como estas?')
}

saludar();
let saldo = 20;

function sumar(saldo, ingreso) {
    console.log('saldo: ', saldo);
    console.log('ingreso: ', ingreso);
    return saldo + ingreso;
};


saldo = sumar(saldo + 20, 20);

console.log('tu nuevo saldo es: ', saldo); // 



//scope
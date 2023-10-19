// crear una funcion llamada miFuncion que recibe 2 parametros
// parametro 1: num1 => el numero inicial de un ciclo
// parametro 2: num2 => el numero que indica el fin del ciclo
// si num >= num 2 la funcion debe hacer un log que diga: 'num1 debe ser menor que num2'
// si no la funcion debe hacer el siguiente log
// si el numero actual del ciclo es divisible por 3 debe hacer un log de BUZZ
// si el numero es divisible por 5 debe hacer un log de BIZZ
// extra: si es divisible por 3 y 5 BIZZ BUZZ
// en caso de que no sea divisible por 3 o 5 hacer un log del numero



function miFuncion(num1, num2) {

    if (num1 > num2) {
        console.log('num1 debe ser menor que num2')
    } else {
        for (let ciclo = num1; ciclo <= num2; ciclo++) {
            if (ciclo % 3 === 0 && ciclo % 5 === 0) {
                console.log('BIZZ BUZZ');
            }
            else if (ciclo % 3 === 0) {
                console.log('BUZZ');
            }
            else if (ciclo % 5 === 0) {
                console.log('BIZZ');
            }
            else {
                console.log(ciclo);
            }
        }
    }
}

miFuncion(1, 20) // ingresar los 2 parametros


//1
//2
//BUZZ
//4
//BIZZ
//BUZZ
//7
//8
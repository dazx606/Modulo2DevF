//es el scoope global
//las varibales definidas en un scoope global, las puedo usar en un local tambien (debe vivir dentro del global)
let global = 20;


//son scoopes locales
function miFuncion() {
    let local = 50;
    console.log(local);
};


if(true){
    //Scoope local, las varibales definidas en un scoope local
    //solo pueden ser utlizadas en ese scoope
    let presupuesto = 50;
    console.log(presupuesto);
}

//console.log(presupuesto)




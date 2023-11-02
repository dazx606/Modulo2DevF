const usuario ={
    nombre:"David Zuleta",
    password: "admin123"
}

function validador (nombre, password){
    const form = document.getElementById('form');
    if(nombre === usuario.nombre && password === usuario.password){
        alert('Login exitoso!');
        form.hidden = true;
    } else if(nombre === '' || password === '') alert('Los los campos son obligatorios')
    else alert('Datos errados por favor revisar')
};

document.getElementById('btn').addEventListener('click', function(){
    let nombre = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

    validador(nombre, pass);
});


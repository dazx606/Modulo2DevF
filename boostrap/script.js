const usuario = {
    nombre: "David",
    password: "123",
    capital: 0
}

document.getElementById('boton').addEventListener('click', function () {

    let nombre = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

    validador(nombre, pass);
})

var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
    trigger: 'focus'
})



function validador(nombre, password) {
    const form = document.getElementById('form');
    const contenido = document.getElementById('principal');
    const titulo = document.getElementById('nombre')
    if (nombre === usuario.nombre && password === usuario.password) {
        alert('Login exitoso!');
        form.style.display = "none"; // Oculta el formulario
        contenido.style.display = "block";
        titulo.innerHTML = usuario.nombre;
        document.getElementById('ingresar').addEventListener('click', function () {
            console.log('Botón "Ingresar" presionado');
        });
    } else if (nombre === '' || password === '') alert('Los los campos son obligatorios')
    else alert('Datos errados por favor revisar')
};





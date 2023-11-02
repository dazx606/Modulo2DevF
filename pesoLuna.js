const persona = {
    nombre: 'David',
    peso: undefined
}

function alertaPeso(peso) {
    if (peso < 50) alert('estas desnutrido')
    else if (peso > 100) alert('tienes sobre peso, debes cuidarte mas!')
    else alert('tu peso es saludable')
}

document.getElementById('calculateButton').addEventListener('click', function () {
    // Obtener el peso ingresado por el usuario
    var userWeight = parseFloat(document.getElementById('userWeight').value);

    persona.peso = userWeight;

    alertaPeso(persona.peso);

    // Calcular el peso en la Luna (un 16.5% del peso en la Tierra)
    var moonWeight = userWeight * 0.165;

    // Mostrar el resultado en la etiqueta de salida
    document.getElementById('moonWeightResult').textContent = "Tu peso en la Luna es: " + moonWeight.toFixed(2) + " kg";
});
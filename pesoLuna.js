document.getElementById('calculateButton').addEventListener('click', function() {
    // Obtener el peso ingresado por el usuario
    var userWeight = parseFloat(document.getElementById('userWeight').value);

    // Calcular el peso en la Luna (un 16.5% del peso en la Tierra)
    var moonWeight = userWeight * 0.165;

    // Mostrar el resultado en la etiqueta de salida
    document.getElementById('moonWeightResult').textContent = "Tu peso en la Luna es: " + moonWeight.toFixed(2) + " kg";
    alert('hola')
});
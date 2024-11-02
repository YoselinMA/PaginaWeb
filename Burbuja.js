function ordenar() {
    // Obtener el valor del input
    var inputNumber = document.getElementById("inputNumber").value;

    // Convertir el número en una cadena y dividirlo en dígitos
    var arr = Array.from(inputNumber.toString()).map(Number);

    // Llamar a la función de ordenamiento burbuja
    var arrayOrdenado = ingresarDatos(arr.slice());

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = "Número ordenado: " + arrayOrdenado.join('');
}

function ingresarDatos(arr) {
    var len = arr.length;
    var swapped;

    do {
        swapped = false;
        for (var i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Intercambiar elementos si están en el orden incorrecto
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

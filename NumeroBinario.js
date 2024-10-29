function searchSequential(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Retorna el índice si encuentra el número
    }
  }
  return -1; // Retorna -1 si no encuentra el número
}

function search() {
  const inputNumbers = document.getElementById('inputNumbers').value;
  const numbersArray = inputNumbers.split(',').map(Number);

  const searchNumber = Number(document.getElementById('searchNumber').value);

  if (!isNaN(searchNumber)) {
    const index = searchSequential(numbersArray, searchNumber);
    if (index !== -1) {
      document.getElementById('result').innerText = `El número ${searchNumber} fue encontrado en el índice ${index}.`;
    } else {
      document.getElementById('result').innerText = `El número ${searchNumber} no fue encontrado en el arreglo.`;
    }
  } else {
    document.getElementById('result').innerText = 'Ingrese un número válido a buscar.';
  }
}

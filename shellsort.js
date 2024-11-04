function shellSort(arr) {
    const n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < n; i++) {
        const temp = arr[i];
        let j;
        for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
          arr[j] = arr[j - gap];
        }
        arr[j] = temp;
      }
    }
    return arr;
  }
  
  function sortNumbers() {
    const inputNumbers = document.getElementById('inputNumbers').value;
    const numbersArray = inputNumbers.split(',').map(Number);
  
    if (numbersArray.length > 0) {
      const sortedArray = shellSort(numbersArray);
      document.getElementById('result').innerText = 'Resultado ordenado: ' + sortedArray.join(', ');
    } else {
      document.getElementById('result').innerText = 'Ingrese al menos un número.';
    }
  }
  

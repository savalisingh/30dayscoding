function bubbleSort(arr) {
    const len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        // Compare adjacent elements and swap if necessary
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j+1]
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  } 
  
  const numbers = [4, 2, 8, 1, 6, 3];
  const sortedNumbers = bubbleSort(numbers);
  
  console.log(sortedNumbers); // Output: [1, 2, 3, 4, 6, 8]
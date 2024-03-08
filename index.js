// Helper function to calculate the average of numbers in an array
function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0;
    }
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
  }
  
  // Main code to use the helper function
  const numbers = [10, 20, 30, 40, 50]; // You can change the array elements
  const average = calculateAverage(numbers);
  console.log(`The average of numbers in the array is: ${average}`);
  
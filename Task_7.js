const standardDeviation = (numbers) => {
  // sum up numbers in the array using reduce method
  let N = numbers.reduce((a, b) => a + b, 0);
  // find the mean of the array
  let mean = N / numbers.length;
  // initialize an empty array for the square of the differences between each number of the array and mean
  let meanDis = [];
  //looping through the array to calculate the square of the difference btw each number of the array and the mean
  for (let i = 0; i < numbers.length; i++) {
    // populate the meanDis array with the result
    meanDis.push(Math.pow(numbers[i] - mean, 2));
  }
  // find the square root of the sum of meanDis array divided by the total number of the data point i.e size
  return Math.sqrt(meanDis.reduce((a, b) => a + b, 0) / numbers.length);
};

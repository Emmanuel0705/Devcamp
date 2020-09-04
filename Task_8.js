const threeOccurence = (number) => {
  // intialize an array to contain the 3s array
  let numbers = [];
  // use loop to get numbers between 0 - number using the index
  for (let i = 0; i <= number; i++) {
    // condition to check if number include 3 taking advantage of string includes method
    if (i.toString().includes(3)) {
      // populate the empty numbers array with number that includes 3s
      numbers.push(i);
    }
  }
  // returning numbers array length for the count and the number array
  return { count: numbers.length, numbers };
};

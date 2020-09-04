const sumEvenAndOdd = (numbers) => {
  //initializing odd and even to 0
  let odd = 0;
  let even = 0;
  //loop through the numbers
  numbers.forEach((number) => {
    //increment even variable with the value of number if number is even
    if (number % 2 === 0 && number > 0) even += number;
    //increment odd variable with the value of number if number is odd
    if (number % 2 !== 0 && number > 0) odd += number;
  });
  // return the total value of even and odd
  return [even, odd];
};

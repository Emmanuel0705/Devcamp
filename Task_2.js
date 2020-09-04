const isPrime = (number) => {
  // initializing isprime to true
  let isPrime = true;
  //check if number is greater than 2
  if (number < 2) isPrime = false;
  //loop through the number to check if it isnt divisible by another other numbers apart from 1 and itself
  for (let i = 2; i <= Math.sqrt(number); i++) {
    //check if i is divisible number
    if (number % i === 0) isPrime = false;
  }
  //return isPrime
  return isPrime;
};

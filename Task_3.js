const primesOnly = (numbers) => {
  // initializing allPrimes to []
  let allPrimes = [];
  //loop through each number in the array
  numbers.forEach((number) => {
    //initialixing is prime to true
    let isPrime = true;
    //check if number is greater than 2
    if (number < 2) isPrime = false;
    //check if the number is  a prime
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) isPrime = false;
    }
    // if isPrime, then push the number into allprimes array
    if (isPrime === true) allPrimes.push(number);
  });
  //return allPrimes
  return allPrimes;
};

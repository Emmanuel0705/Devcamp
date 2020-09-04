const addUp = (numbers, number) => {
  const firstHolder = [];
  const secondHolder = [];
  let result = -1;
  numbers.forEach((n1) => {
    firstHolder.push(n1);
    firstHolder.forEach((n2) => {
      secondHolder.push(n2);
      secondHolder.forEach((n3) => {
        if (n1 + n2 + n3 === number) result = [n1, n2, n3];
      });
    });
  });
  return result;
};

console.log(addUp([4, 7, 5, 8, 1], 13));

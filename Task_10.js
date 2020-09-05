const calCulateMostOccurence = (string) => {
  let holder = {};
  const maxCharacter = [];
  for (i in string) {
    const holdersProperties = Object.getOwnPropertyNames(holder);
    holdersProperties.includes(string[i])
      ? (holder = { ...holder, [string[i]]: holder[string[i]] + 1 })
      : (holder = { ...holder, [string[i]]: 1 });
  }
  const max = Math.max(...Object.values(holder));
  for (i in holder) {
    if (max === holder[i]) maxCharacter.push(i);
  }
  return maxCharacter.length === 1 ? maxCharacter[0] : maxCharacter;
};

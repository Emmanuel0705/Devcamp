const composer = (string) => {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const vowel = ["a", "e", "i", "o", "u"];
  let result = "";
  for (i in string) {
    if (!vowel.includes(string[i])) {
      alphabets.forEach((e, ind) => {
        if (e === string[i]) {
          if (vowel.includes(alphabets[ind + 1])) {
            result += alphabets[ind + 2];
            return;
          }
          result += alphabets[ind + 1];
        }
        return;
      });
      result += string[i];
    }
  }
  return result;
};

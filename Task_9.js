const palindrome = (string) => {
  if (string.split("").reverse().join("") === string) return "Yes";
  return "No";
};

const passwordValidator = (password) => {
  let strength = 0;

  //check if the password contain only string

  if (password.match(/^[A-Za-z]+$/) !== null) strength = 0;
  if (password.match(/^[0-9]+$/) !== null) strength = 1;
  if (password.match(/\d+/g) !== null && password.match(/[a-zA-Z]/) !== null)
    strength = 2;
  if (
    password.match(/\d+/g) !== null &&
    password.match(/[a-zA-Z]/) !== null &&
    password.match(/^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/) === null
  )
    strength = 3;
  return strength;
};

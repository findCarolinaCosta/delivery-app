const isValidInputs = (userEmail, userPassword) => {
  const regex = /\S+@\S+\.[a-zA-Z]+/;
  const validEmail = regex.test(userEmail);
  const numberQty = 6;

  if (validEmail && userPassword.length >= numberQty) {
    return false;
  }
  return true;
};

export default isValidInputs;

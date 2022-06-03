import axios from 'axios';

export const registerUser = async (name, email, password) => {
  try {
    const result = await axios.post('/register', {
      name,
      email,
      password,
    });
    return result;
  } catch (error) {
    return error.response;
  }
};

export const fetchProducts = async () => {
  try {
    const result = await axios('/products');
    return result;
  } catch (error) {
    return error.response;
  }
};

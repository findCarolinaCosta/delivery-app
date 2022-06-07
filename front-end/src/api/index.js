import axios from 'axios';

const login = async (email, password) => {
  try {
    const result = await axios.post('/login', {
      email,
      password,
    });
    return result;
  } catch (error) {
    return error.response;
  }
};

const registerUser = async (name, email, password) => {
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

const fetchProducts = async () => {
  try {
    const result = await axios('/products');
    return result;
  } catch (error) {
    return error.response;
  }
};

export { fetchProducts, login, registerUser };

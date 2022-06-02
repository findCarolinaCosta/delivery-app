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

export const getExample = async () => {
  try {
    const result = await axios('/rota');
    return result;
  } catch (error) {
    return error.response;
  }
};

export const genericApiResquest = axios.create({
  baseURL: 'http://localhost:3001',
});

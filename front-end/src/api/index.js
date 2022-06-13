import axios from "axios";

const login = async (email, password) => {
  try {
    const result = await axios.post("/login", {
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
    const result = await axios.post("/register", {
      name,
      email,
      password,
    });
    return result;
  } catch (error) {
    return error.response;
  }
};

const createUser = async ({ name, email, password, role }, token) => {
  try {
    const result = await axios.post(
      "/users",
      {
        name,
        email,
        password,
        role,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return result;
  } catch (error) {
    return error.response;
  }
};

const fetchUsers = async (token) => {
  try {
    const result = await axios.get("/users", {
      headers: {
        authorization: token,
      },
    });
    return result;
  } catch (error) {
    return error.response;
  }
};

const destroyUser = async (id, token) => {
  try {
    const result = await axios.delete(`/users/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return result;
  } catch (error) {
    return error.response;
  }
};

const fetchProducts = async () => {
  try {
    const result = await axios("/products");
    return result;
  } catch (error) {
    return error.response;
  }
};

const createSale = async (body, token) => {
  try {
    const result = await axios.post("/customer/checkout", body, {
      headers: {
        authorization: token,
      },
    });
    return result;
  } catch (error) {
    return error.response;
  }
};

export const genericApiResquest = axios.create({
  baseURL: "http://localhost:3001",
});

export {
  createUser,
  destroyUser,
  fetchProducts,
  fetchUsers,
  login,
  registerUser,
  createSale,
};

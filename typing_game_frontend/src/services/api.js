import axios from 'axios';

// Set up base URL for your API (backend should be running)
const API_URL = 'http://localhost:2222/api';

// Register a new user
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

// Login a user
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data;
};

// Get user profile
export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Update user high score
export const updateHighScore = async (score, token) => {
  const response = await axios.put(`${API_URL}/user/update-score`, { score }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

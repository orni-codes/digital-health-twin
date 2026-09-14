import client from './client';

export const authService = {
  // Register a new user
  register: async (userData) => {
    const response = await client.post('/auth/register', userData);
    return response.data;
  },

  // Login a user
  login: async (credentials) => {
    const response = await client.post('/auth/login', credentials);
    return response.data;
  },

  // Google OAuth login
  googleLogin: async (data) => {
    const response = await client.post('/auth/google-login', data);
    return response.data;
  },

  // Request password reset
  forgotPassword: async (email) => {
    const response = await client.post('/auth/forgot-password', { email });
    return response.data;
  },

  // Reset password
  resetPassword: async (token, newPassword) => {
    const response = await client.post('/auth/reset-password', { token, newPassword });
    return response.data;
  },

  // Health check
  checkHealth: async () => {
    const response = await client.get('/health');
    return response.data;
  }
};

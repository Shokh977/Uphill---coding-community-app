import { create } from "zustand";

import axios from "axios";

const API_URL = "https://api.uphill-tech.com";

axios.defaults.withCredentials = true;

export const useStoreAuth = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(
        `${API_URL}/api/auth/signup`,
        {
          email,
          password,
          name,
        },
        { withCredentials: true }
      );
      set({ user: res.data.user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({
        error: res.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(
        `${API_URL}/api/auth/verify-email`,
        { code },
        {
          withCredentials: true,
        }
      );

      set({ user: res.data.user, isAuthenticated: true, isLoading: false });

      console.log(res.data, "Response from verify email"); // Debugging
      return res.data;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error verifying email",
        isLoading: false,
      });
      throw error;
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const res = await axios.get(`${API_URL}/api/auth/check-auth`, {
        withCredentials: true,
      });
      set({
        user: res.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(
        `${API_URL}/api/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      set({
        user: res.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/api/auth/logout`);
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.res?.data?.message || "Error logging out",
        isLoading: false,
      });
      throw error;
    }
  },
  forgotPassword: async (email) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const res = await axios.post(`${API_URL}/api/auth/forgot-password`, {
        email,
      });
      set({ message: res.data.message, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error:
          error.response.data.message || "Error sending reset password email",
      });
      throw error;
    }
  },
  resetPassword: async (token, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(
        `${API_URL}/api/auth/reset-password/${token}`,
        { password }
      );
      set({ isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error: res.data.error.message || "Error resetting password",
      });
      throw error;
    }
  },
}));

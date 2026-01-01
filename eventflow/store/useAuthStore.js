import create from "zustand";
import * as authService from "../services/authService";

const useAuthStore = create((set) => ({
  user: null,
  login: async (email, password) => {
    try {
      const user = await authService.login(email, password);
      set({ user });
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  logout: async () => {
    await authService.logout();
    set({ user: null });
  },
}));

export default useAuthStore;

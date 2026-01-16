// store/useAuthStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { User } from "next-auth";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setIsAuthenticated: (value: boolean) => void;
  logout: () => void;
  updateUser: (name: string, email: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setIsAuthenticated: (value) => set({ isAuthenticated: value }),

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      updateUser: (updatedName: string, updatedEmail: string) => {
        const { user, isAuthenticated } = get();

        if (user && isAuthenticated) {
          set({ user: { ...user, name: updatedName, email: updatedEmail } });
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => (state) => {
        // if (state) {
        //   state.isAuthenticated = false;
        // }
      },
    }
  )
);

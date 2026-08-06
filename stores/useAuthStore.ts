import { create } from "zustand";
import { UserResponse } from "@/api/types";
import { getMyself } from "@/api/requests";
import { toast } from "sonner";

interface AuthUser {
  user: UserResponse | null;
  setUser: (user: UserResponse) => void;
  isAuth: boolean;
  logout: () => void;
  login: (accessToken: string, refreshToken: string) => void;
}

export const useAuthStore = create<AuthUser>((set, get) => ({
  user: null,
  setUser: (user) => {
    return set(() => ({ user: user }));
  },
  isAuth: false,
  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    return set(() => ({
      user: null,
      isAuth: false,
    }));
  },
  login: async (accessToken, refreshToken) => {
    try {
          
        localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);


      const newUser = await getMyself();

      return set(() => ({
        user: newUser,
        isAuth: true,
      }));
    } catch (error) {
      toast.error(
        ("nu putem face get de profile error : " + error) as unknown as string,
      );
      get().logout()
    }
  },
}));

import { create } from "zustand";
import { User } from "../types/userTypes";

interface UsersState {
    selectedUser: Omit<User, "email"> | null;
    setSelectedUser: (user: Omit<User, "email"> | null) => void
}


export const useUserStore = create<UsersState>((set) => ({
    selectedUser: null,
    setSelectedUser: (user: Omit<User, "email"> | null) => set({ selectedUser: user }),
}))

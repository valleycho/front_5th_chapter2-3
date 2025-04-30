import { create } from "zustand";
import { UserType } from "../types/userTypes";

interface UsersState {
    selectedUser: UserType | null;
    setSelectedUser: (user: UserType | null) => void
}


export const useUserStore = create<UsersState>((set) => ({
    selectedUser: null,
    setSelectedUser: (user: UserType | null) => set({ selectedUser: user }),
}))

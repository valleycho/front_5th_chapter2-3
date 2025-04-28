import { create } from "zustand";

interface UsersState {
    selectedUser: any | null;
    setSelectedUser: (user: any | null) => void
}


export const useUsers = create<UsersState>((set) => ({
    selectedUser: null,
    setSelectedUser: (user: any | null) => set({ selectedUser: user }),
}))

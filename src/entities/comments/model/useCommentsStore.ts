import { create } from "zustand";

interface CommentsState {
    selectedComment: any | null
    setSelectedComment: (comment: any | null) => void
}

export const useCommentsStore = create<CommentsState>((set) => ({
    selectedComment: null,
    setSelectedComment: (comment: any | null) => set({ selectedComment: comment }),
}))

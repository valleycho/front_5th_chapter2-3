import { create } from "zustand";
import { CommentType } from "../types/commentTypes";

interface CommentsState {
    selectedComment: CommentType | null
    setSelectedComment: (comment: CommentType | null) => void
}

export const useCommentsStore = create<CommentsState>((set) => ({
    selectedComment: null,
    setSelectedComment: (comment: CommentType | null) => set({ selectedComment: comment }),
}))

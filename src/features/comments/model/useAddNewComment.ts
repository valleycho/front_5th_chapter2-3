import { create } from "zustand";

type NewCommentType = {
  body: string
  postId: number | null
  userId: number
}

interface AddNewCommentState {
  newComment: NewCommentType
  setNewComment: (newComment: NewCommentType) => void
}

export const useAddNewCommentStore = create<AddNewCommentState>((set) => ({
  newComment: { body: "", postId: null, userId: 1 },
  setNewComment: (newComment) => set({ newComment }),
}))

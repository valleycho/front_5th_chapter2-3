import { create } from "zustand";
import { NewComment } from "../../../entities/comments/types/commentTypes";


interface AddNewCommentState {
  newComment: NewComment
  setNewComment: (newComment: NewComment) => void
}

export const useAddNewCommentStore = create<AddNewCommentState>((set) => ({
  newComment: { body: "", postId: null, userId: 1 },
  setNewComment: (newComment) => set({ newComment }),
}))

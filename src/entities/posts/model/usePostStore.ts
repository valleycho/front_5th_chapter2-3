import { create } from "zustand";
import { PostType } from "../types/postTypes";


interface PostsState {
    selectedPost: PostType | null;
    setSelectedPost: (post: PostType) => void;
}

export const usePostStore = create<PostsState>((set) => ({
    selectedPost: null,
    setSelectedPost: (post: PostType) => set({ selectedPost: post }),
}))

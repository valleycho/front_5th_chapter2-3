import { create } from "zustand";


interface PostsState {
    selectedPost: any | null;
    setSelectedPost: (post: any | null) => void;
}

export const usePostsStore = create<PostsState>((set) => ({
    selectedPost: null,
    setSelectedPost: (post: any | null) => set({ selectedPost: post }),
}))

import { User } from "../../users/types/userTypes"

interface PostReactionsType {
    likes: number
    dislikes: number
}

export interface PostType {
    author: Omit<User, "email"> | undefined
    body: string
    id: number
    reactions: PostReactionsType
    tags: string[]
    title: string
    userId: number
    views: number
}

export interface PostResponse {
    limit: number
    posts: PostType[]
    skip: number
    total: number
}

export interface AddNewPostType {
    title: string
    body: string
    userId: number
}
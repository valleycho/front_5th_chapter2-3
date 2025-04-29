import { UserCommentType } from "../../users/types/userTypes"

export type NewComment = {
    body: string
    postId: number | null
    userId: number
}

export interface CommentType {
    body: string
    id: number
    likes: number
    postId: number
    user: UserCommentType
}

export interface CommentResponse {
    limit: number
    skip: number
    total: number
    comments: CommentType[]
}
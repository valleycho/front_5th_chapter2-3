import { useMutation } from "@tanstack/react-query"
import { useDialogStore } from "../../../shared/model/useDialogStore"
import { useAddNewCommentStore } from "./useAddNewCommentStore"
import { addCommentApi } from "../../../entities/comments/api/commentApi"
import { NewComment } from "../../../entities/comments/types/commentTypes"

export const useAddCommentMutation = () => {
    const { setShowAddCommentDialog } = useDialogStore()
    const { setNewComment } = useAddNewCommentStore()

    return useMutation({
        mutationFn: (comment: NewComment) => addCommentApi(comment),
        onSuccess: () => {
            setShowAddCommentDialog(false)
            setNewComment({ body: "", postId: null, userId: 1 })
        },
    })
}
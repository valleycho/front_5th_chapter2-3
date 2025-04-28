import { create } from "zustand";

interface DialogState {
    showAddDialog: boolean
    setShowAddDialog: (showAddDialog: boolean) => void
    showEditDialog: boolean
    setShowEditDialog: (showEditDialog: boolean) => void
    showAddCommentDialog: boolean
    setShowAddCommentDialog: (showAddCommentDialog: boolean) => void
    showEditCommentDialog: boolean
    setShowEditCommentDialog: (showEditCommentDialog: boolean) => void
    showPostDetailDialog: boolean
    setShowPostDetailDialog: (showPostDetailDialog: boolean) => void
    showUserInfoDialog: boolean
    setShowUserInfoDialog: (showUserInfoDialog: boolean) => void
}

export const useDialogStore = create<DialogState>((set) => ({
  showAddDialog: false,
  setShowAddDialog: (showAddDialog: boolean) => set({ showAddDialog }),
  showEditDialog: false,
  setShowEditDialog: (showEditDialog: boolean) => set({ showEditDialog }),
  showAddCommentDialog: false,
  setShowAddCommentDialog: (showAddCommentDialog: boolean) => set({ showAddCommentDialog }),
  showEditCommentDialog: false,
  setShowEditCommentDialog: (showEditCommentDialog: boolean) => set({ showEditCommentDialog }),
  showPostDetailDialog: false,
  setShowPostDetailDialog: (showPostDetailDialog: boolean) => set({ showPostDetailDialog }),
  showUserInfoDialog: false,
  setShowUserInfoDialog: (showUserInfoDialog: boolean) => set({ showUserInfoDialog }),
}))

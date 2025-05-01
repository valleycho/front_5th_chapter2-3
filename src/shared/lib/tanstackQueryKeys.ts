import { commentKeys } from "@/entities/comments/model/commentKeys";
import { postKeys } from "@/entities/posts/model/postKeys";
import { tagKeys } from "@/entities/tags/model/tagKeys";
import { userKeys } from "@/entities/users/model/userKeys";
import { mergeQueryKeys } from "@lukemorales/query-key-factory";


export const queryKeys = mergeQueryKeys(commentKeys, tagKeys, userKeys, postKeys)
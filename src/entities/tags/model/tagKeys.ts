import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getTagApi } from "../api/tagApi";

export const tagKeys = createQueryKeys('tags', {
    list: () => ({
        queryKey: ["list"],
        queryFn: async () => await getTagApi(),
    }),
})
import { http, HttpResponse } from "msw"
import { TEST_POSTS, TEST_SEARCH_POST, TEST_USERS } from "../../tests/mockData"

export const handlers = [
    http.get("/api/posts", () => {
        return HttpResponse.json(TEST_POSTS)
    }),

    http.get("/api/posts/search?q=His%20mother%20had%20always%20taught%20him", () => {
        return HttpResponse.json(TEST_SEARCH_POST)
    }),

    http.get("/api/users", () => {
        return HttpResponse.json(TEST_USERS)
    }),

    http.get("/api/posts/tags", () => {
        return HttpResponse.json([
            "history",
            "american",
            "crime",
            "french",
            "fiction",
            "english",
            "magical",
            "mystery",
            "love",
            "classic",
        ])
    }),
]
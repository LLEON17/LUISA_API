import { getJSON } from "./http.js";

// GET /users/:id/posts
export const getPostsByUser = (userId) => getJSON(`/users/${userId}/posts`);

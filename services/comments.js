import { getJSON } from "./http.js";

// GET /posts/:id/comments  (los comentarios pertenecen a un post, no a un usuario)
export const getCommentsByPost = (postId) => getJSON(`/posts/${postId}/comments`);

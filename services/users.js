import { getJSON } from "./http.js";

// GET /users/:id
export const getUser = (id) => getJSON(`/users/${id}`);

// GET /users/:id/todos
export const getTodosByUser = (userId) => getJSON(`/users/${userId}/todos`);

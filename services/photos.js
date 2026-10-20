import { getJSON } from "./http.js";

// GET /users/:id/albums
export const getAlbumsByUser = (userId) => getJSON(`/users/${userId}/albums`);

// GET /albums/:id/photos
export const getPhotosByAlbum = (albumId) => getJSON(`/albums/${albumId}/photos`);

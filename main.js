import {
  getUser,
  getTodosByUser,
  getPostsByUser,
  getCommentsByPost,
  getAlbumsByUser,
  getPhotosByAlbum,
} from "./services/index.js";

async function getUserFullInfo(userId) {
  // Paso 1: obtener el usuario
  const user = await getUser(userId);

  // Paso 2: con el id del usuario, pedir sus recursos directos en paralelo
  const [posts, albums, todos] = await Promise.all([
    getPostsByUser(user.id),
    getAlbumsByUser(user.id),
    getTodosByUser(user.id),
  ]);

  // Paso 3: usuario → posts → comentarios (por postId)
  const postsWithComments = await Promise.all(
    posts.map(async (post) => ({
      ...post,
      comments: await getCommentsByPost(post.id),
    }))
  );

  // Paso 4: usuario → álbumes → fotos (por albumId)
  const albumsWithPhotos = await Promise.all(
    albums.map(async (album) => ({
      ...album,
      photos: await getPhotosByAlbum(album.id),
    }))
  );

  return { user, posts: postsWithComments, albums: albumsWithPhotos, todos };
}

try {
  const resultado = await getUserFullInfo(1);
  // Único console.log final con el objeto completo
  console.log(JSON.stringify(resultado, null, 2));
} catch (error) {
  console.error("No se pudo obtener la información:", error.message);
}

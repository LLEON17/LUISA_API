// Cliente HTTP base: una sola función reutilizable
export const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getJSON(path) {
  const response = await fetch(`${BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Error ${response.status} al consultar ${path}`);
  }
  return response.json();
}

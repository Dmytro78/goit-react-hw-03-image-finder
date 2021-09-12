function fatchImage(searchName, pages) {
  const key = '22640330-7a3d8d7b0f506b04b575708a2';
  return fetch(
    `https://pixabay.com/api/?q=${searchName}&page=${pages}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`no images on request`));
  });
}
const api = { fatchImage };

export default api;
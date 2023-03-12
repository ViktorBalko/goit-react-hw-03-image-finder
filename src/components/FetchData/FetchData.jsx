export const fetchImages = async (query, perPage, page) => {
  const url = `https://pixabay.com/api/?key=31872244-df87400a708b3358ddd0a9545&q=${query}&image_type=all&orientation=horizontal&per_page=${perPage}&page=${page}`;
  const responce = await fetch(url);
  return await responce.json();
};

export default fetchImages;

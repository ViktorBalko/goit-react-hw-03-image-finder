export const fetchImages = async (query, page) => {
  const url = `https://pixabay.com/api/?key=31872244-df87400a708b3358ddd0a9545&q=${query}&image_type=all&orientation=horizontal&per_page=12&page=${page}`;
  const response = await fetch(url);
  return await response.json();
};

export default fetchImages;

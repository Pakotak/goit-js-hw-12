// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:
// getImagesByQuery(query, page). Ця функція повинна приймати два параметри query (пошукове слово, яке є рядком) 
// та page (номер сторінки, яка є числом), здійснювати HTTP-запит і повертати значення властивості data з отриманої 
// відповіді.

import axios from "axios";

const API_KEY = "54613743-5c52f100f8c0e070db7d9ab0d"; 
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 15;

axios.defaults.baseURL = BASE_URL;

export async function getImagesByQuery(query, page) {
  const response = await axios.get("", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page,
      per_page: PER_PAGE,
    },
  });

  return response.data;
}
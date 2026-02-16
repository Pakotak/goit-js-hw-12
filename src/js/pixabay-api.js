// Для організації коду використовуй модульність та синтаксис export/import.
// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:
// getImagesByQuery(query).Ця функція повинна приймати один параметр query(пошукове слово, яке є рядком),
//     здійснювати HTTP - запит і повертати значення властивості data з отриманої відповіді.

import axios from "axios";

const API_KEY = "54613743-5c52f100f8c0e070db7d9ab0d";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    })
    .then((res) => res.data);
}
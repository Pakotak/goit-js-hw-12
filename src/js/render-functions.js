

// У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції 
// для відображення елементів інтерфейсу:
// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, 
// додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");
const loaderEl = document.querySelector(".loader");

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

export function showLoader() {
  if (!loaderEl) return;
  loaderEl.classList.add("is-active");
}

export function hideLoader() {
  if (!loaderEl) return;
  loaderEl.classList.remove("is-active");
}

export function clearGallery() {
  if (!galleryEl) return;
  galleryEl.innerHTML = "";
}

export function createGallery(images) {
  if (!galleryEl) return;

  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${likes}</p>
            <p class="info-item"><b>Views</b> ${views}</p>
            <p class="info-item"><b>Comments</b> ${comments}</p>
            <p class="info-item"><b>Downloads</b> ${downloads}</p>
          </div>
        </li>
      `
    )
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}
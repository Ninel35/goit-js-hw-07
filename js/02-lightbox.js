import { galleryItems } from './gallery-items.js';
// Change code below this line

const listUl = document.querySelector(".gallery");

const markup = galleryItems.map(elem => ` <li class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      alt="${elem.description}"
    />
 </a>
</li>`).join("");
listUl.insertAdjacentHTML("afterbegin", markup)

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});



console.log(galleryItems);

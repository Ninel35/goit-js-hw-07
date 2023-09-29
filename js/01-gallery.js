import { galleryItems } from './gallery-items.js';


const listUl = document.querySelector(".gallery");

const markup = galleryItems.map(elem => ` <li class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
 </a>
</li>`).join("");
listUl.insertAdjacentHTML("afterbegin", markup);

listUl.addEventListener("click", selectImg);

function selectImg(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget)  return;

const instance = basicLightbox.create(`
    <img src= '${evt.target.dataset.source}'>
`)

  instance.show()    
 document.addEventListener("keydown", event => {
  if (event.code !== "Escape") {
      return;
  }
   instance.close(); 
});    
}
console.log(galleryItems);

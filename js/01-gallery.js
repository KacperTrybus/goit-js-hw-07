import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const newLiItem = document.createElement("li");
  const newImage = document.createElement("img");

  newImage.src = image.preview; // src dla img
  newLiItem.append(newImage); //img do li
  galleryList.append(newLiItem); //
  newLiItem.classList.add("gallery__item");
  newImage.classList.add("gallery__image");
});

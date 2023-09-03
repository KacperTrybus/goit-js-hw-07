import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const newLiItem = document.createElement("li");
  const newDiv = document.createElement("div");
  const newLink = document.createElement("a");
  const newImage = document.createElement("img");
  newImage.className = "gallery__image";
  newImage.src = image.preview;
  newImage.setAttribute("data-source", `${image.original}`);
  newImage.alt = "Image description";

  galleryList.append(newLiItem); // li do ul

  newLiItem.append(newDiv); //div do li
  newDiv.classList.add("gallery__item");

  newDiv.append(newLink); //a do div
  newLink.classList.add("gallery__link");

  newLink.append(newImage); //img do a
  newImage.classList.add("gallery__image");

  newDiv.addEventListener("click", displayOriginalImg);

  function displayOriginalImg() {
    const bigImage = basicLightbox.create(`<img src="${image.original}">`);
    bigImage.show();
  }
});

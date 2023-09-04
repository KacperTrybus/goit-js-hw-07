import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const newLiItem = document.createElement("li");
  const newImage = document.createElement("img");
  const newLink = document.createElement("a");
  newLink.className = "gallery__item";
  newLink.setAttribute("href", `${image.original}`); // href do a
  newLink.addEventListener("click", (event) => {
    event.preventDefault();
  });

  galleryList.append(newLiItem); //li do ul
  newLiItem.append(newLink); //a do li
  newLink.append(newImage); // img do a

  newImage.classList.add("gallery__image"); //klasa do img
  newImage.src = image.preview; // src do img
  newImage.alt = "Image description"; // desc
});

let galleryLightbox = new SimpleLightbox(".gallery__item", {
  captionType: "attr",
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
});

function showAdditionalImage(image) {
    var additionalImage = document.getElementById("additionalImage");
    additionalImage.style.backgroundImage = "url(" + image.src + ")";
  }

  // Récupérer l'élément avec l'ID "image-cercle"
var imagePresentation = document.getElementById("image-presentation");

// Récupérer l'élément avec la classe ".cellule-presentation"
var cellulePresentation = document.querySelector(".cellule-presentation");

// Récupérer l'URL de l'image à partir de l'attribut "data-image-url"
var imageUrl = cellulePresentation.getAttribute("data-image-url");

// Appliquer l'URL de l'image à l'attribut "src" de l'élément image
imagePresentation.src = imageUrl;

// Récupérer l'élément avec l'ID "image-cercle"
var imagePouvoir = document.getElementById("image-pouvoir");

// Récupérer l'élément avec la classe ".cellule-presentation"
var cellulePresentation = document.querySelector(".cellule-combat");

// Récupérer l'URL de l'image à partir de l'attribut "data-image-url"
var imageUrl = cellulePresentation.getAttribute("data-image-url");

// Appliquer l'URL de l'image à l'attribut "src" de l'élément image
imagePouvoir.src = imageUrl;
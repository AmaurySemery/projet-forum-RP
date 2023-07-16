function showAdditionalImage(image) {
    var additionalImage = document.getElementById("additionalImage");
    additionalImage.style.backgroundImage = "url(" + image.src + ")";
  }

function afficherImage(elementImageId, celluleSelector) {
  var imageElement = document.getElementById(elementImageId);
  var celluleElement = document.querySelector(celluleSelector);
  var imageUrl = celluleElement.getAttribute("data-image-url");
  imageElement.src = imageUrl;
}

afficherImage("image-presentation", ".cellule-presentation");
afficherImage("image-pouvoir", ".cellule-combat");
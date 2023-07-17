window.addEventListener('scroll', function() {
  var navigationLeft = document.querySelector('.navigation');
  var navigationRight = document.querySelector('.navigation.navigation-right');
  var headerHeight = document.querySelector('header').offsetHeight;

  if (window.pageYOffset > headerHeight) {
    navigationLeft.classList.add('fixed');
    navigationRight.classList.add('fixed');
  } else {
    navigationLeft.classList.remove('fixed');
    navigationRight.classList.remove('fixed');
  }
});

function showAdditionalImage(image) {
  var additionalImage = document.getElementById("additionalImage");
  additionalImage.style.backgroundImage = "url(" + image.src + ")";
}

function afficherImage(elementImageId, celluleSelector) {
  var imageElement = document.getElementById(elementImageId);
  var celluleElement = document.querySelector(celluleSelector);
  var imageUrl = celluleElement.getAttribute("data-image-url");
  var backgroundUrl = celluleElement.getAttribute("data-background-url");

  if (imageUrl) {
      imageElement.src = imageUrl;
  } else {
      imageElement.style.display = "none";
  }

  if (backgroundUrl) {
      celluleElement.style.backgroundImage = "url('" + backgroundUrl + "')";
  } else {
      celluleElement.style.backgroundImage = "none";
  }
}

afficherImage("image_presentation", ".cellule_presentation");
afficherImage("image_pouvoir", ".cellule_combat");

// Define the data for each faction
var factionData = {
  "id-en-cours": {
    presentationUrl: "https://i88.servimg.com/u/f88/18/85/03/67/1e141c10.jpg",
    combatUrl: "https://i88.servimg.com/u/f88/18/85/03/67/e56d4010.jpg",
    backgroundPosition: "center 60%"
  },
  "id-faction-1": {
    presentationUrl: "https://i88.servimg.com/u/f88/18/85/03/67/5e42c212.jpg",
    combatUrl: "https://i.servimg.com/u/f36/20/47/50/10/prana10.png",
    backgroundPosition: "center 20%"
  },
  "id-faction-2": {
    presentationUrl: "https://i88.servimg.com/u/f88/18/85/03/67/52ebde11.jpg",
    combatUrl: "https://i.servimg.com/u/f36/20/47/50/10/mana10.png",
    backgroundPosition: "center 20%"
  },
  "id-faction-3": {
    presentationUrl: "https://i88.servimg.com/u/f88/18/85/03/67/e211011.jpg",
    combatUrl: "https://i.servimg.com/u/f36/20/47/50/10/aura10.png",
    backgroundPosition: "center 20%"
  },
  "id-faction-4": {
    presentationUrl: "https://i88.servimg.com/u/f88/18/85/03/67/e18db811.jpg",
    combatUrl: "https://i.servimg.com/u/f36/20/47/50/10/force10.png",
    backgroundPosition: "center 20%"
  }
};

// Get all the cells in the second column by their IDs
var selectionCells = document.querySelectorAll("#id-en-cours, #id-faction-1, #id-faction-2, #id-faction-3, #id-faction-4");

// Add click event listener to each cell
selectionCells.forEach(function(cell) {
  cell.addEventListener("click", function() {
    var presentationCell = document.querySelector(".cellule_presentation");
    var combatCell = document.querySelector(".cellule_combat");

    // Get the faction data based on the cell ID
    var faction = factionData[this.id];

    // Update presentation cell
    presentationCell.setAttribute("data-background-url", faction.presentationUrl);
    presentationCell.style.backgroundImage = "url('" + faction.presentationUrl + "')";
    presentationCell.style.backgroundPosition = faction.backgroundPosition;
    presentationCell.style.opacity = "1";

    // Update combat cell
    combatCell.setAttribute("data-background-url", faction.combatUrl);
    combatCell.style.backgroundImage = "url('" + faction.combatUrl + "')";
    combatCell.style.backgroundPosition = "top right";
    combatCell.style.opacity = "1";
  });
});



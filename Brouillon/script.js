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

document.addEventListener('DOMContentLoaded', function() {
  var sonarElements = document.querySelectorAll('.sonar-1, .sonar-2, .sonar-3, .sonar-4, .sonar-5, .sonar-6, .sonar-7, .sonar-8');

  var associationSonarAffichage = {
    'sonar-1': 'neshraun',
    'sonar-2': 'ker-vashterion',
    'sonar-3': 'althela',
    'sonar-4': 'saint-empire',
    'sonar-5': 'matergabia',
    'sonar-6': 'paracelse',
    'sonar-7': 'kerma',
    'sonar-8': 'dar-es-balat',
  };

  sonarElements.forEach(function(sonar) {
    sonar.addEventListener('click', function() {
      var sonarId = sonar.classList[0];
      var affichageId = associationSonarAffichage[sonarId];
      afficherConteneur(affichageId);
      masquerSonars(sonarElements);
      afficherActualiserButton(); // Afficher actualiser-button à chaque clic sur un élément de associationSonarAffichage
    });
  });

  var actualiserButton = document.querySelector('.actualiser-button');
  actualiserButton.addEventListener('click', function() {
    afficherConteneur('accueil');
    afficherSonars(sonarElements); // Rendre les éléments de associationSonarAffichage visibles
    cacherActualiserButton(); // Cacher actualiser-button lorsqu'on clique dessus
  });

});

function afficherConteneur(affichageId) {
  var conteneurs = document.querySelectorAll('.conteneur');
  conteneurs.forEach(function(conteneur) {
    conteneur.style.visibility = 'hidden';
  });

  var conteneurCible = document.querySelector('.' + affichageId);
  conteneurCible.style.visibility = 'visible';
}

function masquerSonars(sonarElements) {
  sonarElements.forEach(function(sonar) {
    sonar.style.visibility = 'hidden';
  });
}

function afficherSonars(sonarElements) {
  sonarElements.forEach(function(sonar) {
    sonar.style.visibility = 'visible';
  });
}

function afficherActualiserButton() {
  var actualiserButton = document.querySelector('.actualiser-button');
  actualiserButton.style.visibility = 'visible';
}

function cacherActualiserButton() {
  var actualiserButton = document.querySelector('.actualiser-button');
  actualiserButton.style.visibility = 'hidden';
}


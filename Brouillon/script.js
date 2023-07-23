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
    combatUrl: "https://i36.servimg.com/u/f36/20/47/50/10/pouvoi12.jpg",
    backgroundPosition: "center 60%"
  },
  "id-faction-1": {
    presentationUrl: "https://i88.servimg.com/u/f88/18/85/03/67/5e42c212.jpg",
    combatUrl: "https://i36.servimg.com/u/f36/20/47/50/10/pouvoi13.jpg",
    backgroundPosition: "center 20%"
  },
  "id-faction-2": {
    presentationUrl: "https://i88.servimg.com/u/f88/18/85/03/67/52ebde11.jpg",
    combatUrl: "https://i36.servimg.com/u/f36/20/47/50/10/pouvoi14.jpg",
    backgroundPosition: "center 20%"
  },
  "id-faction-3": {
    presentationUrl: "https://i88.servimg.com/u/f88/18/85/03/67/e211011.jpg",
    combatUrl: "https://i36.servimg.com/u/f36/20/47/50/10/pouvoi15.jpg",
    backgroundPosition: "center 20%"
  },
  "id-faction-4": {
    presentationUrl: "https://i88.servimg.com/u/f88/18/85/03/67/e18db811.jpg",
    combatUrl: "https://i36.servimg.com/u/f36/20/47/50/10/pouvoi16.jpg",
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
  var sonarElements = document.querySelectorAll('.sonar-1, .sonar-2, .sonar-3, .sonar-4, .sonar-5, .sonar-6, .sonar-7, .sonar-8, .sonar-saint-empire, .sonar-laconia, .sonar-erobern, .sonar-llygredd, .sonar-khidesh, .sonar-lontemar');

  var categorie = document.querySelector('.categorie');

  var associationSonarAffichage = {
    'sonar-1': 'neshraun',
    'sonar-2': 'ker-vashterion',
    'sonar-3': 'althela',
    'sonar-4': 'saint-empire',
    'sonar-5': 'matergabia',
    'sonar-6': 'paracelse',
    'sonar-7': 'kerma',
    'sonar-8': 'dar-es-balat',
    'sonar-saint-empire': 'saint-empire',
    'sonar-laconia': 'saint-empire-laconia',
    'sonar-erobern': 'saint-empire-erobern',
    'sonar-llygredd': 'saint-empire-llygredd',
    'sonar-khidesh': 'saint-empire-khidesh',
    'sonar-lontemar': 'saint-empire-lontemar',
  };


  // Masquer tous les éléments, sauf les 8 premiers
  masquerSonars(sonarElements, true);

  var actualiserButton = document.querySelector('.actualiser-button');
  actualiserButton.addEventListener('click', function() {
    afficherConteneur('accueil');
    masquerSonars(sonarElements, true); // Masquer les éléments jusqu'au 8ème index
    cacherActualiserButton(); // Cacher actualiser-button lorsqu'on clique dessus
    currentSonar = null; // Réinitialiser l'élément sonar sélectionné actuellement
  });

  sonarElements.forEach(function(sonar) {
    sonar.addEventListener('click', function() {
      var sonarId = sonar.classList[0];
      var affichageId = associationSonarAffichage[sonarId];

      afficherConteneur(affichageId);

      if (sonarId === 'sonar-4' || sonarId === 'sonar-saint-empire' || sonarId === 'sonar-laconia' || sonarId === 'sonar-erobern' || sonarId === 'sonar-llygredd' || sonarId === 'sonar-khidesh' || sonarId === 'sonar-lontemar') {
        masquerSonars(sonarElements, false); // Afficher les 6 derniers éléments si c'est "sonar-4"
      } else {
        masquerSonars(sonarElements, true); // Afficher les 8 premiers éléments pour les autres sonars
      }

      afficherActualiserButton();
    });
  });

  function afficherConteneur(affichageId) {
    var conteneurs = document.querySelectorAll('.conteneur');
    conteneurs.forEach(function(conteneur) {
      if (conteneur.classList.contains(affichageId)) {
        conteneur.style.visibility = 'visible'; // Afficher le conteneur cible
      } else {
        conteneur.style.visibility = 'hidden'; // Masquer les autres conteneurs
      }
    });

    // Afficher le conteneur "categorie" seulement lorsque ce n'est pas "sonar-laconia"
    if (affichageId !== 'sonar-laconia') {
      categorie.style.display = 'block';
    } else {
      categorie.style.display = 'none';
    }
  }

  function masquerSonars(sonarElements, showFirstEight) {
    sonarElements.forEach(function(sonar, index) {
      if (showFirstEight) {
        if (index < 8) {
          sonar.style.visibility = 'visible';
        } else {
          sonar.style.visibility = 'hidden';
        }
      } else {
        if (index >= 8) {
          sonar.style.visibility = 'visible';
        } else {
          sonar.style.visibility = 'hidden';
        }
      }
    });
  }

  function afficherActualiserButton() {
    actualiserButton.style.visibility = 'visible';
  }

  function cacherActualiserButton() {
    actualiserButton.style.visibility = 'hidden';
  }
});

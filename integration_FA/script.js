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

document.addEventListener("DOMContentLoaded", function () {
  var categorieElements = document.querySelectorAll('.fil-categorie[data-id="c2"]');
  
  categorieElements.forEach(function (categorieElement) {
    // Votre code JavaScript actuel
    function afficherImage(elementImageId, celluleSelector) {
      var imageElement = categorieElement.querySelector('#' + elementImageId);
      var celluleElement = categorieElement.querySelector(celluleSelector);
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

    var factionData = {
      "id-en-cours": {
        presentationUrl: "https://i88.servimg.com/u/f88/18/85/03/67/1e141c10.jpg",
        combatUrl: "https://forum.xboxera.com/uploads/default/original/2X/7/709bd43b30ff1da6cf523b420b01b417bd2f9a11.gif",
        combatLink: "https://ficexmachina.forumactif.com/f36-pouvoirs",
        presentationLink: "https://ficexmachina.forumactif.com/f35-personnages",
        backgroundPosition: "center 60%"
      },
      "id-faction-1": {
        presentationUrl: "https://i88.servimg.com/u/f88/18/85/03/67/5e42c212.jpg",
        combatUrl: "https://media.tenor.com/T1wrE0tbgjwAAAAd/soraka-healbank.gif",
        combatLink: "https://ficexmachina.forumactif.com/f41-pouvoirs",
        presentationLink: "https://ficexmachina.forumactif.com/f37-personnages",
        backgroundPosition: "center 20%"
      },
      "id-faction-2": {
        presentationUrl: "https://i36.servimg.com/u/f36/20/47/50/10/52ebde10.png",
        combatUrl: "https://media.tenor.com/6EQy-Mczv0gAAAAC/swain-lol.gif",
        combatLink: "https://ficexmachina.forumactif.com/f69-pouvoirs",
        presentationLink: "https://ficexmachina.forumactif.com/f68-personnages",
        backgroundPosition: "center 20%"
      },
      "id-faction-3": {
        presentationUrl: "https://i36.servimg.com/u/f36/20/47/50/10/e211010.png",
        combatUrl: "https://64.media.tumblr.com/9ed8f2687c5f79344844d4d2b92f9776/88fd5a8036642eca-f2/s540x810/933fb6be6595f2dac79c5c3e3829b9734c85e70f.gif",
        combatLink: "https://ficexmachina.forumactif.com/f73-pouvoirs",
        presentationLink: "https://ficexmachina.forumactif.com/f70-personnages",
        backgroundPosition: "center 20%"
      },
      "id-faction-4": {
        presentationUrl: "https://i36.servimg.com/u/f36/20/47/50/10/e18db810.png",
        combatUrl: "https://i.redd.it/jduoixesyfw51.gif",
        combatLink: "https://ficexmachina.forumactif.com/f71-pouvoirs",
        presentationLink: "https://ficexmachina.forumactif.com/f72-personnages",
        backgroundPosition: "center 20%"
      }
    };

    var selectionCells = categorieElement.querySelectorAll("#id-en-cours, #id-faction-1, #id-faction-2, #id-faction-3, #id-faction-4");

    function updateCells(faction) {
      var presentationCell = categorieElement.querySelector(".cellule_presentation");
      var combatCell = categorieElement.querySelector(".cellule_combat");

      var presentationLink = presentationCell.querySelector("a");
      presentationLink.href = faction.presentationLink;

      var combatLink = combatCell.querySelector("a");
      combatLink.href = faction.combatLink;

      presentationCell.setAttribute("data-background-url", faction.presentationUrl);
      presentationCell.style.backgroundImage = "url('" + faction.presentationUrl + "')";
      presentationCell.style.backgroundPosition = faction.backgroundPosition;
      presentationCell.style.opacity = "1";
      categorieElement.querySelector("#image_presentation").src = faction.presentationAvatar;

      combatCell.setAttribute("data-background-url", faction.combatUrl);
      combatCell.style.backgroundImage = "url('" + faction.combatUrl + "')";
      combatCell.style.backgroundPosition = "top right";
      combatCell.style.opacity = "1";
      categorieElement.querySelector("#image_pouvoir").src = faction.combatAvatar;
    }

    selectionCells.forEach(function (cell) {
      cell.addEventListener("click", function () {
        var faction = factionData[this.id];
        updateCells(faction);
      });
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var sonarElements = document.querySelectorAll('.sonar-1, .sonar-2, .sonar-3, .sonar-4, .sonar-5, .sonar-6, .sonar-7, .sonar-8, .sonar-saint-empire, .sonar-laconia, .sonar-erobern, .sonar-llygredd, .sonar-khidesh, .sonar-lontemar, .sonar-maur-olosta');

  var forabg = document.querySelector('.forabg');

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
    'sonar-maur-olosta': 'saint-empire-maur-olosta',
  };


  // Masquer tous les éléments, sauf les 8 premiers
  masquerSonars(sonarElements, true);

  var actualiserButton = document.querySelector('.actualiser-button');
  actualiserButton.addEventListener('click', function() {
    afficherConteneur('accueil');
    masquerSonars(sonarElements, true);
    cacherActualiserButton();
    currentSonar = null;
  });

  sonarElements.forEach(function(sonar) {
    sonar.addEventListener('click', function() {
      var sonarId = sonar.classList[0];
      var affichageId = associationSonarAffichage[sonarId];

      afficherConteneur(affichageId);

      if (sonarId === 'sonar-4' || sonarId === 'sonar-saint-empire' || sonarId === 'sonar-laconia' || sonarId === 'sonar-erobern' || sonarId === 'sonar-llygredd' || sonarId === 'sonar-khidesh' || sonarId === 'sonar-lontemar' || sonarId === 'sonar-maur-olosta') {
        masquerSonars(sonarElements, false);
      } else {
        masquerSonars(sonarElements, true);
      }

      afficherActualiserButton();
    });
  });

  function afficherConteneur(affichageId) {
    var conteneurs = document.querySelectorAll('.conteneur');
    conteneurs.forEach(function(conteneur) {
      if (conteneur.classList.contains(affichageId)) {
        conteneur.style.visibility = 'visible';
      } else {
        conteneur.style.visibility = 'hidden';
      }
    });

    if (affichageId !== 'sonar-laconia') {
      forabg.style.display = 'block';
    } else {
      forabg.style.display = 'none';
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

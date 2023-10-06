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
        presentationUrl: "https://i.servimg.com/u/f88/18/85/03/67/1e141c10.jpg",
        combatUrl: "https://forum.xboxera.com/uploads/default/original/2X/7/709bd43b30ff1da6cf523b420b01b417bd2f9a11.gif",
        combatLink: "https://ficexmachina.forumactif.com/f36-pouvoirs",
        presentationLink: "https://ficexmachina.forumactif.com/f35-personnages",
        backgroundPosition: "center 60%"
      },
      "id-faction-1": {
        presentationUrl: "https://i.servimg.com/u/f88/18/85/03/67/5e42c212.jpg",
        combatUrl: "https://media.tenor.com/T1wrE0tbgjwAAAAd/soraka-healbank.gif",
        combatLink: "https://ficexmachina.forumactif.com/f41-pouvoirs",
        presentationLink: "https://ficexmachina.forumactif.com/f37-personnages",
        backgroundPosition: "center 20%"
      },
      "id-faction-2": {
        presentationUrl: "https://i.servimg.com/u/f36/20/47/50/10/52ebde10.png",
        combatUrl: "https://media.tenor.com/6EQy-Mczv0gAAAAC/swain-lol.gif",
        combatLink: "https://ficexmachina.forumactif.com/f69-pouvoirs",
        presentationLink: "https://ficexmachina.forumactif.com/f68-personnages",
        backgroundPosition: "center 20%"
      },
      "id-faction-3": {
        presentationUrl: "https://i.servimg.com/u/f36/20/47/50/10/e211010.png",
        combatUrl: "https://64.media.tumblr.com/9ed8f2687c5f79344844d4d2b92f9776/88fd5a8036642eca-f2/s540x810/933fb6be6595f2dac79c5c3e3829b9734c85e70f.gif",
        combatLink: "https://ficexmachina.forumactif.com/f73-pouvoirs",
        presentationLink: "https://ficexmachina.forumactif.com/f70-personnages",
        backgroundPosition: "center 20%"
      },
      "id-faction-4": {
        presentationUrl: "https://i.servimg.com/u/f36/20/47/50/10/e18db810.png",
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
  var sonarElements = document.querySelectorAll(
    '.fil-forum[id^="/f32-"], ' +
    '.fil-forum[id^="/f21-"], ' +
    '.fil-forum[id^="/f20-"], ' +
    '.fil-forum[id^="/f22-"], ' +
    '.fil-forum[id^="/f23-"], ' +
    '.fil-forum[id^="/f33-"], ' +
    '.fil-forum[id^="/f31-"], ' +
    '.fil-forum[id^="/f24-"], ' +
    '.fil-forum[id^="/f29-"], ' +
    '.fil-forum[id^="/f27-"], ' +
    '.fil-forum[id^="/f28-"], ' +
    '.fil-forum[id^="/f26-"], ' +
    '.fil-forum[id^="/f57-"]'
  );

  sonarElements.forEach(function(sonar) {
    sonar.addEventListener('click', function() {
      if (sonar.classList.contains('clic-active')) {
        // Si l'élément est déjà actif, le désactiver
        sonar.classList.remove('clic-active');
        sonar.style.display = 'block';

        // Réafficher tous les éléments .fil-forum
        sonarElements.forEach(function(element) {
          element.style.display = 'block';
        });

        // Rétablir l'affichage par défaut de l'élément .fil-categorie[data-id="c3"]
        var defaultDisplay = 'block'; // Rétablir en block
        sonar.querySelector('.fil-categorie[data-id="c3"] .fil-titre').style.display = defaultDisplay;
        
        // Masquer ces éléments
        sonar.querySelector('.fil-categorie[data-id="c3"] .fil-stats').style.display = 'none';
        sonar.querySelector('.fil-categorie[data-id="c3"] .fil-sous-forum').style.display = 'none';
        sonar.querySelector('.fil-categorie[data-id="c3"] .fil-lastpost').style.display = 'none';          
        sonar.querySelector('.fil-categorie[data-id="c3"] .fil-desc').style.display = 'none';
      } else {
        // Activer l'élément cliqué
        sonarElements.forEach(function(element) {
          element.classList.remove('clic-active');
          if (element !== sonar) {
            element.style.display = 'none';
          }
        });
        sonar.classList.add('clic-active');
        sonar.querySelector('.fil-categorie[data-id="c3"] .fil-titre').style.display = 'none';
        
        // Afficher ces éléments
        sonar.querySelector('.fil-categorie[data-id="c3"] .fil-stats').style.display = 'block';
        sonar.querySelector('.fil-categorie[data-id="c3"] .fil-sous-forum').style.display = 'block';
        sonar.querySelector('.fil-categorie[data-id="c3"] .fil-lastpost').style.display = 'block';          
        sonar.querySelector('.fil-categorie[data-id="c3"] .fil-desc').style.display = 'block';
      }
    });
  });
});

function actualiserPage(a){a=a.target;"button"===a.tagName.toLowerCase()||a.classList.contains("CTA")||location.reload()}window.addEventListener("scroll",function(){var a=document.querySelector(".navigation"),c=document.querySelector(".navigation.navigation-right"),b=document.querySelector("header").offsetHeight;window.pageYOffset>b?(a.classList.add("fixed"),c.classList.add("fixed")):(a.classList.remove("fixed"),c.classList.remove("fixed"))});
function showAdditionalImage(a){document.getElementById("additionalImage").style.backgroundImage="url("+a.src+")"}function afficherImage(a,c){var b=document.getElementById(a),g=document.querySelector(c),h=g.getAttribute("data-image-url"),f=g.getAttribute("data-background-url");h?b.src=h:b.style.display="none";g.style.backgroundImage=f?"url('"+f+"')":"none"}afficherImage("image_presentation",".cellule_presentation");afficherImage("image_pouvoir",".cellule_combat");
var factionData={"id-en-cours":{presentationUrl:"https://i.servimg.com/u/f88/18/85/03/67/1e141c10.jpg",combatUrl:"https://forum.xboxera.com/uploads/default/original/2X/7/709bd43b30ff1da6cf523b420b01b417bd2f9a11.gif",presentationAvatar:"https://i.servimg.com/u/f36/20/47/50/10/cesar_11.jpg",combatAvatar:"https://i.servimg.com/u/f36/20/47/50/10/b5357410.jpg",backgroundPosition:"center 60%"},"id-faction-1":{presentationUrl:"https://i.servimg.com/u/f88/18/85/03/67/5e42c212.jpg",combatUrl:"https://media.tenor.com/T1wrE0tbgjwAAAAd/soraka-healbank.gif",
presentationAvatar:"https://i.servimg.com/u/f36/20/47/50/10/julian11.jpg",combatAvatar:"https://i.servimg.com/u/f36/20/47/50/10/84174310.jpg",backgroundPosition:"center 20%"},"id-faction-2":{presentationUrl:"https://i.servimg.com/u/f36/20/47/50/10/52ebde10.png",combatUrl:"https://media.tenor.com/6EQy-Mczv0gAAAAC/swain-lol.gif",presentationAvatar:"https://i.servimg.com/u/f36/20/47/50/10/a443d110.jpg",combatAvatar:"https://i.servimg.com/u/f36/20/47/50/10/8406dc10.jpg",backgroundPosition:"center 20%"},
"id-faction-3":{presentationUrl:"https://i.servimg.com/u/f36/20/47/50/10/e211010.png",combatUrl:"https://64.media.tumblr.com/9ed8f2687c5f79344844d4d2b92f9776/88fd5a8036642eca-f2/s540x810/933fb6be6595f2dac79c5c3e3829b9734c85e70f.gif",presentationAvatar:"https://i.servimg.com/u/f36/20/47/50/10/19b73010.jpg",combatAvatar:"https://i.servimg.com/u/f36/20/47/50/10/thomas11.jpg",backgroundPosition:"center 20%"},"id-faction-4":{presentationUrl:"https://i.servimg.com/u/f36/20/47/50/10/e18db810.png",combatUrl:"https://i.redd.it/jduoixesyfw51.gif",
presentationAvatar:"https://i.servimg.com/u/f36/20/47/50/10/62876610.jpg",combatAvatar:"https://i.servimg.com/u/f36/20/47/50/10/45be9210.jpg",backgroundPosition:"center 20%"}},selectionCells=document.querySelectorAll("#id-en-cours, #id-faction-1, #id-faction-2, #id-faction-3, #id-faction-4");
function updateCells(a){var c=document.querySelector(".cellule_presentation"),b=document.querySelector(".cellule_combat");c.setAttribute("data-background-url",a.presentationUrl);c.setAttribute("data-image-url",a.presentationAvatar);c.style.backgroundImage="url('"+a.presentationUrl+"')";c.style.backgroundPosition=a.backgroundPosition;c.style.opacity="1";document.getElementById("image_presentation").src=a.presentationAvatar;b.setAttribute("data-background-url",a.combatUrl);b.setAttribute("data-image-url",
a.combatAvatar);b.style.backgroundImage="url('"+a.combatUrl+"')";b.style.backgroundPosition="top right";b.style.opacity="1";document.getElementById("image_pouvoir").src=a.combatAvatar}selectionCells.forEach(function(a){a.addEventListener("click",function(){updateCells(factionData[this.id])})});

document.addEventListener('DOMContentLoaded', function() {
    var sonarElements = document.querySelectorAll('.fil-forum[id^="/f32-"], .fil-forum[id^="/f21-"], .fil-forum[id^="/f20-"], .fil-forum[id^="/f22-"], .fil-forum[id^="/f22-"], .fil-forum[id^="/f23-"], .fil-forum[id^="/f33-"], .fil-forum[id^="/f31-"], .fil-forum[id^="/f24-"], .fil-forum[id^="/f29-"], .fil-forum[id^="/f27-"], .fil-forum[id^="/f28-"], .fil-forum[id^="/f26-"], .fil-forum[id^="/f57-"]');
  
    var neshraun = '<div class="conteneur-sonar"> \
  <table> \
    <tr> \
      <td class="cell-container"> \
        <div class="image-and-text"> \
          <img src="https://i.servimg.com/u/f36/20/47/50/10/sora-k10.jpg" alt="Image"> \
        </div> \
      </td> \
      <td rowspan="2" class="background-cell" style="background-image: url(\'https://i36.servimg.com/u/f36/20/47/50/10/freljo14.jpg\'); background-position: center;"> \
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> \
      </td> \
    </tr> \
    <tr> \
      <td rowspan="2"> \
        <table class="tableau-interne"> \
          <tr> \
            <td><h2><div class="lore">LORE</div></h2></td> \
            <td><h2>GAME</h2></td> \
          </tr> \
        </table> \
      </td> \
    </tr> \
  </table> \
</div>';

    var associationSonarAffichage = {
      'fil-forum[id^="/f32-"]': neshraun,
      'fil-forum[id^="/f21-"]': 'ker-vashterion',
      'fil-forum[id^="/f20-"]': 'althela',
      'fil-forum[id^="/f22-"]': 'saint-empire',
      'fil-forum[id^="/f22-"]': 'matergabia',
      'fil-forum[id^="/f23-"]': 'paracelse',
      'fil-forum[id^="/f33-"]': 'kerma',
      'fil-forum[id^="/f31-"]': 'dar-es-balat',
      'fil-forum[id^="/f24-"]': 'saint-empire',
      'fil-forum[id^="/f29-"]': 'saint-empire-laconia',
      'fil-forum[id^="/f27-"]': 'saint-empire-erobern',
      'fil-forum[id^="/f28-"]': 'saint-empire-llygredd',
      'fil-forum[id^="/f26-"]': 'saint-empire-khidesh',
      'fil-forum[id^="/f57-"]': 'saint-empire-lontemar'
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
      
          // Cacher le conteneur parent actuel
          var conteneurParent = sonar.closest('.conteneur');
          conteneurParent.style.visibility = 'hidden';
    
          // Injecter le code HTML approprié
          var conteneurParentHtml = conteneurParent.innerHTML;
          var nouveauContenuHtml = '<div class="' + affichageId + '">' + neshraun + '</div>';
          conteneurParent.outerHTML = conteneurParentHtml.replace(conteneurParentHtml, nouveauContenuHtml);
      
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
    }
  
    function afficherActualiserButton() {
      actualiserButton.style.visibility = 'visible';
    }
  
    function cacherActualiserButton() {
      actualiserButton.style.visibility = 'hidden';
    }
  });
  
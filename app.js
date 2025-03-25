AOS.init();
fetch("data.json")
  .then((rep) => {
    return rep.json();
  })
  .then((dataBase) => {
    console.log(dataBase);
    dataBase.forEach((ProjetSurLequelBoucle) => {
      afficheLeProjet(
        ProjetSurLequelBoucle.title,
        ProjetSurLequelBoucle.description,
        ProjetSurLequelBoucle.link,
        ProjetSurLequelBoucle.image
      );
    });
    // ProjetSurLequelBoucle.type,
    // ProjetSurLequelBoucle.HardSkills,
    // ProjetSurLequelBoucle.SoftSkills,
    // ProjetSurLequelBoucle.GroupeSolo,
  });

// R : Afficher chaque projet dans la section avec l'id #sectionProjets
// A : title, description, link, image
// R : Rien car elle affiche
function afficheLeProjet(title, description, link, image) {
  let divProjet = `
        <a  href="${link}" target="_blank" id="link" class="cardWidth">

            <div class="FlexRow SpcBtwn outline AlgnItmCntr">
                <img src="${image}" alt="Image de pâtisserie" id="image"/>
                <div class="Wdth300 AlgnItmCntr">
                    <h3 id="title">${title}</h3>
                    <p id="description">${description}</p>
                </div>
            </div>
        </a>
        `;
  document.querySelector("#sectionProjets").innerHTML += divProjet;
}

// Fonction pour générer le contenu du pitch
function afficherPitch() {
  return `
    <p class="ch60">Bonjour, merci de l'intérêt que vous portez à mon profil.</p>
<p class="ch60">Je m’appelle Sébastien, j’ai 36 ans, et d'ici 5 ans je veux être Pentester Junior. Pour atteindre mon but je voudrais faire un parcours en alternance en cybersécurité au sein de votre école.</p>
<p class="ch60">Mais avant de jeter mon dévolu sur une carrière en cybersécurité j’ai eu un long parcours où j'ai occupé des postes très différents jusqu’à ce que je traverse une épreuve difficile il y a de ça 3 ans. Une épreuve qui m’a donner envie de passer de “Il faut faire” à “Je veux faire”.</p>
<p class="ch60">Entre mes activités bénévoles et les nombreux domaines dans lesquelles j’ai travaillé j’ai pu développer un large éventail de compétences en vente, service client, maintenance de matériel et support technique, management, gestion de conflit, formation et pédagogie, langues mais aucune de ces métiers n’a réussi à satisfaire ma curiosité pendant très longtemps.</p>
<p class="ch60">Et c’est pour cela que je souhaite m’orienter dans le domaine de la tech, parce que j’ai une curiosité insatiable et ce domaine est une source intarissable de défis, d’innovation et surtout d’apprentissage.</p>
<p class="ch60">Ce n’est pas simplement une vague impression que j’ai mais une conviction qui provient de mon parcours récent au sein du programme La toile, l’école de la qualification numérique d’EM Lyon Business School où j’ai découvert, via la réalisation de projets, Excel, HTML, CSS, JavaScript, un peu de PhP et MySQL, l’UI/UX design et le design thinking. Et j’ai adoré.</p>
<p class="ch60">Pour en revenir à mon projet de devenir Pentester, je dois admettre que c’est un projet que je trouve intimidant mais c'est ce qui me motive à relever le défi. Et entre l’importance que j’accorde à l’éthique, ma maîtrise de l’anglais, ma curiosité et mon goût pour l'informatique. Je me sens capable d’atteindre mon objectif.</p>
    `;
}

// Sélectionner le bouton (le li avec l'id CV)
const boutonbio = document.getElementById("bio");

// Ajouter l'écouteur d'événements
if (boutonbio) {
  // Vérification pour éviter les erreurs si l'élément n'est pas trouvé
  boutonbio.addEventListener("click", () => {
    const section = document.getElementById("sectionProjets");
    if (section) {
      // Vérification pour éviter les erreurs si la section n'est pas trouvée
      section.innerHTML = afficherPitch(); // Utiliser la fonction pour générer le contenu
    } else {
      console.error("L'élément <section> n'a pas été trouvé.");
    }
  });
} else {
  console.error("L'élément avec l'ID 'bio' n'a pas été trouvé.");
}

// const boutonProjets = document.querySelector('section');
// boutonProjets.addEventListener('click', (section) => {
//     const section = document.querySelector('section');
// })

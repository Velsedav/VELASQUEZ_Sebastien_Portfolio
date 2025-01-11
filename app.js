AOS.init();
fetch("data.json")
  .then((rep) => {
    return rep.json();
  })
  .then((dataBase) => {
    console.log(dataBase);
    dataBase.forEach(ProjetSurLequelBoucle => {
         afficheLeProjet(
        ProjetSurLequelBoucle.title,
        ProjetSurLequelBoucle.description,
        ProjetSurLequelBoucle.link,
        ProjetSurLequelBoucle.image,
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
                <a
            href="${link}"
            target="_blank" id="link"
        >
            <div class="FlexRow SpcArnd outline MrgnBttm32 AlgnItmCntr">
            <img src="${image}" alt="Image de pâtisserie" id="image"/>
            <div class="Wdth300 AlgnItmCntr">
                <h3 id="title">${title}</h3>
                <p id="description">${description}</p>
            </div>
            </div>
        </a>
        `
        document.querySelector('#sectionProjets').innerHTML += divProjet
}


















// Fonction pour générer le contenu du pitch (important : c'est une fonction maintenant)
function createSkillsPitch() {
    return `
        <h2>Bio</h2>
        <p>Bonjour, merci de me recevoir.</p>
        <p>Je m’appelle Sébastien j’ai 35 ans, et dans 5 ans je veux être Pentester Junior. Pour atteindre mon but je voudrais faire un parcours en alternance en cybersécurité dans votre école.</p>
        <p>Mais avant de jeter mon dévolu sur une carrière en cybersécurité j’ai eu un long parcours où occupé des postes très différents jusqu’à ce que je traverse une épreuve difficile il y a de ça 3 ans. Une épreuve qui m’a donner envie de passer de “Il faut faire” à “Je veux faire”.</p>
        <p>Entre mes activités bénévoles et les nombreux domaines dans lesquelles j’ai travaillé j’ai pu développer un large éventail de compétences en vente, service client, maintenance de matériel et support technique, management, gestion de conflit, formation et pédagogie, langues mais aucune de ces métiers n’a réussi à satisfaire ma curiosité pendant très longtemps.</p>
        <p>Et c’est pour ça que je souhaite m’orienter vers la tech, parce que j’ai une curiosité insatiable et ce domaine est une source intarissable de défis, d’innovation et surtout d’apprentissage.</p>
        <p>Ce n’est pas simplement une vague impression que j’ai mais une conviction qui provient de mon parcours récent au sein du programme La toile, l’école de la qualification numérique d’EM Lyon Business School où j’ai découvert, via la réalisation de projets, Excel, HTML, CSS, JavaScript, un peu de PhP et MySQL, l’UI/UX design et la gestion de projet. Et j’ai adoré.</p>
        <p>Pour en revenir à mon projet de devenir Pentester, je dois admettre que c’est un projet que je trouve intimidant, c’est ça qui me motive à relever le défi. Et entre l’importance que j’accorde à l’éthique, ma maîtrise de l’anglais, ma curiosité et mon goût pour la tech. Je me sens capable d’atteindre mon objectif.</p>
    `;
}

// Sélectionner le bouton (le li avec l'id Hard-Skills)
const boutonSkills = document.getElementById('Hard-Skills');

// Ajouter l'écouteur d'événements
if (boutonSkills) { // Vérification pour éviter les erreurs si l'élément n'est pas trouvé
    boutonSkills.addEventListener('click', () => {
        const section = document.querySelector('section');
        if (section) { // Vérification pour éviter les erreurs si la section n'est pas trouvée
            section.innerHTML = createSkillsPitch(); // Utiliser la fonction pour générer le contenu
        } else {
            console.error("L'élément <section> n'a pas été trouvé.");
        }
    });
} else {
    console.error("L'élément avec l'ID 'Hard-Skills' n'a pas été trouvé.");
}
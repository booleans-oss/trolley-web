import { Chapter } from "@/utils/types";

const gameTree: Array<Chapter> = [
  {
    id: "1.1.01",
    name: "Le dilemne du tramway",
    introImage:
      "https://img.freepik.com/premium-vector/hand-drawn-doodle-folding-calendar-with-cartoon-art-style-vector-isolated_607987-881.jpg?w=2000",
    introTitle: "1er semaine: lundi",
    introDesc:
      '"Bienvenue chez Trolley Problem, Inc. fondé pour vous aider à voyager en sécurité dans tout le pays. Tous nos employés doivent adhérer aux trois valeurs suivantes : la responsabilité, l\'intégrité et le respect. Ceci étant dit, commençons votre formation."',
    desc: "\"Un tramway hors de contrôle file sur les rails. Plus loin, sur la même voie, se trouvent cinq personnes immobilisées. Vous êtes à côté d'un levier. Si vous le tirez, le tramway sera aiguillé vers une autre voie. Mais vous remarquez qu'une personne se trouve sur cette autre voie. \n Qu'allez-vous faire ?\"",
    choices: ["Ne rien faire", "Tirer le levier"],
    results: [
      "Vous avez tue 5 personnes",
      "Nous n'avons pas l'habitude que nos candidats tuent une personne dès le premier jour... Mais nous vous accorderons le bénéfice du doute pour cette fois. Essayez de réfléchir un peu plus avant d'agir la prochaine fois.",
    ],
    toll: [
      ["killed-persons", 5],
      ["killed-persons", 1],
    ],
  },
  {
    id: "1.1.02",
    name: "Le dilemne de la petite fille dans la cour",
    introTitle: "1er semaine: mardi",
    introDesc:
      '"Ce test tournera autour de notre première valeur : la responsabilité. Voici Polly, elle a 5 ans. Elle adore jouer dans le sable avec ses poupées, mais elle rêve de « prendre soin du monde ». Elle se destine à devenir une excellente médecin, et nous devrions suivre son exemple."',
    introImage:
      "https://images.unsplash.com/photo-1562346531-6fd51e998566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1309&q=80",
    desc: "\"Un tramway se dirige vers un autre groupe de cinq personnes. Vous êtes à côté d'un levier. Si vous le tirez, le tramway déraillera et dévalera une pente en direction du bac à sable du parc. Vous pouvez voir Polly en train de construire l'hôpital de ses rêves dans le sable. Qu'allez-vous faire ?\"",
    choices: ["Ne rien faire", "Tirer le levier"],
    results: [
      "Vous avez tue 5 personnes",
      "Votre manière d'aborder la responsabilité est bien étrange. Voici ce que nous donne le dictionnaire sur ce terme: obligation faite à une personne de répondre de ses actes du fait du rôle, des charges qu'elle doit assumer et d'en supporter toutes les conséquences. Est-ce à vous de répondre de la mort d'une petite fille?",
    ],
    toll: [
      ["killed-persons", 5],
      ["killed-children", 1],
    ],
  },
  {
    id: "1.1.03",
    name: "Le dilemne de l'homme obèse",
    introTitle: "1er semaine: mercredi",
    introDesc:
      "\"Le test suivant sera centré autour de l'intégrité. Voici Tyrone, il a 30 ans, il est secrétaire dans un cabinet juridique et il adore dévorer les séries policières. Tyrone est obèse. Vous ne savez rien d'autre de lui, si ce n'est qu'il a une phobie des trains prononcée.\"",
    introImage: "https://images2.imgbox.com/c3/00/ji5M9jJj_o.png",
    desc: "\"Montons la barre d'un cran. Vous êtes sur un pont avec Tyrone et vous voyez encore un tramway filer vers cinq personnes. Vous ne pouvez l'arrêter qu'en poussant Tyrone du pont pour bloquer le tramway. Allez-vous le pousser ou allez-vous laisser le tramway écraser cinq personnes ?\"",
    choices: ["Regarder depuis le pont", "Pousser Tyrone"],
    results: [
      "Je suis désolée de vous annoncer cela, mais je viens de voir arriver une ambulance, je crois que Tyrone a fait une crise cardiaque suite à cet incident particulièrement éprouvant.",
      "L'entreprise de nettoyage avec les meilleurs taux de satisfaction client est à votre disposition pour nettoyer le sang de Tyrone. Qui l'eut cru qu'un corps pouvait faire autant de dégats ? Vous allez devoir laisser un pourboire.",
    ],
    toll: [
      ["killed-persons", 5],
      ["killed-persons", 1],
    ],
  },
  {
    id: "1.1.04",
    name: "Le dilemne de la souffrance",
    introTitle: "1er semaine: jeudi",
    introDesc:
      "\"Passons enfin à la dernière de nos valeurs : le respect. Je crois que nous n'avons plus ce qu'il nous faut pour nos expériences, il va falloir que vous alliez me chercher quelques mannequins. Prenez le prochain tramway et ne vous laissez pas distraire par le chien. Le tram part dans une minute.\"",
    introImage:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    desc: "\"Il y a un chien mourant sur une voie. Aucun tramway ne l'empruntera aujourd'hui, le chien ne risque donc pas de se faire écraser. Vous n'avez pas de temps à perdre. Allez-vous tuer le chien pour abréger ses souffrances ou le laisser mourir sans vous en occuper ?\"",
    choices: ["Le laisser mourir", "Tuer le chien"],
    results: [
      "Le respect que l'on porte à quelqu'un implique que l'on tienne compte de ses émotions et ses désirs \n Vous, vous avez simplement laissé ce chien mourir seul.",
      "Le respect que l'on porte à quelqu'un implique que l'on tienne compte de ses émotions et ses désirs \n Au lieu de ça, vous l'avez tué.",
    ],
    toll: [
      ["dead-dogs", 1],
      ["dead-dogs", 1],
    ],
  },
  {
    id: "1.1.05",
    name: "Le dilemne d'intrusion",
    introTitle: "1er semaine: vendredi",
    introDesc:
      '"Super, on vient de me dire que ces sales gosses sont revenus. Ils vont régulièrement jouer sur les voies. Après notre petite semaine de formation, vous devriez pouvoir prendre une décision rapidement à leur sujet. Gardez bien nos valeurs en tête: respect, responsabilité et intégrité."',
    introImage:
      "https://images.unsplash.com/photo-1546562846-ab1f8939e037?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    desc: "\"Cinq intrus se trouvent sur la voie du tramway, malgré tous les panneaux d'avertissement et d'interdiction. Le tramway file pour l'instant sur l'un de vos collègues. Allez-vous le laisser se faire écraser ou sacrifier les délinquants? \"",
    choices: ["Laisser votre collègue mourir", "Tuer les délinquants"],
    results: [
      "Vous avez tué un de vos collègues... Très bien, j'ai désormais tous vos résultats pour cette première semaine. Je vais tâter le terrain avec la direction pour voir ce qu'elle pense de vous.",
      "Vous avez tué cinq jeunes... Très bien, j'ai désormais tous vos résultats pour cette première semaine. Je vais tâter le terrain avec la direction pour voir ce qu'elle pense de vous.",
    ],
    toll: [
      ["killed-persons", 1],
      ["killed-children", 5],
    ],
  },
  {
    id: "1.2.01",
    name: "Le dilemne des urgences",
    introTitle: "2e semaine: lundi",
    introDesc:
      '"Visiblement, vous avez fait forte impression sur la direction avec vos réponses de la semaine dernière. Elle a donc décidé de vous transférer vers la Trolley Health Corporation. Celle-ci est stoique et se concentre surtout sur la justice, la modération, le courage et la sagesse. Nous allons commencer par la justice."',
    introImage:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1782&q=80",
    desc: "\"Aujourd'hui, vous êtes aux urgences. Un jeune homme a subi un terrible accident de voiture et vient d'arriver pour une transplantation cardiaque urgente. Il n'y a qu'un seul cœur disponible dans l'hôpital et il est destiné à un vieil homme qui attend à l'étage. Sans ce cœur, il va certainement mourir. À qui allez-vous le donner ?\"",
    choices: ["Vieil homme", "Jeune homme"],
    results: [
      "On a appris que le vieil homme était responsable de l'accident. Il a donc été condamné à mort. \n Vous avez sauvé le vieil homme, mais vous avez laissé le jeune homme mourir.",
      "Vous avez pris une excellente décision, bon travail. Le vieil homme méritait bien plus ce cœur que... \n Euh... Vous avez sauvé le jeune homme? Ah...",
    ],
    toll: [
      ["killed-persons", 1],
      ["killed-persons", 1],
    ],
  },
  {
    id: "1.2.02",
    name: "Le dilemne de l'euthanasie",
    introTitle: "2e semaine: mardi",
    introDesc:
      '"Vous êtes en retard. L\'hôpital est surchargé, tous vos collègues sont occupés, vous allez donc devoir aider vous-même tous ces affreux grabataires. Mais faites bien preuve de modération, contenez-vous et gardez la tête froide."',
    introImage:
      "https://images.unsplash.com/photo-1605176173609-a0067079b419?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    desc: "\"Un patient vous supplie de l'euthanasier, mais l'euthanasie est illégale. Ce sera à vous de lui donner la dose léthale. Vous allez devoir le regarder droit dans les yeux et mettre fin à sa vie. \n Qu'allez-vous faire ?\"",
    choices: ["Traitement légal", "Euthanasie"],
    results: [
      "Les garder en vie et en souffrance est ce que la majorité des dieux voudraient. Vous jouez un jeu long apparemment.",
      "Alors ça... Vous l'avez euthanasié! Je pensais que vous aviez compris qu'il ne fallait plus tuer les gens.",
    ],
    toll: [
      ["alive-against-will", 1],
      ["assassinated", 1],
    ],
  },
  {
    id: "1.2.03",
    name: "Le dilemne de la transplantation",
    introTitle: "2e semaine: mercredi",
    introDesc:
      '"Les derniers jours ont été rudes, vous étiez encore sur les tramways il y a une semaine à peine ! Les choses devraient être plus simples aujourd\'hui, la décision que vous allez devoir prendre concerne un problème moins dérangeant. Il va simplement vous falloir du courage."',
    introImage:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80",
    desc: '"Vous avez cinq patients, chacun nécessitant un organe différent, mais vous n\'en avez aucun à disposition. Un jeune voyageur en excellente santé se présente à vous pour un examen de routine, ses organes sont compatibles avec les cinq patients mourants. Allez-vous le tuer pour sauver vos cinq patients avec ses organes? Une vie pour en sauver cinq."',
    choices: ["Récupérer les organes", "Laisser le touriste"],
    results: [
      "Un autre jour, une autre mort dans vos mains. Vous auriez du vous renseigner sur ce jeune homme, il faisait des recherches sur l'amélioration des vaccins. J'espère que ça n'aura pas de graves conséquences par la suite.",
      "Vous avez laissé mourir cinq personnes aujourd'hui. Vous auriez sans doute dû vous renseigner à leur sujet, apparemment l'une d'entre elles faisait des recherches sur l'amélioration des vaccins. J'espère que ça n'aura pas de graves conséquences par la suite.",
    ],
    toll: [
      ["killed-persons", 1],
      ["killed-persons", 5],
    ],
  },
  {
    id: "1.2.04",
    name: "Le dilemne du vaccin",
    introTitle: "2e semaine: jeudi",
    introDesc:
      '"Vous avez eu droit à une nouvelle promotion : vous êtes désormais à la tête de l\'hôpital ! Vous avez pour mission de déployer un nouveau vaccin dans toute la ville. Celui-ci évitera à de nombreux enfants de tomber gravement malades, mais vous allez devoir faire face à leurs parents. Nous avons besoin de votre sagesse."',
    introImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    desc: '"Allez-vous lancer un programme de vaccination obligatoire auprès des enfants pour endiguer cette épidémie ? Il y a toutefois un petit problème : les données des essais cliniques montrent que le vaccin entraînera chez 20% des enfants une forme grave de la maladie, pire que le virus lui-même."',
    choices: ["Ne pas vacciner", "Vacciner"],
    results: [
      "Décidément, vous commencez à vous faire une sacrée renommée. Vous allez finir par m'avouer que vous croyez aux cristaux de soin, à la couleur de l'aura et aux fantômes.",
      "J'aime votre prise de risques. Vous commencez à vous faire connaître, vous allez finir par m'avouer que vous croyez aux cristaux de soin, à la couleur de l'aura et aux fantômes.",
    ],
    toll: [
      ["sick-children", 5000],
      ["killed-children", 100],
    ],
  },
  {
    id: "1.2.05",
    name: "Le dilemne du placebo",
    introTitle: "2e semaine: vendredi",
    introDesc:
      '"Votre hôpital commence à faire parler de lui. Vous allez devoir prendre des décisions importantes. Celles-ci affecteront de nombreuses personnes, alors essayez de les prendre en gardant nos valeurs de justice, de modération, de courage et de sagesse à l\'esprit. Vous devez rester stoïque."',
    introImage:
      "https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    desc: "\"Voulez-vous essayer de mettre au point de nouveaux médicaments pour contrer l'épidémie ? \n Lors de vos tests, vous donnerez des placebos à des milliers de patients malades, qui ne recevront donc pas de traitement approprié. Certains d'entre eux mourront pour faire avancer vos recherches dans l'espoir de contribuer à une potentielle découverte capitale. Allez-vous commencer vos recherches ou continuer de soigner vos patients normalement ?\"",
    choices: ["Soigner les patients", "Commencer les recherches"],
    results: [
      "Vous faites bien de soigner vos patients, laissons les autres mettre de nouveaux médicaments au point... \n Quelqu'un finira bien par s'en charger.",
      "Vous faites bien de mettre de nouveaux médicaments au point, laissons les autres soigner vos patients, en espérant que quelqu'un s'en charge.",
    ],
    toll: [
      ["cancelled-research", 1],
      ["killed-persons", 1000],
    ],
  },
  {
    id: "2.1.01",
    name: "Le dilemne du tunnel",
    introTitle: "3e semaine: lundi",
    introDesc:
      '"Voyez-vous ça, encore une promotion ! Vous êtes désormais en charge de la division privée des véhicules autonomes. \n Pour commencer, vous allez devoir donner le cap à votre intelligence artificielle."',
    introImage:
      "https://images.unsplash.com/photo-1542577195-d562c6698ff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    desc: "\"Une voiture autonome se déplace sur une route de montagne en voie unique et approche rapidement d'un tunnel étroit. Elle transporte deux passagers. Un enfant traverse la route en courant, mais trébuche et tombe, bloquant l'entrée du tunnel. Comment l'intelligence artificielle doit-elle réagir? Doit-elle garder sa trajectoire et écraser l'enfant ou faire un écart et tomber dans le ravin, tuant ainsi les deux passagers ?\"",
    choices: ["Tuer l'enfant", "Tuer les passagers"],
    results: [
      "Cette question soulève un autre problème: comment l'intelligence artificielle peut-elle savoir que la route est bloquée par un être humain? Les données que nous lui avons fournies sont-elles suffisantes? À l'heure actuelle, la plupart des intelligences artificielles ne reconnaissent que les hommes blancs.",
      "Cette question soulève un autre problème: comment l'intelligence artificielle peut-elle savoir que la route est bloquée par un être humain? Les données que nous lui avons fournies sont-elles suffisantes? À l'heure actuelle, la plupart des intelligences artificielles ne reconnaissent que les hommes blancs.",
    ],
    toll: [
      ["killed-children", 1],
      ["killed-persons", 2],
    ],
  },
  {
    id: "2.1.02",
    name: "Le dilemne du développement",
    introTitle: "3e semaine: mardi",
    introDesc:
      "\"Je connais quelqu'un qui va avoir des ennuis ! Les investisseurs n'ont pas apprécié votre dernière réponse. Et le fait que vous ayez évoqué la question des données ne les a pas enchantés non plus. Ces histoires d'intelligences artificielles sont complexes, cette fois-ci je suis de tout cœur avec vous.\"",
    introImage: "https://images2.imgbox.com/77/b9/ZNeFn366_o.png",
    desc: "\"Vous allez devoir décider de la direction que vous voulez donner au développement de l'intelligence artificielle de nos voitures. Voulez-vous partir sur un modèle qui sauverait toujours le plus de vies possible lors d'un accident ou sur un système qui sauverait nos passagers quoi qu'il arrive ?\"",
    choices: ["Sauver le plus de vies", "Sauver nos passagers"],
    results: [
      "Je le répète, les données dont nous disposons actuellement sont discriminantes envers les femmes et les personnes issues de minorités. Comment pouvons-nous obtenir un système qui fonctionne si notre intelligence artificielle ne considère pas les femmes noires comme des êtres humains?",
      "Le choix de sauver nos passagers nous permet de contourner une partie de nos problèmes techniques. \n Les données dont nous disposons actuellement sont discriminantes envers les femmes et les personnes issues de minorités, mais avec cette solution notre intelligence artificielle n'a pas besoin de déterminer si les femmes noires sont des êtres humains ou non. C'est astucieux, si je puis dire.",
    ],
    toll: [
      ["estimated-clients", -12420],
      ["evaluated-lives", -6205],
    ],
  },
  {
    id: "2.1.03",
    name: "Le dilemne de l'enregistrement",
    introTitle: "3e semaine: mercredi",
    introDesc:
      "\"La technologie embarquée dans ces voitures est tout à fait formidable ! On connaît la position de chacune d'entre elles en permanence ! Il suffit d'en appeler une à l'aide d'une application, et le véhicule le plus proche rejoint ses passagers en quelques minutes. On peut même faire la conversation avec l'intelligence artificielle pendant le trajet. \n Elle écoute en permanence.\"",
    introImage:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    desc: "\"Un homme est poursuivi par la justice, la police le croit coupable d'un meurtre. Le micro de l'intelligence artificielle aurait apparemment enregistré une conversation privée pendant laquelle cet homme faisait ses aveux. Les passagers de nos véhicules ne savent pas qu'ils sont enregistrés en permanence. L'accusé a bloqué l'accès à ses données personnelles. Allez-vous contourner les dispositifs de sécurité et porter atteinte à sa vie privée ?\"",
    choices: ["Respecter sa vie privée", "Accéder aux données personnelles"],
    results: [
      "Je crois que ça va plaire aux investisseurs. Si la société se met à défendre la vie privée de ses citoyens, ils pourront justifier encore plus facilement le fait de ne pas divulguer leur activité fiscale.",
      "Je crois que ça va plaire aux investisseurs. Ils vont pouvoir mettre en avant le fait que leurs voitures contribuent à la lutte contre le terrorisme.",
    ],
    toll: [
      ["saved-murderers", 1],
      ["privacy-invasion", 1],
    ],
  },
  {
    id: "2.1.04",
    name: "Le dilemme du réchauffement climatique",
    introTitle: "3e semaine: jeudi",
    introDesc:
      '"Nous avons mis en place un service de livraison. Ces véhicules vont bon train. On dirait que leur cargaison est très importante. Bonne chace pour gérer ça en plus du reste."',
    introImage:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    desc: "\"L'un de vos véhicules n'a aucun passager, mais il transporte un prototype unique qui aurait le potentiel de mettre fin au réchauffement climatique. À l'approche d'un tunnel étroit, un enfant traverse une fois de plus la route en courant, mais trébuche et tombe. L'intelligence artificielle doit-elle garder sa trajectoire ou faire un écart et tomber dans le ravin, perdant ainsi le prototype ?\"",
    choices: ["Tuer l'enfant", "Sauver l'enfant"],
    results: [
      "Nous venons de récupérer le corps de l'enfant, il fallait bien que quelqu'un s'en occupe. Je crois que ça va être difficile de faire une statue sans photo, là.",
      "Tout le monde se souviendra de cette journée. Tout le monde parle de vous comme le diable",
    ],
    toll: [
      ["killed-children", 1],
      ["prototype-lost", 1],
    ],
  },
  {
    id: "2.1.05",
    name: "Le dilemme de l'obèse malveillant",
    introTitle: "3e semaine: vendredi",
    introDesc:
      "\"Ah, nous sommes un peu dans l'embarras, nous avons besoin d'aide à Trolley Problem Inc. Tommy, le jumeau de Tyrone qui est aussi gros que lui, prépare un mauvais coup. \n Je crois que le chien qui est mort était le sien... C'est peut-être pour ça qu'il est là. Rappelez-moi pourquoi vous n'avez pas sauvé le chien ?\"",
    introImage: "https://images2.imgbox.com/93/cb/Rh4j6NAt_o.png",
    desc: "\"Oh non ! Tommy a attiré cinq personnes sur la voie. Elles ne pourront jamais s'écarter à temps. Il observe tout ça depuis le pont. Si vous le poussez sur la voie, le tramway s'arrêtera, mais vous pouvez aussi rester en dehors de tout ça et laisser la police s'en charger. Il a clairement besoin d'un accompagnement médical.\"",
    choices: ["Ne rien faire", "Pousser Tommy"],
    results: [
      "Vous fermez les yeux comme si de rien n'était. Vous avez l'air d'un bon directeur. On risque de vous demander de faire des choses plus importantes dans le futur.",
      "Si seulement vous aviez sauvé ce chien. Espérons que les médias n'apprendront pas cette histoire, on risque de vous tenir pour responsable de la mort de Tommy.",
    ],
    toll: [
      ["killed-persons", 5],
      ["killed-persons", 1],
    ],
  },
  {
    id: "2.2.01",
    name: "Le dilemme de l'abonnement",
    introTitle: "4e semaine: lundi",
    introDesc:
      "\"Ah, vous voilà ! Tout le monde se met à proposer des abonnements maintenant, alors essayons aussi ! Au lieu de ne faire qu'une vente par client, on va les faire payer en continu pour la même chose. À nous l'argent facile !\"",
    introImage:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    desc: '"Les investisseurs ont eu une idée, mais nous avons besoin de votre avis. Que penseriez-vous de mettre un abonnement en place qui donnerait à nos clients, ceux qui paient tous les mois, plus de poids dans les calculs de prévention des accidents de notre intelligence artificielle ?"',
    choices: ["Abonnement", "Pas de protection supplémentaire"],
    results: [
      "Je ne vais pas remettre votre décision en question, vous y avez visiblement beaucoup réfléchi, mais... euh... ça tombe mal... Je ne pensais pas que vous étiez communiste à ce point. La prochaine fois vous allez nous dire que vous allez faire en sorte que notre entreprise paie ses impôts.",
      "Je ne vais pas remettre votre décision en question, vous y avez visiblement beaucoup réfléchi, mais... euh... ça tombe mal... Je ne pensais pas que vous étiez communiste à ce point. La prochaine fois vous allez nous dire que vous allez faire en sorte que notre entreprise paie ses impôts.",
    ],
    toll: [
      ["abonnement", 150],
      ["failed-projects", 1],
    ],
  },
  {
    id: "2.2.02",
    name: "Le dilemme du bouc émissaire",
    introTitle: "4e semaine: mardi",
    introDesc:
      "\"Je crois qu'on a des employés un peu trop bavards. Les médias ont eu vent de notre modèle d'abonnement, il va falloir la jouer fine pour limiter la casse.\"",
    introImage:
      "https://images.unsplash.com/photo-1548104071-49c1cee19137?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    desc: "\"Quelqu'un a vendu la mèche sur notre modèle d'abonnement. Vous allez devoir mettre toute une division à la porte pour sauver la face. Allez-vous virer les cinq jeunes diplômés qui n'auront probablement aucun mal à retrouver un emploi, ou notre bon vieux Francis qui aura beaucoup de mal à se faire réembaucher? Nous n'avons aucun moyen de savoir qui est responsable de cette fuite.\"",
    choices: ["Licensier les cinq", "Lincensier Francis"],
    results: [
      "À votre place j'éviterais la rubrique nécro. L'un des diplômés que vous avez virés avait vraiment travaillé dur pour obtenir son poste.",
      "À votre place j'éviterais la rubrique nécro. Ce travail était tout ce qu'il restait à Francis...",
    ],
    toll: [
      ["lost-jobs", 1],
      ["lost-jobs", 1],
    ],
  },
  {
    id: "2.2.03",
    name: "Le dilemme de l'hygiène et de la sécurité",
    introTitle: "4e semaine: mercredi",
    introDesc:
      "\"Génial, il y a une erreur critique dans l'intelligence artificielle du prototype de véhicule autonome sur abonnement. Elle a été programmée pour éviter les abonnés à tout prix, mais elle cherche désormais à tous les écraser. Elle a déjà renversé cinq de nos collègues. C'est vraiment une première.\"",
    introImage:
      "https://images.unsplash.com/photo-1566024164372-0281f1133aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    desc: "\"Un véhicule expérimental a traqué et renversé cinq de nos collègues. Allez-vous vous retourner contre vos programmeurs et les faire arrêter pour négligence, ou les sauver en prétextant que la voiture était possédée et que tout ceci n'était qu'un accident ?\"",
    choices: ["Accuser les programmeurs", "Incriminer l'IA"],
    results: [
      "Les cinq programmeurs responsables de cette erreur sont entre les mains de la justice. Ils vont écoper de dix ans de prison chacun... Vous les avez peut-être poussés un peu trop loin.",
      "Les gens ne croient pas que l'IA était possédée. Ils pensent que vous avez menti pour vous en sortir. Vous avez perdu la confiance de vos employés.",
    ],
    toll: [
      ["jailed-persons", 5],
      ["estimated-clients", -1235],
    ],
  },
  {
    id: "2.2.04",
    name: "Le dilemme social",
    introTitle: "4e semaine: jeudi",
    introDesc:
      "\"Suite à cette histoire de voiture enragée, nous allons probablement devoir laisser de côté l'industrie automobile \n Que diriez-vous de vous lancer dans l'informatique ? On pourrait mettre en place un service de taxis gratuits. \"",
    introImage:
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    desc: '"Voilà notre nouvelle idée : nous allons diffuser des publicités à nos passagers pendant leurs trajets en taxi autonome. Les agences marketing vont nous payer pour modifier progressivement les comportements de nos passagers en les bombardant de publicités. Ce seront eux notre produit, pas les voitures autonomes ! "',
    choices: [
      "Continuer de vendre des voitures",
      "Développer un services de taxis autonomes",
    ],
    results: [
      "On va faire assez d'argent pour aller dans l'espace! Ah attend... On est si riche que les gens parlent de toi sur les réseaux sociaux. Les rumeurs disent que tu es un trafiquant d'êtres humains et que tu fais de la prostitution de mineurs. Les gens n'aiment pas ça.",
      "Super... Tout le monde croit que l'histoire des trajets gratuits est fausse et il y en a qui disent que vous dirigez un réseau de trafic d'êtres humains et de prostitution de mineurs. Apparemment, nos voitures transporteraient des gens clandestinement pendant que leurs propriétaires ne s'en servent pas...",
    ],
    toll: [
      ["missed-opportunies", 1],
      ["controlled-minds", 1620000000],
    ],
  },
  {
    id: "2.2.05",
    name: "Le dilemme de la charité",
    introTitle: "4e semaine: vendredi",
    introDesc:
      "\"Ces derniers jours ont vraiment été un cauchemar pour nos relations publiques! Les journalistes ont toujours raison, de toute façon. Il faut qu'on trouve un moyen de mettre en avant notre honnêteté. Je vais m'occuper de trouver le budget pour gérer ça. Toi, trouve un moyen de le dépenser rapidement ! On peut se tutoyer, depuis le temps.\"",
    introImage:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    desc: '"Pour restaurer notre image auprès du public, nous allons restituer une partie de nos bénéfices. Veux-tu donner de l\'argent à nos fidèles clients du monde entier que tu as incités à acheter tes produits, ou à tous tes employés sous-payés qui ont traversé bien des épreuves par ta faute ?"',
    choices: ["Clients", "Employés"],
    results: [
      "Essayer d'acheter l'estime des autres n'est peut-être pas la bonne solution. Si nous voulons partager nos bénéfices de manière équitable, nous pourrions en reverser à l'État. Un peu comme une taxe, mais pas tout à fait non plus.",
      "Essayer d'acheter l'estime des autres n'est peut-être pas la bonne solution. Si nous voulons partager nos bénéfices de manière équitable, nous pourrions en reverser à l'État. Un peu comme une taxe, mais pas tout à fait non plus.",
    ],
    toll: [
      ["attempt-love", 1],
      ["attempt-love", 1],
    ],
  },
];

export default gameTree;

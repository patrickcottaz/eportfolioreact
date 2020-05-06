export default {
  header: {
    links: [
      {
        "route": "/about",
        "text": "À propos"
      },
      {
        "route": "/projects",
        "text": "Projets"
      },
      {
        "route": "/technos",
        "text": "Technos"
      },
      {
        "route": "/contact",
        "text": "Contact"
      }
    ]
  },
  footer: {
    currentLocale: "Canada (Québec)",
    isoFlag: "ca",
    markdown: `<p>Fait avec <span class="footer-heart">♥</span> et <span style="color: #61dafb">React</span></p>`,
  },
  index: {
    sticky: "Contactez moi !",
    firstDiv: {
      title: "Patrick Cottaz",
      subtitle: "Développeur front end",
      paragraph1: "Jeune athlète Javascript & VueJS ambitieux",
      paragraph2: "Découvrez mes compétences et mes motivations",
      buttonText: "À propos de moi",
    },
    secondDiv: {
      title: "Perfectionnement.",
      desc1: "Le mot d'ordre de mes travaux. Toujours chercher à se dépasser.",
      desc2: "Découvrir de nouvelles interfaces, de nouvelles techniques, pour développer des rendus encore plus tendances et ergonomiques.",
      buttonText: "Mes projets",
    },
    thirdDiv: {
      title: "Toujours en quête d'apprentissage.",
      desc1: "Apprivoiser de nouveaux frameworks, des nouveaux langages,",
      desc2: "développer mon éventail de connaissances dans le développement front,",
      desc3: "voilà toute ma motivation pour atteindre mes objectifs.",
      buttonText: "Voir mes compétences techniques"
    },
  },
  notfound: {
    title: "Oups, page non trouvée...",
    button: "Revenir sur la home"
  },
  about: {
    warmup: {
      title: "En guise d'échauffement, vous pouvez télécharger mon CV",
      button: "Obtenir mon CV"
    },
    start: {
      title: "Fin prêt ? Cliquez pour lancer la course...",
      button: "À vos marques, prêts ?"
    },
    scroll: {
      title: "Scrollez !",
      back: "Recommencer la course",
      mobileTitle: "Scrollez pour connaître mon parcours !"
    }
  },
  projects: {
    title: "Mes expériences professionnelles",
    subtitle: "Au cours de mes aventures web, il m'est arrivé de contribuer à plusieurs projets incluant Vue.js, Nuxt.js et autres frameworks dans leur noyau. Découvrez ici ces projets.",
    info: "Cliquez sur un projet pour connaître ses caractéristiques.",
    all: [
      {
        title: "Refactoring du site iskn.co",
        caption: "Refactoring du site de Vue.js vers Nuxt.js. Meilleure gestion de l'API Storefront Shopify avec le store Vuex. Implémentation d'un headless CMS, Storyblok, et optimisation des performances du site avec des filtres de compression d'image, middlewares i18n, génération statique des routes, polyfills et quelques modules Nuxt. Dans un second temps, implémentation d'un système de cache pour rendre les pages côté serveur avec memcache, migration du site vers Heroku, ajoutant une app serveur avec ExpressJS.",
        thumbnail: require('../assets/img/projects/isknrefactor.png'),
        link: "",
      },
      {
        title: "Maintien du site iskn.co",
        caption: "Implémentations Storyblok continues, intégration et développement de nouvelles pages designées, réparations CSS/SCSS, Vuex, ajout de nouveaux modules, nouvelles APIs pour améliorer l'UX et le taux de conversion du site. Utilisation de Gitlab pour améliorer le workflow de développement et les revues de code.",
        thumbnail: require('../assets/img/projects/iskn_maintain.png'),
        link: "https://www.iskn.co/",
      },
      {
        title: "Développement d'une appli beta sous ElectronJS : Yukti",
        caption: "Utilisation d'Electron et d'un kit Electron-Vue pour créer Yukti, une app desktop conçue pour les entraîneurs sportifs dans la création de séances de jeu, notamment adressée pour le football. Développement de toutes les vues de l'app, utilisation d'une API interne pour créer des canvas de dessin utilisables avec les tablettes iskn Slate 2+ et Repaper. Implémentation de modules de construction d'apps et de fichiers exécutables OSX et Windows pour la distribution en production.",
        thumbnail: require('../assets/img/projects/yuktiapp.png'),
        link: "",
      },
      {
        title: "Développement des pages Yukti sous iskn.co",
        caption: "Intégration et développement des pages de l'app Yukti de production sous iskn.co. Ajout de Storyblok. Mise en application de l'API Storefront Shopify pour enclencher l'ecommerce de l'app.",
        thumbnail: require('../assets/img/projects/yukti.png'),
        link: "https://www.iskn.co/yukti",
      },
      {
        title: "Refactoring et maintien du site tori.com",
        caption: "Refactoring du site tori.com dans des délais critiques, d'un projet Wordpress à Nuxt.js. Implémentation de Storyblok, de l'API Storefront Shopify . Réparations CSS/SCSS d'un design existant. Intégration et développement en continu avec Gitlab.",
        thumbnail: require('../assets/img/projects/tori.png'),
        link: "https://www.tori.com/",
      }
    ],
  },
  technos: {
    carousel: {
      title: "Mon stack et environnement idéal",
      subtitle: "Si je devais choisir un stack pour créer d'ambitieuses applis front-end, voici les outils que j'utiliserai :",
      slides: [
        {
          image: require('../assets/img/technos/vuejs.png'),
          caption: 'VueJS'
        },
        {
          image: require('../assets/img/technos/nuxt.png'),
          caption: 'NuxtJS'
        },
        {
          image: require('../assets/img/technos/node.png'),
          caption: 'NodeJS'
        },
        {
          image: require('../assets/img/technos/yarn.png'),
          caption: 'Yarn'
        },
        {
          image: require('../assets/img/technos/gitlab.png'),
          caption: 'Gitlab'
        },
        {
          image: require('../assets/img/technos/gitkraken.png'),
          caption: 'Gitkraken'
        },
        {
          image: require('../assets/img/technos/netlify.png'),
          caption: 'Netlify'
        },
        {
          image: require('../assets/img/technos/sass.png'),
          caption: 'Sass'
        },
        {
          image: require('../assets/img/technos/bulma.png'),
          caption: 'Bulma'
        },
        {
          image: require('../assets/img/technos/storyblok.png'),
          caption: 'Storyblok'
        }
      ],
    },
    chart: {
      title: "Langages front end maîtrisés",
      items: [
        {
          title: 'HTML5',
          color: '#f16529',
          hover_color: '#ffab87',
          data: 95
        },
        {
          title: 'CSS3',
          color: '#264DE4',
          hover_color: '#2965F1',
          data: 85
        },
        {
          title: 'ES6',
          color: '#f1da4e',
          hover_color: '#f4e797',
          data: 80
        },
        {
          title: 'Vue',
          color: '#41B883',
          hover_color: '#92e8c1',
          data: 90
        },
        {
          title: 'Nuxt',
          color: '#00bb7f',
          hover_color: '#00ffad',
          data: 95,
        },
        {
          title: 'JSON',
          color: '#292929',
          hover_color: '#848484',
          data: 75
        },
        {
          title: 'Sass',
          color: '#CD669A',
          hover_color: '#ff99cc',
          data: 80
        },
        {
          title: 'jQuery',
          color: '#0868AB',
          hover_color: '#61beff',
          data: 70
        },
        {
          title: 'React',
          color: '#61dafb',
          hover_color: '#80ffff',
          data: 65
        },
      ],
    },
    topic: {
      title: "Quelles technos m'intéressent ?",
      default: 'Cliquez sur un logo pour connaître mes motivations',
      contents: [
        {
          content: 'Javascript est un langage en constante évolution. Primordial pour créer des apps front-end, et désormais dans les apps orientées back-office avec Node.js ou dans la création d\'applis desktop avec ElectronJS, Javascript peut être employé à toutes les échelles. Une bien belle motivation pour créer des apps front-end complexes, mais pas que !',
          image: require('../assets/img/technos/javascript.png')
        },
        {
          content: 'Pour moi, VueJS est actuellement le meilleur framework front-end existant. Ses facilités d\'apprentissage, de structuration et d\'extensions sont assez impressionnantes. Activement maintenu par une large communauté, VueJS se veut devenir le nouveau standard front-end',
          image: require('../assets/img/technos/vuejs_topic.png')
        },
        {
          content: 'Même si ExpressJS est un framework orienté serveur, il m\'intéresse dans le sens qu\'il est facile à configurer avec des apps front-end complexes, et là encore un tas d\'options sont disponibles pour ajouter plus de sécurité côté serveur, et assurer un système de maintien du backoffice constant',
          image: require('../assets/img/technos/express.png')
        }
      ],
    }
  },
  contact: {
    icons: [
      {
        image: require('../assets/svg/phone.svg'),
        link: 'tel:+33662616587',
        targetblank: false,
      },
      {
        image: require('../assets/svg/linkedin.svg'),
        link: 'https://www.linkedin.com/in/patrick-cottaz/',
        targetblank: true,
      },
      {
        image: require('../assets/svg/github.svg'),
        link: 'https://github.com/patrickcottaz/',
        targetblank: true,
      },
    ],
    form: {
      title: 'Envie de discuter ?',
      labels: {
        name: 'Votre nom',
        email: 'Votre adresse mail',
        message: 'Votre message'
      },
      placeholders: {
        name: 'Pierre-Ambroise Bosse',
        email: 'acidelactique@çapique.co',
        message: 'Hey Patrick, voici mon projet...'
      },
      submit: 'Envoyer',
      success: 'Merci de m\'avoir contacté !',
      errors: {
        title: 'Oops, votre formulaire contient $ erreur(s) :',
        name: 'Entrez un nom',
        email: 'Entrez une adresse mail',
        emailValid: 'Entrez une adresse mail valide',
        message: 'Votre message ne peut pas être vide'
      },
    },
    maps: {
      title: 'Je suis ici !',
      iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7586.278313227288!2d5.78989708514134!3d45.138120712989945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478a601976efe77b%3A0x9ee9cdf9688e7888!2s204+Chemin+du+Villard%2C+38320+Herbeys!5e0!3m2!1sfr!2sfr!4v1542038635936"
    }
  },
}

export default {
  header: {
    links: [
      {
        "route": "/about",
        "text": "About"
      },
      {
        "route": "/projects",
        "text": "Projects"
      },
      {
        "route": "/technos",
        "text": "Technology"
      },
      {
        "route": "/contact",
        "text": "Contact"
      }
    ]
  },
  footer: {
    currentLocale: "United States",
    isoFlag: "us",
    markdown: `<p>Made with <span class="footer-heart">♥</span> and <span style="color: #61dafb">React</span></p>`
  },
  index: {
    sticky: "Contact me!",
    firstDiv: {
      title: "Patrick Cottaz",
      subtitle: "French Front end developer",
      paragraph1: "Ambitious young Javascript athlete.",
      paragraph2: "Discover my skills and my motivations.",
      buttonText: "About me",
    },
    secondDiv: {
      title: "Improvement.",
      desc1: "The motto of my work. Always try to go above and beyond.",
      desc2: "Discover new interfaces, new technologies",
      buttonText: "My projects",
    },
    thirdDiv: {
      title: "Always looking for learning.",
      desc1: "Try new frameworks, new languages,",
      desc2: "develop my range of knowledge in front development,",
      desc3: "this is my motivation for achieving my goals.",
      buttonText: "See my technical skills"
    },
  },
  notfound: {
    title: "Oops, page not found...",
    button: "Go back to home"
  },
  about: {
    warmup: {
      title: "As a warm-up, you can already download my resume",
      button: "Get my resume"
    },
    start: {
      title: "Ready? Click on the button to start the race...",
      button: "On your marks..."
    },
    scroll: {
      title: "Scroll!",
      back: "Restart the race",
      mobileTitle: "Scroll to know my experiences!"
    }
  },
  projects: {
    title: "My professional experiences",
    subtitle: "During my web adventures, I've worked for several projects that include Vue.js, Nuxt.js and other frameworks. Discover here more informations about my experiences.",
    info: "Click on a project to get more specifications about it",
    all: [
      {
        title: "iskn.co website refactoring",
        caption: "Code refactoring of the iskn website from Vue.js to Nuxt.js. Better handling of the Shopify Storefront API using the Vuex store. Implementation of a headless CMS, Storyblok, and performances optimizations of the website using image compressions filters, i18n middlewares, static route generation, polyfills and other Nuxt modules. In a second time, implementation of a cache system to render pages server-side with memcache, and migration of the site to Heroku, adding a server application with ExpressJS.",
        thumbnail: require('../assets/img/projects/isknrefactor.png'),
        link: "",
      },
      {
        title: "iskn.co website maintain",
        caption: "Continuous Storyblok implementations, integration and development of new designed pages, CSS/SCSS fixes, Vuex store fixes, adding of new modules, new APIs to enhance the website UX and conversion rate. Using Gitlab to improve development workflow and code reviews.",
        thumbnail: require('../assets/img/projects/iskn_maintain.png'),
        link: "https://www.iskn.co/",
      },
      {
        title: "Development of a beta ElectronJS desktop app, Yukti",
        caption: "Using ElectronJS and a ElectronVue boilerplate to create Yukti, a desktop application about sport sessions management, especially for soccer coaches. Developement of every views of the app, use of an intern JS API to create drawing canvas usable with iskn smart drawing tablets Slate 2+ and Repaper. Implementation of building modules to create bundles packs  and executable files during app export for OSX and Windows.",
        thumbnail: require('../assets/img/projects/yuktiapp.png'),
        link: "",
      },
      {
        title: "iskn.co Yukti pages development",
        caption: "Entire integration and development of the iskn Yukti public version. Storyblok handle. Shopify API storefront setup to enhance the app's ecommerce.",
        thumbnail: require('../assets/img/projects/yukti.png'),
        link: "https://www.iskn.co/yukti",
      },
      {
        title: "tori.com wesbite refactoring and maintain",
        caption: "Code refactoring of the tori.com website over a very short period, from a Wordpress to a Nuxt.js project. Implementation of Storyblok, Shopify Storefront API. CSS/SCSS fixes of an existing design. Continuous integration and development using Gitlab.",
        thumbnail: require('../assets/img/projects/tori.png'),
        link: "https://www.tori.com/",
      }
    ],
  },
  technos: {
    carousel: {
      title: "My ideal stack & environment",
      subtitle: "If I had to chose the stack to create great web projects, here are all the tools I would use:",
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
      title: "Front end skills",
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
      title: "What technologies interests me?",
      default: 'Click on a logo to know my motivations',
      contents: [
        {
          content: 'Javascript is a constant moving language. Primordial for native front-end applications, its evolution in back-end utilisation with Node.js and desktop applications like ElectronJS shows that it can now be used in any type of project. A nice motivation to create complex front-end applications with server-side renderings',
          image: require('../assets/img/technos/javascript.png')
        },
        {
          content: 'For me, Vue is the best JS framework a front end dev can use for his projects. Its facilities of maintaining, learning and extensions are impressive. Highly maintained by a huge community, VueJS is becoming the new standard in front end applications',
          image: require('../assets/img/technos/vuejs_topic.png')
        },
        {
          content: 'Even if ExpressJS is a server JS framework, it interests me in the way that it is easy to setup with complex front-end apps, and here again a lot of options are available to add more server securities to the project, and a strong back-office maintaining system.',
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
      title: 'Want to discuss?',
      labels: {
        name: 'Your name',
        email: 'Your email address',
        message: 'Your message'
      },
      placeholders: {
        name: 'David Rudisha',
        email: 'fasterthanlight@run.co',
        message: 'Hey Patrick, want to run a website today?'
      },
      submit: 'Submit',
      success: 'Thank you for contacting me!',
      errors: {
        title: 'Oops, your demand contains $ error(s):',
        name: 'Enter a name',
        email: 'Enter an email address',
        emailValid: 'Enter a valid email address',
        message: 'Your message cannot be empty'
      },
    },
    maps: {
      title: 'I\'m here!',
      iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7586.278313227288!2d5.78989708514134!3d45.138120712989945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478a601976efe77b%3A0x9ee9cdf9688e7888!2s204+Chemin+du+Villard%2C+38320+Herbeys!5e0!3m2!1sfr!2sfr!4v1542038635936"
    }
  },
}

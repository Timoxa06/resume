// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname:'Ivan',
    lastname:'Ivanov'
  },

  position: 'Junior Fullstack JS Developer',

  salary:'600$ в місяц',

  address:'Anna Ahmatova 22',
}

var footer = {
  social: {
    email:{
      text:'dmytro@mail.com',
      href:'mailto:dmytro@mail.com',
    },
    phone:{
      text:'+380670000123',
      href:'tel:+380670000123',
    },
    linkedin:{
      text:'LinkedIn',
      href:'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page:{
      title: 'Resume',
    },
    header,

    
    main:{
      summary:{
        title:'Summary',
        text:`Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
  
      experience:{
        title:'Experience',
        text:`Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    

    footer,
  })
})
router.get('/skills', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page:{
      title: 'Resume',
    },

    header,

    main: {
      skills: [
        {
          name:'HTML',
          point: 10,
          isTop: 'top',
        },
        {
          name:'Handlebars',
          point: 7,
        },
        {
          name:'VS Code',
          point: 9,
        },
        {
          name:'GIT',
          point: 6,
        },
        {
          name:'Terminal & NPM',
          point: 8,
        },
        {
          name:'PHP',
          point: null,
        },
        {
          name:'Java',
          point: 0,
        },
      ],
      hobbies:[
        {
          name:'Football',
          IsMain:true,
        },
        {
          name:'Singing',
          IsMain:true,
        },
        {
          name:'Basketball',
          IsMain:false,
        }
      ]
    }, 

    footer,
  })
})
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
res.render('education', {
  // ↙ сюди вводимо JSON дані
  page:{
    title: 'Resume',
  },

  header,

  main:{
    educations:[
      'Garvard',
      'hhbfbfd',
      'Gambridg',
    ],
    certificates:[
      {
        name:'JS PRO',
        id: 92836,
      },
      {
        name:'IT BRAINS',
        id: 98432,
      },
      {
        name:'HTML/CSS PRO',
        id: 56776,
      }
    ],
  },

  footer,
})
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
res.render('work', {
  // ↙ сюди вводимо JSON дані
  
  layout: 'big',

  page:{
    title: 'Resume | Work',
  },

  

  header,

  main:{
    works:[
      {
        position:'Junior Fullstack Developer',
        company:{
          name:'It Brains',
          url:'https://it-brains.com.ua/'
        },
        duration:{
          from:'10.10.2022',
          to:null
        },
        projectAmount:'3',
        
        projects:[
          {
            
            name:'Resume',
            url:'https://resume.com.ua/',
            about:'Airbnb competitor. High-load application for searching apartments',
          },
        ],
        stacks:[
          {
            name:'Rect.js',
          },
          {
            name:'HTML/CSS',
          },
          {
            name:'Node.js',
          },
        ],
        awards:[
          {
            name:'dfghnbvc',
          },
          {
            name:'fghjnbvcxcvbn',
          }
        ],
        staksAmount:'3',
        awardsAmount:'2',
      },
    ],
  },

  footer,
})
})

router.get('/js', function (req, res) {
  res.render('js', {
    layout: 'basic',
    name: 'JavaScript',
    description:
      'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
    history: {
      year: 1995,
      founder: 'Brendan Eich',
    },
    types: [
      'Number',
      'String',
      'Boolean',
      'Null',
      'Undefined',
      'Symbol',
      'Object',
    ],
    syntax: {
      variables: ['var', 'let', 'const'],
      functions: ['function'],
      conditionals: ['if', 'else', 'switch'],
      loops: ['for', 'while', 'do-while'],
      classes: ['class'],
    },
    features: [
      'First-class functions',
      'Closures',
      'Dynamic typing',
      'Prototype-based inheritance',
      'Asynchronous programming with Promises and async/await',
      'Modules with import/export statements',
    ],
    libraries: [
      'jQuery',
      'React',
      'Angular',
      'Vue',
      'Node.js',
      'Express.js',
      'Lodash',
      'Moment.js',
    ],
    tools: [
      'Babel',
      'Webpack',
      'ESLint',
      'Jest',
      'Mocha',
      'Chai',
      'Selenium',
      'Cypress',
    ],
    community: [
      {
        name: 'Stack Overflow',
        type: 'forum',
      },
      {
        name: 'JavaScript Weekly',
        type: 'newsletter',
      },
      {
        name: 'The Changelog',
        type: 'podcast',
      },
      {
        name: 'CSS-Tricks',
        type: 'blog',
      },
    ],
  })
})

module.exports = router
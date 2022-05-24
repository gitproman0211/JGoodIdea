import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  projects: any = [
    // {
    //   id: 1,
    //   title: 'Read data from Google spreadsheet in Angular',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/MyShop/#/',
    //   githurl: 'https://github.com/mehulk05/MyShop',
    //   mediumlink:
    //     'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
    //   imgUrl: 'assets/images/z1.png',
    //   tech: 'Angular 10 , Google SpreadsheetApi',
    // },

    // {
    //   id: 2,
    //   title: 'Blog App Using MERN Stack',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
    //   githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
    //   mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
    //   imgUrl: 'assets/images/z26.png',
    //   tech: 'React, Node, MongoDB, Express',
    // },

    // {
    //   id: 3,
    //   title: 'CRUD operation using MEAN stack',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
    //   githurl: 'https://github.com/mehulk05/Blog-using-mean',
    //   mediumlink:
    //     'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
    //   imgUrl: 'assets/images/z27.png',
    //   tech: 'Angular 10, Node, MongoDB, Express',
    // },

    // {
    //   id: 4,
    //   title: 'Multiroom Chat Application in Node JS',
    //   desc: '',
    //   livedemo: 'https://chatapp-using-node.herokuapp.com/',
    //   githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
    //   mediumlink:
    //     'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
    //   imgUrl: 'assets/images/z23.png',
    //   tech: 'Node JS,Socket IO',
    // },

    // {
    //   id: 5,
    //   title: 'Integrate Medium Blogs on your React App',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
    //   githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
    //   mediumlink:
    //     'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
    //   imgUrl: 'assets/images/z4.png',
    //   tech: 'React JS',
    // },

    // {
    //   id: 6,
    //   title: 'News App using ReactJS (Parsing XML to JSON)',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
    //   githurl: 'https://github.com/mehulk05/NewsApp-using-React',
    //   mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
    //   imgUrl: 'assets/images/z24.png',
    //   tech: 'React JS, XMl to JSON',
    // },

    // {
    //   id: 7,
    //   title: 'Medium-Like Blog App Using Angular 9 and Firebase',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blog-Book/',
    //   githurl: 'https://github.com/mehulk05/Blog-Book',
    //   mediumlink:
    //     'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
    //   imgUrl: 'assets/images/z21.png',
    //   tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase',
    // },

    // {
    //   id: 8,
    //   title: 'COVID 19 Tracker (Statistics) app Using Angularr',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/COVOID-19/',
    //   githurl: 'https://github.com/mehulk05/COVOID-19',
    //   mediumlink:
    //     'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
    //   imgUrl: 'assets/images/z2.png',
    //   tech: 'Angular 10 ,Bootstrap,Javascript',
    // },

    // {
    //   id: 9,
    //   title: 'Weather App with React',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/React-Weather/',
    //   githurl: 'https://github.com/mehulk05/React-Weather-App',
    //   mediumlink:
    //     'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
    //   imgUrl: 'assets/images/z9.png',
    //   tech: 'React, Open MAp Api',
    // },

    // {
    //   id: 10,
    //   title: 'Spring Boot + Angular 8 CRUD Example',
    //   desc: '',
    //   livedemo:
    //     'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   mediumlink:
    //     'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
    //   imgUrl: 'assets/images/z28.png',
    //   tech: 'Angular8, Java ,Hibernate',
    // },

    // {
    //   id: 11,
    //   title: 'Personal Portfolio Using Angular',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
    //   mediumlink:
    //     'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
    //   imgUrl: 'assets/images/z11.png',
    //   tech: 'Angular ,Bootstrap',
    // },

    // {
    //   id: 12,
    //   title: 'Personal Portfolio Using Django',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
    //   mediumlink:
    //     'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
    //   imgUrl: 'assets/images/z12.png',
    //   tech: 'Django',
    // },

    // {
    //   id: 13,
    //   title: 'Movie Success Prediction',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05',
    //   mediumlink:
    //     'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
    //   imgUrl: 'assets/images/z13.png',
    //   tech: 'Python, Machine Learning, Django Framework.',
    // },

    // {
    //   id: 14,
    //   title: 'Matrimonial Website',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
    //   mediumlink:
    //     'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
    //   imgUrl: 'assets/images/z14.png',
    //   tech: 'HTML, CSS, Bootstrap, Jquery',
    // },
  ];

  about =
    'Creative and results-oriented Full Stack Software Engineer with a focus on the design and implementation of backend side. Skilled in agile processes, backend and frontend development, and creating financial dApp on blockchain. Lover of everything related to generate innovation and new knowledge. Problem solver who faces them with a smile and solves them as quickly as possible. I am interested in winter sports such as snowboarding.';

  about2 = `Worked with Software Development Life Cycle(SDLC) and agile methodologies .
  Familiar with blockchain concepts and know how to implement .
  Expertise in Angular, React, Javascript, Node JS and UI with Responsive Designs / Solidity, Contract, Truffle & Hardhat and Web3`;

  resumeurl =
    'https://drive.google.com/file/d/1XY0xlYDX8aZA1KwCnnjH6Y3G4iTWcV-D/view?usp=sharing';

  skillsData: any = [
    {
      id: 1,
      skill: 'HTML5',
      image: 'assets/images/skills/html-5.svg',
    },
    {
      id: 2,
      skill: 'CSS3',
      image: 'assets/images/skills/css3.svg',
    },
    {
      id: 3,
      skill: 'JavaScript',
      image: 'assets/images/skills/javascript.svg',
    },
    {
      id: 4,
      skill: 'TypeScript',
      image: 'assets/images/skills/typescript.svg',
    },
    {
      id: 5,
      skill: 'Angular',
      image: 'assets/images/skills/angular.svg',
    },
    {
      id: 6,
      skill: 'React',
      image: 'assets/images/skills/react.svg',
    },
    {
      id: 7,
      skill: 'Vue',
      image: 'assets/images/skills/vue.svg',
    },
    {
      id: 8,
      skill: 'NodeJS',
      image: 'assets/images/skills/node-js.svg',
    },
    {
      id: 9,
      skill: 'Ethereum',
      image: 'assets/images/skills/ethereum.svg',
    },
    {
      id: 10,
      skill: 'Solidity',
      image: 'assets/images/skills/solidity.svg',
    },
    {
      id: 11,
      skill: 'Git',
      image: 'assets/images/skills/git.svg',
    },
    {
      id: 12,
      skill: 'Github',
      image: 'assets/images/skills/github.svg',
    },
    // {
    //   id: 13,
    //   skill: 'Gitlab',
    //   image: 'assets/images/skills/gitlab.svg',
    // },
    {
      id: 13,
      skill: 'Ruby',
      image: 'assets/images/skills/ruby.svg',
    },
    {
      id: 14,
      skill: 'Flutter',
      image: 'assets/images/skills/flutter.svg',
    },
    {
      id: 15,
      skill: 'MongoDB',
      image: 'assets/images/skills/mongodb.png',
    },
    {
      id: 16,
      skill: 'MySQL',
      image: 'assets/images/skills/mysql.svg',
    },
  ];

  educationData: any = [
    {
      id: 1,
      from_to_year: '2011 - 2015',
      education: "Bachelor's Degree",
      institution: 'Xiangtan University',
      stream: 'Bachelor of Computer Science',
      info: `Be honored with bachelor’s degree in Computer Science under the robust educational background .
I studied about Web development, Software Engineering, App Development and Project management`,
    },
  ];

  exprienceData: any = [
    {
      id: 6,
      company: 'Crosswise fi',
      location: 'Remote',
      timeline: 'Mar 2021 - Apr 2022',
      role: 'DevOps Manager & Full Stack Developer',
      work: 'Technologies: Git, DigitalOcean, Nginx, pm2, npmjs, React, TypeScript, Web3, Solidity, ICO, NodeJS, Express, MongoDB . Designed work environment to provide easy develop/deploy . Developed APIs by using node.js, mongoDB, express.js . Reviewed and tested frontend as user view'
    },
    {
      id: 5,
      company: 'SideSwap',
      location: 'Remote',
      timeline: 'Jan 2020 - Aug 2020',
      role: 'Full Stack Developer',
      work: 'Technologies: React, JavaScript, Dart, Flutter . Built landing page and dex application with react, web3 . Developed mobile app by using dart / flutter'
    },
    {
      id: 4,
      company: 'PhoenixDeFi',
      location: 'Remote',
      timeline: 'Mar 2019 - Jan 2020',
      role: 'Full Stack Developer / Smart contract developer',
      work: 'Technologies: React, Web3, JavaScript, Blockchain, Solidity, Smart contract, Truffle, Dex . Developed and deployed IOC/farm/pool contract . Developed DEX platform - DeFi . Implemented platform with blockchain network'
    },
    {
      id: 3,
      company: 'OlympusDAO',
      location: 'Remote',
      timeline: 'May 2019 - Nov 2019',
      role: 'Smart contract developer - Freelancer',
      work: 'Technologies: Solidity, Truffle, Smart Contract, Strategy, Bonding & Lending . Built logic of lending system . Implement smart contract by using solidity, truffle'
    },
    {
      id: 2,
      company: 'Aerofiler',
      location: 'Remote',
      timeline: 'Jun 2018 - Nov 2018',
      role: 'Front-end Developer',
      work: 'Technologies: HTML, CSS, JavaScript, PHP, MySQL, Email template, SocketIO . I worked as a front-end developer here to developing company landing page, and did integration work'
    },
    {
      id: 1,
      company: 'GearFocus',
      location: 'Remote',
      timeline: 'May 2015 - Apr 2018',
      role: 'Full Stack Developer',
      work: 'Technologies: Angular, NodeJS, PHP, AWS, HTML, Ruby on rails, SQLite, E2E . I developed search function module, email handling module, and payment process module.'
    },
  ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}

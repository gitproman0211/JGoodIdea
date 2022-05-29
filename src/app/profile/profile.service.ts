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
  ];

  portfolioList: any = [
    {
      id: 1,
      title: "Smart Contract",
      imgUrl: "assets/images/portfolios/smart-contract.png",
      imgAlt: "Smart contract",
      category: "Blockchain Development"
    },
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
      timeline: 'Nov 2018 - Mar 2019',
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
  
  getPortfolioList(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.portfolioList;
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

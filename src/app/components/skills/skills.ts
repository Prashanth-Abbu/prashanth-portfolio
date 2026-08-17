import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  featuredSkills: Skill[] = [
    {
      name: 'Angular',
      icon: 'devicon-angular-plain',
    },
    {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain',
    },
    {
      name: 'RxJS',
      icon: 'devicon-rxjs-plain',
    },
    {
      name: 'React',
      icon: 'devicon-react-original',
    },
    {
      name: 'Micro Frontend',
      icon: 'devicon-nodejs-plain',
    },
  ];

  categories: SkillCategory[] = [
    {
      title: 'Frontend Frameworks',
      description: 'Building reusable and scalable application interfaces.',
      icon: 'bi bi-window-stack',
      skills: [
        { name: 'Angular 11–19', icon: 'bi bi-code-slash' },
        { name: 'Angular Material', icon: 'bi bi-grid-3x3-gap' },
        { name: 'PrimeNG', icon: 'bi bi-ui-checks-grid' },
        { name: 'React.js Basics', icon: 'bi bi-atom' },
      ],
    },

    {
      title: 'Languages',
      description: 'Modern frontend languages and web standards.',
      icon: 'bi bi-braces',
      skills: [
        { name: 'TypeScript', icon: 'bi bi-filetype-tsx' },
        { name: 'JavaScript ES6+', icon: 'bi bi-filetype-js' },
        { name: 'HTML5', icon: 'bi bi-filetype-html' },
        { name: 'CSS3', icon: 'bi bi-filetype-css' },
      ],
    },

    {
      title: 'Reactive & State',
      description: 'Managing asynchronous data and application state.',
      icon: 'bi bi-diagram-3',
      skills: [
        { name: 'RxJS', icon: 'bi bi-diagram-3' },
        { name: 'Observables', icon: 'bi bi-arrow-repeat' },
        { name: 'Subjects', icon: 'bi bi-share' },
        { name: 'BehaviorSubject', icon: 'bi bi-broadcast' },
        { name: 'NgRx Basics', icon: 'bi bi-boxes' },
        { name: 'Redux Toolkit Basics', icon: 'bi bi-stack' },
      ],
    },

    {
      title: 'Forms & APIs',
      description: 'Creating dynamic forms and integrating backend services.',
      icon: 'bi bi-plug',
      skills: [
        { name: 'Reactive Forms', icon: 'bi bi-ui-checks' },
        { name: 'Dynamic Forms', icon: 'bi bi-ui-checks-grid' },
        { name: 'REST APIs', icon: 'bi bi-cloud-arrow-down' },
        { name: 'HttpClient', icon: 'bi bi-globe2' },
        { name: 'Interceptors', icon: 'bi bi-shield-check' },
        { name: 'Axios Basics', icon: 'bi bi-arrow-left-right' },
      ],
    },

    {
      title: 'UI & Styling',
      description: 'Responsive and consistent user interfaces.',
      icon: 'bi bi-palette',
      skills: [
        { name: 'Bootstrap', icon: 'bi bi-bootstrap' },
        { name: 'Flexbox', icon: 'bi bi-layout-three-columns' },
        { name: 'Responsive Design', icon: 'bi bi-phone' },
      ],
    },

    {
      title: 'Tools & Build',
      description: 'Development workflow, collaboration and build tooling.',
      icon: 'bi bi-tools',
      skills: [
        { name: 'Git', icon: 'bi bi-git' },
        { name: 'Azure DevOps', icon: 'bi bi-cloud' },
        { name: 'JIRA', icon: 'bi bi-kanban' },
        { name: 'Postman', icon: 'bi bi-send' },
        { name: 'Angular CLI', icon: 'bi bi-terminal' },
        { name: 'NPM', icon: 'bi bi-box' },
        { name: 'Webpack', icon: 'bi bi-boxes' },
      ],
    },
  ];
}

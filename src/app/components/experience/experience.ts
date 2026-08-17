import { Component } from '@angular/core';

interface ExperienceI {
  company: string;
  role: string;
  period: string;
  number: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences: ExperienceI[] = [
    {
      company: 'Value Momentum Pvt Ltd',
      role: 'Senior Software Engineer',
      period: 'Nov 2023 – Present',
      number: '01',
      description:
        'Working on enterprise frontend applications using Angular, reusable components, reactive data flows and REST API integrations while collaborating with backend, QA and business teams.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
    },

    {
      company: 'CES Technologies Pvt Ltd',
      role: 'Software Technologist',
      period: 'Aug 2021 – Jul 2023',
      number: '02',
      description:
        'Designed and developed Angular applications with reusable modules, reactive forms, RxJS-based data flows and REST API integrations.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material'],
    },

    {
      company: 'Accenture',
      role: 'Software Developer',
      period: 'Dec 2020 – Aug 2021',
      number: '03',
      description:
        'Contributed to frontend development in enterprise delivery teams while working collaboratively within Agile development environments.',
      technologies: ['Frontend Development', 'JavaScript', 'HTML', 'CSS'],
    },
  ];

  responsibilities: string[] = [
    'Implemented Angular route guards and resolvers to secure routes and preload critical data.',
    'Optimized application performance using lazy loading, shared modules and reusable components.',
    'Developed reusable UI components using Angular Material.',
    'Integrated RESTful APIs using Angular HttpClient and interceptors.',
    'Used RxJS, Subjects and BehaviorSubjects to manage asynchronous data flows.',
    'Collaborated with backend developers, QA teams and business stakeholders.',
  ];
}

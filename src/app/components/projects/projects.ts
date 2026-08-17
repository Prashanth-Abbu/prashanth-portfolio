import { Component } from '@angular/core';

interface Project {
  number: string;
  title: string;
  category: string;
  role: string;
  description: string;
  technologies: string[];
  highlights: string[];
  icon: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      number: '01',
      title: 'LV Prasad Eye Institute',
      category: 'Enterprise Healthcare',
      role: 'Design & Development',
      description:
        'A comprehensive healthcare web application designed to streamline patient registration, appointment scheduling and clinical data management.',
      technologies: ['Angular 16', 'TypeScript', 'RxJS', 'Angular Material'],
      highlights: [
        'Patient registration with conditional validations',
        'Dynamic error messaging',
        'Multi-tier dropdowns and autocomplete',
        'Patient billing with tariff filters',
        'IVR and image management API integrations',
      ],
      icon: 'bi bi-heart-pulse',
    },

    {
      number: '02',
      title: 'Helena Agri Hub',
      category: 'Agriculture Platform',
      role: 'Design & Development',
      description:
        'An agricultural platform designed to simplify the seed purchasing process and provide farmers with a user-friendly digital experience.',
      technologies: ['Angular 11+', 'TypeScript', 'RxJS', 'Angular Material', 'Flexbox'],
      highlights: [
        'Scalable Angular modules',
        'Reusable frontend components',
        'Responsive user interface',
        'RxJS-based application flows',
        'Client and backend collaboration',
      ],
      icon: 'bi bi-flower1',
    },

    {
      number: '03',
      title: 'Employee Management Portal',
      category: 'React Application',
      role: 'Personal Project',
      description:
        'A web application for managing employee information, departments and attendance details using a modern React frontend.',
      technologies: ['React.js', 'TypeScript', 'React Router', 'Axios', 'Material UI'],
      highlights: [
        'Reusable React components',
        'React Hooks',
        'REST API integration using Axios',
        'React Router navigation',
        'Context API state management',
      ],
      icon: 'bi bi-people',
    },
  ];
}

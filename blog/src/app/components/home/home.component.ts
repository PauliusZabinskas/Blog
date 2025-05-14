import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent, Project } from '../project-card/project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular and featuring a dark mode design inspired by modern web trends.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourportfolio.com'
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce application with product listings, cart functionality, and secure checkout process.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: 'https://yourecommerce.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application that displays current conditions and forecasts using data from multiple weather APIs.',
      technologies: ['JavaScript', 'CSS', 'OpenWeather API'],
      githubUrl: 'https://github.com/yourusername/weather-app'
    }
  ];
}
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
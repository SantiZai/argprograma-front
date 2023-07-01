import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Project } from 'src/utils/interfaces'
import { AuthService } from 'src/app/auth.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  constructor(public authService: AuthService, private router: Router) {}

  projects: Project[] = [
    {
      name: 'Project 1',
      description: 'Description 1',
      link: 'http'
    },
    {
      name: 'Project 2',
      description: 'Description 2',
      link: 'http'
    },
    {
      name: 'Project 3',
      description: 'Description 3',
      link: 'http'
    }
  ]

  newProject() {
    this.router.navigate(['/newproject'])
  }
}

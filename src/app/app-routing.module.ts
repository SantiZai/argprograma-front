import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NewprojectComponent } from './pages/newproject/newproject.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'projects' , component: ProjectsComponent },
  { path: 'auth' , component: AuthComponent },
  { path: 'newproject', component: NewprojectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

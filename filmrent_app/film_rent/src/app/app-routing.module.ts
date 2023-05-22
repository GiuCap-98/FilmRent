import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
    },
  {
    path:'start-button', component: StartButtonComponent

  },
  {
    path:'dashboard', component: DashboardComponent,
    children: [
      {
        path:'film_details', component: FilmDetailsComponent
      }
    ]
  },
  {
    path:'film_details', component: FilmDetailsComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

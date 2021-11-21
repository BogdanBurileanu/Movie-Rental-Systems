import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {
    path: 'login',component:LogInComponent
  },
  {
    path: 'signup',component:SignUpComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'moviepage',component:MoviePageComponent
  },
  {
    path:'admincomponent',component:AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegistractionComponent } from './registraction/registraction.component';

const routes: Routes = [
  {path:"Home", component:HomeComponent},
  {path:"Registration", component:RegistractionComponent},
  {path:"landing", component:LandingComponent},
  {path:"login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

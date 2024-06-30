import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToursComponent } from './components/tours/tours.component';
// import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { AuthComponent } from './components/auth/auth.component';


export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'signup', component:SignupComponent},
    {path:'login', component:LoginComponent},
    // {path:'auth', component:AuthComponent},
    {path: 'tours', component:ToursComponent},
    {path:'hotels', component:HotelsComponent},
    {path:'admin', component:AdminComponent},



    {path:"**", component:NotFoundComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })


export class AppRoutingModule {

   }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppUserListComponent} from "./app-user-list/app-user-list.component";
import {AppUserRegComponent} from "./app-user-reg/app-user-reg.component";

const routes: Routes = [
  {path: 'applicant', component: AppUserListComponent},
  {path: 'register', component: AppUserRegComponent},
  {path: '', component: AppUserRegComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

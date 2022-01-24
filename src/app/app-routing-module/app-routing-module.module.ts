import { NgModule } from '@angular/core';

import { Routes, RouterModule, Router } from '@angular/router'; // CLI imports router
import { HireDevelopersComponent } from '../hire-developers/hire-developers.component';
import { CreateDeveloperComponent } from '../create-developer/create-developer.component';
import { DeveloperEditViewComponent } from '../developer-edit-view/developer-edit-view.component';

const routes : Routes = [
  {path: "", component: HireDevelopersComponent},
  {path: "hire", component: HireDevelopersComponent},  
  {path: "create", component: CreateDeveloperComponent},
  {path: "edit/:id", component: DeveloperEditViewComponent},
  {path: "**", redirectTo:"/hire" }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

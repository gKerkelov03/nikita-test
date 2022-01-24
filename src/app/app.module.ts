import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

import { AppComponent } from './app-component/app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { AppRoutingModule } from './app-routing-module/app-routing-module.module';
import { HireDevelopersComponent } from './hire-developers/hire-developers.component';
import { CreateDeveloperComponent } from './create-developer/create-developer.component';
import { SearchByDateComponent } from './search-components/search-by-date/search-by-date.component';
import { SearchByTechnologyComponent } from './search-components/search-by-technology/search-by-technology.component';
import { SearchByNameComponent } from './search-components/search-by-name/search-by-name.component';
import { DeveloperHireViewComponent } from './developer-hire-view/developer-hire-view.component';
import { DeveloperEditViewComponent } from './developer-edit-view/developer-edit-view.component';
import { FormViewComponent } from './form-view/form-view.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,    
    HireDevelopersComponent, 
    CreateDeveloperComponent,    
    SearchByDateComponent, 
    SearchByTechnologyComponent, 
    SearchByNameComponent, 
    DeveloperHireViewComponent,
    DeveloperEditViewComponent,
    FormViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2FlatpickrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

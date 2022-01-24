import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevelopersDataService } from '../services/data/developers-data-service.service';
import {Developer} from '../services/data/developer';

@Component({
  selector: 'app-create-developer',
  templateUrl: './create-developer.component.html',
  styleUrls: ['./create-developer.component.css']
})
export class CreateDeveloperComponent implements OnInit {  

  submitButtonValue = "Create";

  constructor(private developersDataService: DevelopersDataService, private router:Router) { }

  ngOnInit(): void {
  }

  handleSubmit = (formData:Developer) => {       
    this.developersDataService.addNewDeveloper(formData).then(_ => this.router.navigate(['/hire']));
    alert("you creation was successfull");                          
  }
}

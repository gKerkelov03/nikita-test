import { Component, Input, OnInit } from '@angular/core';
import { Developer } from '../services/data/developer';
import { ValidateDeveloperDataService } from '../services/validate-developer-data.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  @Input() handleSubmit;
  @Input() scheme;
  @Input() submitButtonValue; 

  profilePictureAltValue = "invalid image url";

  profilePictureURL = "";
  name = "";
  email = "";
  technologies = "";
  description = "";
  yearsOfExperience = "";
  phoneNumber = "";
  pricePerHour = "";
  location = "";
  nativeLanguage = "";
  linkedinProfileLink = "";

  constructor(private validator:ValidateDeveloperDataService) {      
  }

  onSubmitClicked(formData){
    
    let response = this.validator.validate(formData);
    
    if(response != "ok") {
      alert(response)
    }
    else{            
      this.handleSubmit(formData);
    }
  }

  ngOnInit(): void {
    this.nativeLanguage = this.scheme.nativeLanguage;
    this.linkedinProfileLink = this.scheme.linkedinProfileLink;
    this.location = this.scheme.location;
    this.pricePerHour = this.scheme.pricePerHour;
    this.yearsOfExperience = this.scheme.yearsOfExperience;
    this.description = this.scheme.description;
    this.technologies = this.scheme.technologies;
    this.email = this.scheme.email;
    this.name = this.scheme.name;
    this.phoneNumber = this.scheme.phoneNumber;
    this.profilePictureURL = this.scheme.profilePictureURL;    
  }
}

import { Injectable } from '@angular/core';
import { Developer } from './data/developer';

@Injectable({
  providedIn: 'root'
})
export class ValidateDeveloperDataService {
  emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  notRequired = ["linkedinProfileLink", "profilePictureURL", "description"];

  constructor() { }

  private containsNumbers(text:string){
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    return [...text].some(symb => numbers.includes(symb));
  }

  validate(potentialDev:Developer):string{
    
    if(Object.getOwnPropertyNames(potentialDev).filter(key => !potentialDev[key]).some(key => !this.notRequired.includes(key))){
      return "All data except profile picture url, description and linkedin is required. Please enter it!";
    }  

    if(!this.emailRegex.test(potentialDev.email)){
      return "Your email looks wrong. Please enter other email!";
    }

    if(!this.phoneRegex.test(potentialDev.phoneNumber)){
      return "Your phone number looks wrong. Plase enter another!"
    }

    if(this.containsNumbers(potentialDev.nativeLanguage) || this.containsNumbers(potentialDev.location)){
      return "The languages and locations does not incude numbers. Please enter valide data!";
    }

    if(!(potentialDev.linkedinProfileLink?.startsWith("https://www.linkedin.com")) && potentialDev.linkedinProfileLink){
      return "Your Linkedin url does not point to linked in. Please enter valide link!";
    }

    return "ok";
  }
}

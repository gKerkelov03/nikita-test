import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { ImageService } from '../image-service.service';
import { developers } from './developers';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DevelopersDataService {

  constructor(private imageService: ImageService) { }

  addNewDeveloper(developer: Developer){
    return new Promise((resolve, _) => {
      this.imageService.checkIfImageExists(developer.profilePictureURL, (exists) => {
        developer._id = uuid();
        developer._busyPeriods = [];

        if(typeof developer.technologies == "string"){
          developer.technologies = (developer.technologies as unknown as string).split(/[\s,]+/).filter(x => x);          
        }
        
        if (!exists) {
          developer.profilePictureURL="";
        } 
  
        developers.push(developer);
        resolve(true);
      });    
    });
  }

  deleteDeveloper(id:string){    
    let index = developers.findIndex(dev => dev._id == id);
    
    if(index != -1){
      developers.splice(index, 1);
    }     
  }

  getAllDevelopers(){
    return [...developers];
  }  

  editDeveloper(id, newData:Developer){    
    let index = developers.findIndex(dev => dev._id == id);
    if(typeof newData.technologies == "string"){
      newData.technologies = (newData.technologies as unknown as string).split(/[\s,]+/).filter(x => x);
      console.log(newData.technologies);
    }

    if(index != -1){
      developers[index] = {        
        ...newData,
        "_id":developers[index]._id,
        "_busyPeriods":developers[index]._busyPeriods,
      }
    }
  }

  getById(id:string){
    return developers.find(dev => dev._id == id);
  }
}


import { Injectable } from '@angular/core';
import { Developer } from './data/developer';
import { DevelopersDataService } from './data/developers-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class SelectionManagerService {
  private currentlySelected:Developer[] = [];

  constructor(private developerDataService:DevelopersDataService) {

  }

  getBusyPeriodsOfTheSelectedDevelopers(): {from:string, to:string}[]{
    let result:{from:string, to:string}[] = [];

    for(let dev of this.currentlySelected){
      result = result.concat(dev._busyPeriods);      
    }

    return result;
  }

  selectClickedOn(developer:Developer){
    let index = this.currentlySelected.map(x => x._id).indexOf(developer._id)
    if(index == -1){
      this.currentlySelected.push(developer);
    } 
    else {
      this.currentlySelected.splice(index, 1);
    }
  }

  isSelected(developer:Developer){
    return this.currentlySelected.map(x => x._id).includes(developer._id);
  }

  unselect(developer:Developer){
    let index = this.currentlySelected.map(x => x._id).indexOf(developer._id);

    if(index != -1){
      this.currentlySelected.splice(index, 1);
    }
  }

  selectedDevelopersCount(){
    return this.currentlySelected.length;
  }

  isDateFreeForAllDevelopers(date:string){
    if(!this.selectedDevelopersCount()){
      return false;
    }

    return this.getBusyPeriodsOfTheSelectedDevelopers().every(period => {
      let fromDate = new Date(period.from),
          toDate = new Date(period.to),
          dateToCheck = new Date(date);

        return !(fromDate <= dateToCheck && toDate >= dateToCheck);
    });
  }  

  hireSelectedDevelopers(fromToObject){    
    this.currentlySelected.forEach(dev => {
      dev._busyPeriods.push(fromToObject)
    });    
  }

  unselectAll(){
    this.currentlySelected = [];
  }

  getAllSelectedDevelopersByName(){
    return this.currentlySelected.map(x => x.name);
  }
}

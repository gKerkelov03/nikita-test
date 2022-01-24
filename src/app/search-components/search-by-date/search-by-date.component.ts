import { Component, OnInit } from '@angular/core';
import flatpickr from "flatpickr";

import { FlatpickrOptions } from 'ng2-flatpickr';
import { RefreshPageService } from 'src/app/services/refresh-page.service';
import { SelectionManagerService } from 'src/app/services/selection-manager.service';
 
@Component({
  selector: 'app-search-by-date',
  templateUrl: './search-by-date.component.html',
  styleUrls: ['./search-by-date.component.css']
})
export class SearchByDateComponent implements OnInit {
  
  options = {    
    mode:"range",
    minDate:"today",
    onClose: (selectedDates:string[]) => {
      if(selectedDates.length == 2 && this.selectionManager.selectedDevelopersCount()){
        let from = this.getProperFormat(new Date(selectedDates[0]));
        let to = this.getProperFormat(new Date(selectedDates[1]));

        this.selectionManager.hireSelectedDevelopers({ from, to });
        alert(`You have successfully hired ${this.selectionManager.getAllSelectedDevelopersByName().join(", ")} from: ${from} to: ${to}`)
        this.selectionManager.unselectAll();
        this.refresher.refresh();
      }
    },
    disable: [
      (date:Date) => {          
         let formatedDate = this.getProperFormat(date);
         return !this.selectionManager.isDateFreeForAllDevelopers(formatedDate);
      }
    ]
  };
  
  constructor(private selectionManager:SelectionManagerService, private refresher:RefreshPageService) { }

  ngOnInit(): void {
    
  }

  getProperFormat(date:Date){
    let month:string = (date.getMonth() + 1).toString(),
        day:string = (date.getDate()).toString();

        if(month.length == 1){
          month = "0" + month;
        }

        if(day.length == 1){
          day = "0" + day;
        }

    return `${date.getFullYear()}-${month}-${day}`;
  }
}

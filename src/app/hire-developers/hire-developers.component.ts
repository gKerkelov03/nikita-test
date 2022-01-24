import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from '../services/data/developer';
import { DevelopersDataService } from '../services/data/developers-data-service.service';
import { RefreshPageService } from '../services/refresh-page.service';
import { SearchByDateComponent } from '../search-components/search-by-date/search-by-date.component';
import { SelectionManagerService } from '../services/selection-manager.service';
import { DeveloperEditViewComponent } from '../developer-edit-view/developer-edit-view.component';


@Component({
  selector: 'app-hire-developers',
  templateUrl: './hire-developers.component.html',
  styleUrls: ['./hire-developers.component.css']
})
export class HireDevelopersComponent implements OnInit {

  allDevelopers:Developer[];  
  selectedCount:number = 0; 

  constructor(private selectionManager: SelectionManagerService, private developersDataService: DevelopersDataService, private router:Router, private refreshCurrentPageService:RefreshPageService) {
    this.allDevelopers = this.developersDataService.getAllDevelopers();
    this.selectedCount = this.selectionManager.selectedDevelopersCount();   
  }

  ngOnInit(): void {
    
  }      

  isSelected(developer: Developer){
    return this.selectionManager.isSelected(developer);
  }

  starClicked(developer: Developer){    
    this.selectionManager.selectClickedOn(developer);
    this.selectedCount = this.selectionManager.selectedDevelopersCount();
    this.refreshCurrentPageService.refresh();
  }

  editDeveloper(developer: Developer){
    this.router.navigate(["/edit/"+developer._id]);
  }

  deleteDeveloper(developer: Developer){
    if(confirm(`Are you sure that you want to delete ${developer.name}  forever?`)){
      this.developersDataService.deleteDeveloper(developer._id); 
      this.selectionManager.unselect(developer);  
      this.selectedCount = this.selectionManager.selectedDevelopersCount();     
      this.refreshCurrentPageService.refresh();       
    }       
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Developer } from '../services/data/developer';
import { DevelopersDataService } from '../services/data/developers-data-service.service';


@Component({
  selector: 'app-developer-edit-view',
  templateUrl: './developer-edit-view.component.html',
  styleUrls: ['./developer-edit-view.component.css']
})
export class DeveloperEditViewComponent implements OnInit {   
  currentDeveloper;
  shouldDisplayAsNotFound=false;
  submitButtonValue="Edit";    

  constructor(private route: ActivatedRoute, private router:Router, private developersDataService: DevelopersDataService) 
  {   
      this.route.params.subscribe(params => {
        let devById = this.developersDataService.getById(params['id']);
        if(devById){
          this.currentDeveloper = devById;        
        } else {
          this.shouldDisplayAsNotFound = true;
        }
      });      
  }

  handleSubmit = (formData:Developer) => {                
      this.developersDataService.editDeveloper(this.currentDeveloper._id, formData);
      alert("your edit was successfull");                      
      this.router.navigate(['/hire']);    
  }

  ngOnInit(): void {}     
}

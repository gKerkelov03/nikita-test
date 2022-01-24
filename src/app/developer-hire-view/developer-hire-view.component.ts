import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Developer } from '../services/data/developer';

@Component({
  selector: 'app-developer-hire-view',
  templateUrl: './developer-hire-view.component.html',
  styleUrls: ['./developer-hire-view.component.css']
})
export class DeveloperHireViewComponent implements OnInit {

  @Input() developer;
  @Input() isSelected;

  @Output() notifyDeleteClicked = new EventEmitter<Developer>();
  @Output() notifyEditClicked = new EventEmitter<Developer>();
  @Output() notifyStarClicked = new EventEmitter<Developer>();


  constructor() {}

  ngOnInit(): void {
  }

  starClicked(){
    this.isSelected = !this.isSelected;
    this.notifyStarClicked.emit(this.developer); 
  }

  delClicked(){
    this.notifyDeleteClicked.emit(this.developer);    
  }

  editClicked(){
    this.notifyEditClicked.emit(this.developer);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-by-technology',
  templateUrl: './search-by-technology.component.html',
  styleUrls: ['./search-by-technology.component.css']
})
export class SearchByTechnologyComponent implements OnInit {
  val= "";

  constructor() { }

  ngOnInit(): void {
  }
  onFocusOut(){    
    this.val= "";    
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css', "../search-by-technology/search-by-technology.component.css"]
})
export class SearchByNameComponent implements OnInit {
  val = "";

  constructor() { }

  ngOnInit(): void {
  }  

  onFocusOut(){    
    this.val= "";    
  }
}

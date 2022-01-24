import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RefreshPageService {

  constructor(private router: Router) { }

  refresh(){
    let tmp = this.router.url;
    new Promise((resolve, _)=>{
      this.router.navigate(['/create']);
      resolve(true);
    }).then(_=>this.router.navigate([tmp])); 
  }
}

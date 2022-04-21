import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;
  menu = [
    { name: "Search", icon: "search", link: "search" },
    { name: "History", icon: "history", link: "history" }
  ]
  constructor(
    private router:Router
  ) { }

  navigate(data:any){
    console.log("data",data);
    this.router.navigate([`${data.link}`])
  }

}

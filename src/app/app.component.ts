import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularFrontend';
  display : boolean = false;
  constructor(){}
  
  ngOnInit(){
  	 
  }
  toggleDisplay(){
  	this.display ? this.display = false : this.display = true;  	 
  }
}

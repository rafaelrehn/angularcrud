import { Component } from '@angular/core';
import { trigger, style, animate, transition, query, group, state,stagger } from '@angular/animations'; //animations

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [        
        query(':enter, :leave', style({ /*position: 'fixed', width:'100%'*/ }), { optional: true }),        
        group([  
          query(':enter', [
            stagger(100, [
              style({ opacity: 0 }),
              animate('0.3s ease-in-out', style({ opacity: 1 }))
            ])
          ], { optional: true }),
          /*query(':leave', [
            style({ opacity: 1 }),
            animate('0.5s ease-in-out', style({ opacity: 0 }
          ], { optional: true }) */
        ])
      ])     
    ])
  ]
 
}) 
export class AppComponent {
  title = 'AngularFrontend';
  state : boolean = false;
  display: boolean = false;
  constructor(){}
  
  ngOnInit(){
  	 
  }  

  toggleDisplay(){
    this.display = !this.display;
    console.log(this.display);
  }

  getDepth(outlet){
    return outlet.activatedRouteData.state;
  }
}

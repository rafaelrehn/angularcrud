import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

import { ITEMS } from './lista-items';
import { Item } from './item';

@Injectable()
 
export class DataService {	

  //private items = new BehaviorSubject<any>(ITEMS);

  //item = this.items.asObservable();

  constructor() { }
  

  getItems(): Observable<Item[]> {    
    return of(ITEMS);
  }
 
  getItem(id: number): Observable<Item> {	  
	  return of(ITEMS.find(item => item.id === id));
  }

}

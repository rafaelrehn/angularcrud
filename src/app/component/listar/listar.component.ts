import { Component, OnInit, HostBinding } from '@angular/core';
import { Item } from '../../item';
import { ITEMS } from '../../lista-items';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  itemCount: number;
  items = ITEMS;

  constructor() { }

  ngOnInit() {    
  	this.itemCount = this.items.length;    
  }

}

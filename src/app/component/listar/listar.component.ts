import { Component, OnInit } from '@angular/core';

import { Item } from '../../item';
import { DataService } from '../../data.service';
 
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']    
})
export class ListarComponent implements OnInit {
  items: Item[];
  itemCount: number;

  alerta: boolean = false;
  varRegistro: string; 
  idItemExcluir: number;

  constructor(private _data: DataService) { }
 
  ngOnInit() {
    this.getItems();
    this.itemCount = this.items.length;
  }
 
  getItems(): void {
    this._data.getItems()
    .subscribe(items => this.items = items);
  }

  deleteItem(){
    this.items.splice(this.idItemExcluir, 1);    
    this.itemCount = this.items.length;
    this.alerta = false;
  }

  deleteModal(index){  
    this.alerta = true;
    this.idItemExcluir = index;
  }

}


/*import { Component, OnInit, HostBinding } from '@angular/core';
import { DataService } from '../../data.service';
import { Item } from '../../item';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  itemCount: number;
  itemNome : string;   

  items: item[];

  //declare var items: any;
  constructor(private _data: DataService){}

  ngOnInit() {      
    //this._data.item.subscribe(item=> this.items = item);
    //this.itemCount = this.items.length;
    //this._data.updateItem(this.items);

    this.getItems();
  }

  getItems(): void {
    this._data.getItems().subscribe(items => this.items = items);
    this.itemCount = this.items.length;
  }
  
  deleteItem(index){
    this.items.splice(index, 1);
    //this._data.updateItem(this.items);
    this.itemCount = this.items.length;
  }

  addItem(){
    this.items.push({nome: this.itemNome});
    this.itemNome = '';
    //console.log(this.item);
  }
  
}*/

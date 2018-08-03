import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  itemCount: number;
  items = [
  	{id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Sim', val:'17/09/2018', fab: '22/07/2018'},
  	{id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Sim', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Sim', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Sim', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'},
    {id:1,nome:'Banana', um:'Kg', qtd:32, valor: 17.43, perecivel: 'Não', val:'17/09/2018', fab: '22/07/2018'}

  	
  ];

  constructor() { }

  ngOnInit() {    
  	this.itemCount = this.items.length;    
  }

}

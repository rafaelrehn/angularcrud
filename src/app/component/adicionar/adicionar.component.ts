import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SelectItem } from 'primeng/api';
import { Item } from '../../item';

/* Interface Dropdowns */
interface um {
  name: string;  
}
interface per {
  name: string;  
}

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})

export class AdicionarComponent implements OnInit {
  @Input() item: Item;
  
  /* Var Dropdown unidade de medida  */
  listaUm: SelectItem[];
  selectedListaUm: um;
  /* Var Dropdown perecível  */
  listaPer: SelectItem[];
  selectedListaPer: per;
   
  /* Váriaveis de elementos dos input CALENDARIO da biblioteca PrimeNG */
  pt: any;
  varUm: any;    

  //Variveis input quantidade 
  maxvalue: number;
  minvalue: number;
  stepvalue: number; 
  varPrecisao: number;
  qtd: any;

  // Variaveis do registro
  items: Item[]; 

  // var input data de validade
  inputVal = false;

  //var input data de fabricação  
  maxDate: any;
  /* Váriaveis temporária para manipulação de registro */
  itemTemp: { 
    id?: number,
    nome?: string,
    um?: string,
    qtd?: number,
    valor?: number,
    perecivel?: string,
    val?: string,
    fab?: string
  } = {};   
  
      
  constructor(private _data: DataService,private location: Location,private route: ActivatedRoute,) {
  	/* Array de elementos dos input DROPDOWN da biblioteca PrimeNG */
    this.listaUm = [
      {label:'Selecionar', value:null},
      {label:'Litro (l)', value:'l'},
      {label:'Quilograma (Kg)', value:'Kg'},
      {label:'Unidade (Un)', value:'Un'},        
    ];
    this.listaPer = [
      {label:'Selecionar', value:null},
      {label:'Perecível', value:'Sim'},
      {label:'Não Perecível', value:'Não'}     
    ];
  }
  
  ngOnInit() {
    //console.log(this.inputVal);
    /* Array de elementos dos input CALENDARIO da biblioteca PrimeNG */
    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta", "Quinta-feira", "Sexta-feira", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      dayNamesMin: ["Do","Se","Te","Qu","Qu","Se","Sa"],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
      today: 'Hoje',
      clear: 'Limpar'
    };
    
    this.getItem();
    this.getItems();

    this.maxDate = new Date('2118-10-15');
    this.checkInputVal(); // habilita input data de validade caso this.item.perecivel =='sim'
  }


  /* Captura de TODOS itens do dataservice */
  getItems(): void {
    this._data.getItems().subscribe(items => this.items = items);
  } 
  
  /* Captura de UM item do dataservice */
  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._data.getItem(id).subscribe(item => this.item = item);    
    this.itemTemp= Object.assign({}, this.item);    
  }

  /* Função (click) do botão registrar, adicionando um novo elemento no array item */
  addItem(array){  
    //this.itemTemp = Object.assign({}, array[0]);    
    array.id = this.items[this.items.length-1].id + 1 ;    
    this.items.push(array);
    //console.log(array.nome);
  } 

  /* Função (click) do botão registrar, atualizando elemento no array item */
  updateItem(newItem){
    let updateItem = this.items.find(this.findIndexToUpdate, newItem.id);
    let index = this.items.indexOf(updateItem);
    this.items[index] = newItem;
  }
  findIndexToUpdate(newItem) { 
    return newItem.id === this;
  }

  maxDateFunction(value){
    this.maxDate = new Date(value);
  }
  /* Função que altera o valor do input Quantidade adicionando sufixo 'l', 'Kg', 'Un' */  
  parametroUm(novovalor){
  if (novovalor.value == 'l') {
    this.maxvalue = 999;
    this.minvalue = -999;
    this.stepvalue = 0.1;
    this.varPrecisao = 3;
    this.varUm=novovalor.value;
  }    
  if (novovalor.value == 'Kg') {
    this.maxvalue = 999;
    this.minvalue = -999;
    this.stepvalue = 0.1;
    this.varPrecisao = 3;
    this.varUm=novovalor.value;
  }
  if (novovalor.value == 'Un') {
    this.maxvalue = 999;
    this.minvalue = 0;
    this.stepvalue = 1;
    this.varPrecisao = 0;
    this.varUm=novovalor.value;
  }
  this.qtd = null;
  }

  /* Função habilita input data de validade */
  changeInputVal(value){ 
    if (value.value == 'Sim'){
      this.inputVal = true;      
    }else{
      this.inputVal = false;
      this.itemTemp.val = '';
    }    
  }

  /* habilita input data de validade caso this.item.perecivel =='sim' */
  checkInputVal(){
    if (this.itemTemp.perecivel=='Sim')
      this.inputVal = true;
  }
}
import { Component, OnInit } from '@angular/core';
import { Item } from '../../item'; // Classe
import { ITEMS } from '../../lista-items'; // lista de items
import { SelectItem } from 'primeng/api'; // PrimeNG

//unidade de medida
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
	
  items = ITEMS;
  nome: string;

  /* select unidade de medida */
  listaPer: SelectItem[];
  selectedListaPer: per;

  /* select unidade de medida */
  listaUm: SelectItem[];
  selectedListaUm: um;
 
  /* Calendario settings */
  pt: any;


  /* Variveis input quantidade */
  maxvalue: number;
  minvalue: number;
  stepvalue: number;

  varUm: string;

  constructor() {
  	//SelectItem API with label-value pairs
    this.listaUm = [
        {label:'Selecionar', value:null},
        {label:'Litro (l)', value:'l'},
        {label:'Quilograma (Kg)', value:'Kg'},
        {label:'Unidade (Un)', value:'Un'},        
    ];    
    //SelectItem API with label-value pairs
    this.listaPer = [
        {label:'Selecionar', value:null},
        {label:'Perecível', value:'Sim'},
        {label:'Não Perecível', value:'Não'}     
    ];
  }

  ngOnInit() {
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
  }

  parametroUm(novovalor){
    if (novovalor.value == 'l') {
      this.maxvalue = 999;
      this.minvalue = -999;
      this.stepvalue = 0.1;
      this.varUm=novovalor.value;
      //console.log(novovalor.value);
    }    
    if (novovalor.value == 'Kg') {
      this.maxvalue = 999;
      this.minvalue = -999;
      this.stepvalue = 0.1;
      this.varUm=novovalor.value;
      //console.log(novovalor.value);
    }
    if (novovalor.value == 'Un') {
      this.maxvalue = 999;
      this.minvalue = 0;
      this.stepvalue = 1;
      this.varUm=novovalor.value;
      //console.log(novovalor.value);
    }    
    document.getElementById('inputQtd').value = '';
  }

  verificaForm(valor){
    if(valor.value > this.maxvalue){
      window.alert
    }  
  }
}
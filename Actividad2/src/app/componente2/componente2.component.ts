import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit{
  constructor(private router:Router){}

  resultado:any;
  mensaje:any;
  suma:number=0;
  ngOnInit(): void {
    this.recuperar
  }
  navegacion(){
    this.router.navigate(['web1'])
  }
  navegacion2(){
    this.router.navigate(['web3'])
  }
  recuperar(){
    this.resultado=localStorage.getItem('valor_total');
    this.suma=2+parseInt(this.resultado);
    this.mensaje=localStorage.getItem('mensaje');
  }

}

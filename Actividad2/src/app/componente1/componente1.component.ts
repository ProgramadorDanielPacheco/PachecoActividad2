import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit{

  numero: any;
  nombre_variable:number=0;
  suma:number=0;
  vector: string[]=[];
  suma2: number=0;
  sum=0;
  sueldos=[1777,1451,21560,4561,2123,7856]
  ngOnInit(): void {
    this.numero=1
    this.total();
    
  }

  total(){
    let numero1:number=0;
    let numero2:number=0;

    this.suma=numero1+numero2;
    console.log(this.suma);

    this.suma=this.suma+15;
    console.log(this.suma);

    this.total2(this.suma);
  }

  total2(sum:number){
    let total3:number=0;
    total3=sum*2;
    console.log(total3);
  }

}

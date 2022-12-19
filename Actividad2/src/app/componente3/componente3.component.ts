import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {
  constructor(private router: Router){}
  Nombre: any
  Email: any
  Contra: any
  repContra: any
  Telefono: any

  ngOnInit(){
    this.recupera()
  }

  recupera(){
    this.Nombre= localStorage.getItem('Name')
    this.Email= localStorage.getItem('Email')
    this.Contra= localStorage.getItem('Contrasena')
    this.repContra= localStorage.getItem('repetirContrasena')
    this.Telefono= localStorage.getItem('Celular')
  }

  regresar(){
    this.router.navigate(['web2'])
  }

}

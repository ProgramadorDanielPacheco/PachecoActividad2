import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit{
  constructor(private router:Router){}
  Name: any
  Email: any
  Contrasena: any
  repetirContrasena: any
  Celular: any

  
  ngOnInit(): void {
    
  }
  navegacion(){
    this.router.navigate(['web1'])
  }

  recuperar(){
    this.router.navigate(['web3'])
    localStorage.setItem('Name', this.Name)
    localStorage.setItem('Email', this.Email)
    localStorage.setItem('Contrasena', this.Contrasena)
    localStorage.setItem('repetirContrasena', this.repetirContrasena)
    localStorage.setItem('Celular', this.Celular)
  }

}

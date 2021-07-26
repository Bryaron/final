import { Component, OnInit } from '@angular/core';

import { ConexionService } from '../services/conexion.service';



@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  items:any;


  constructor(private conexion:ConexionService){
    this.items = this.conexion.listaItem().subscribe(item=>{
      this.items= item;
      console.log(this.items);
    })
  }


  ngOnInit(): void {}

}

import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-lista-cuenta',
  templateUrl: './lista-cuenta.component.html',
  styleUrls: ['./lista-cuenta.component.css']
})
export class ListaCuentaComponent implements OnInit {

  item:any ={
    name:''
  }

  constructor(private servicio:ConexionService) { }

  ngOnInit(): void {
  }

  agregar(){
    this.servicio.agregarItem(this.item);
    this.item.name ='';
  }

}

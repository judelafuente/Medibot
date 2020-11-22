import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionar-cuenta',
  templateUrl: './gestionar-cuenta.component.html',
  styleUrls: ['./gestionar-cuenta.component.css']
})
export class GestionarCuentaComponent implements OnInit {

  hide = true;
  configurarNombre: string;
  configurarApellido: string;
  configurarSexo: string;
  configurarFecha: string;
  configurarCorreo: string;
  confirmPassword: string;
  constructor() { }

  ngOnInit(): void {
  }
  configurar() {
    console.log(this. configurarNombre);
    console.log(this. configurarApellido);
    console.log(this. configurarSexo);
    console.log(this. configurarFecha);
    console.log(this.configurarCorreo);
  }

}

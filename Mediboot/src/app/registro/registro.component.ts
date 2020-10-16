import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  hide = true;
  email: string;
  Usuario: string;
  confirmPassword: string;
  constructor() { }

  ngOnInit(): void {
  }
  register() {
    console.log(this.email);
    console.log(this.Usuario);
  }
}

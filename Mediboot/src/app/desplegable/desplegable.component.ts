import { ChangeDetectorRef } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-desplegable',
  templateUrl: './desplegable.component.html',
  styleUrls: ['./desplegable.component.css']
})
export class DesplegableComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  fillerNav = [
  {name:"Gestionar cuenta",route:"gestionarCuenta",icon:"article"},
  {name:"Instrucciones",route:"login",icon:"accessibility"},
  {name:"Soporte",route:"soporte",icon:"build"},
  {name:"Cerrar sesion",route:"",icon:"sensor_door"}
  ]
 

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun =true;


  

}

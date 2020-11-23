import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { EliminarNotificacionComponent } from './eliminar-notificacion/eliminar-notificacion.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { ModificarNotificacionComponent } from './modificar-notificacion/modificar-notificacion.component';
import { SoporteComponent } from './soporte/soporte.component';
import { GestionarCuentaComponent } from './gestionar-cuenta/gestionar-cuenta.component';
import { InicioComponent } from './inicio/inicio.component';
import { DesplegableComponent } from './desplegable/desplegable.component';
import { InstruccionesComponent } from './instrucciones/instrucciones.component'; 

import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {​​​​MatGridListModule}​​​​ from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';

import {CalendarModule} from 'primeng/calendar';



const rutas: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeComponent },
 { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    EliminarNotificacionComponent,
    RecuperarContrasenaComponent,
    ModificarNotificacionComponent,
    SoporteComponent,
    GestionarCuentaComponent,
    InicioComponent,
    DesplegableComponent,
    InstruccionesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rutas,{ enableTracing: true }),
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    CalendarModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatSliderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

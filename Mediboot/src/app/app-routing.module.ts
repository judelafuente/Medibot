import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EliminarNotificacionComponent } from './eliminar-notificacion/eliminar-notificacion.component';
import { GestionarCuentaComponent } from './gestionar-cuenta/gestionar-cuenta.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ModificarNotificacionComponent } from './modificar-notificacion/modificar-notificacion.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { RegistroComponent } from './registro/registro.component';
import { SoporteComponent } from './soporte/soporte.component';
import { InstruccionesComponent } from './instrucciones/instrucciones.component'; 
const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'modificarNotificacion', component: ModificarNotificacionComponent},
  {path: 'eliminarNotificacion', component: EliminarNotificacionComponent},
  {path: 'recuperarContrasena', component: RecuperarContrasenaComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'gestionarCuenta', component: GestionarCuentaComponent},
  {path: 'soporte', component: SoporteComponent},
  {path: 'instrucciones', component: InstruccionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

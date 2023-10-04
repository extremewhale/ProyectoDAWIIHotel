import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasajeroModule } from './pasajero/pasajero.module';
import { ReservaModule } from './reserva/reserva.module';
import { TipousuarioModule } from './tipousuario/tipousuario.module';
import { UsuarioModule } from './usuario/usuario.module';
import { LoginPrincipalComponent } from './login/login-principal/login-principal.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasajeroModule,
    ReservaModule,
    TipousuarioModule,
    UsuarioModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

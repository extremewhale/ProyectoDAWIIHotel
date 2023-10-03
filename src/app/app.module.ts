import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasajeroModule } from './pasajero/pasajero.module';
import { ReservaModule } from './reserva/reserva.module';
import { TipousuarioModule } from './tipousuario/tipousuario.module';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasajeroModule,
    ReservaModule,
    TipousuarioModule,
    UsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

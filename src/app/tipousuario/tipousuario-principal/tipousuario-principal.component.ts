import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tipousuario-principal',
  templateUrl: './tipousuario-principal.component.html',
  styleUrls: ['./tipousuario-principal.component.css']
})
export class TipousuarioPrincipalComponent {

  constructor(private router:Router){

  }

  agregar(){
    this.router.navigate(["/tipousuario/agregar"])
  }

}

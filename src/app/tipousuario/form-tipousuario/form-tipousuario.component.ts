import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-tipousuario',
  templateUrl: './form-tipousuario.component.html',
  styleUrls: ['./form-tipousuario.component.css']
})
export class FormTipousuarioComponent {

  titulo:string="";

  constructor(private routes:ActivatedRoute,private router:Router){
    const parametroValor = this.routes.snapshot.params['id'];
    if(parametroValor==undefined) this.titulo="Nuevo Tipo usuario"
    else this.titulo="Editar Tipo usuario"
  }

  regresar(){
    this.router.navigate(["tipousuario"])
  }

}

import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasajeroService } from '../pasajero.service';
import { Pasajero } from '../interfaces/Pasajero'; 
import { AbstractControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-pasajero',
  templateUrl: './form-pasajero.component.html',
  styleUrls: ['./form-pasajero.component.css']
})
export class FormPasajeroComponent {
  @ViewChild('formpasajero') formpasajero!:NgForm;
  titulo:string=""
  pasajero:Pasajero={
    names:"",
    lastname1:"",
    lastname2:"",
    nrodoc:"",
    idtpodoc:0,
    email:"",
    idpas:0,
    active:"1",
    phone:""
    };
    private controlInvalidAndTouched(controlName: string): boolean {
      const control = this.formpasajero?.controls[controlName];
      return control?.invalid && control.touched;
  }
  
  

    nombreValido(): boolean {
      return this.controlInvalidAndTouched('names');    
    }
    apellidoPatValido(): boolean {
      return this.controlInvalidAndTouched('lastname1');
    }
    
    apellidMatValido(): boolean {
      return this.controlInvalidAndTouched('lastname2');
    }
    tipoDocumentoInvalido(): boolean {
      return this.formpasajero?.controls['idtpodoc'].value === 0;
    }
    DocumentoInvalido(): boolean {
      return this.controlInvalidAndTouched('nrodoc');
    }
    EmailInvalido(): boolean {
      return this.controlInvalidAndTouched('email');
    }
    PhoneInvalido(): boolean {
      return this.controlInvalidAndTouched('phone');
    }
    
  
  constructor(private router:Router,private pasajeroService:PasajeroService,private routes:ActivatedRoute){
     var id:string=routes.snapshot.params["id"];
     if(id==undefined) this.titulo="Agregar Pasajero"
     else{
      this.titulo="Editar Pasajero"
      this.pasajeroService.obtenerPasajero(Number(id)).subscribe(res=>{
          this.pasajero=res;
      })
     } 
  }

  get tipodocumentos(){
    return this.pasajeroService.tipodocumentos
  }
  
  regresar(){
    this.router.navigate(["pasajero"])
  }

  guardar(){
   console.log(this.formpasajero)
   console.log('Guardado exitoso')
   this.formpasajero.resetForm();
  }




}

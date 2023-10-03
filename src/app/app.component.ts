import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoDAWIIHotel';

  boton(){
    console.log("CLic")
    var body = document.body;

    // Verifica si el cuerpo tiene la clase 'closed-menu'
    if (body.classList.contains('closed-menu')) {
        // Si tiene la clase, remuévela
        body.classList.remove('closed-menu');
    } else {
        // Si no tiene la clase, agrégala
        body.classList.add('closed-menu');
    }
  }

}

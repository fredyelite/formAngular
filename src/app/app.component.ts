import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiBuscarEstadoCiudadService } from './services/api-buscar-estado-ciudad.service';
import { Geoname } from './interfaces/EstadosCiudadesInterface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

estadosCiudades: Geoname[] = []

  constructor(private ApiBuscarEstadoCiudadService : ApiBuscarEstadoCiudadService, private fb: FormBuilder) { }

  buscar(nombre: string){
    if(nombre.length >= 3)
    {
      this.ApiBuscarEstadoCiudadService.buscarLocacion(nombre).subscribe(data =>{
        this.estadosCiudades = data;
        console.log(data)
      })

    }
}


}




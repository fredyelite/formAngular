import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadosCiudades, Geoname } from '../interfaces/EstadosCiudadesInterface';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBuscarEstadoCiudadService {

  constructor(private http : HttpClient) { }

  buscarLocacion(nombre: string): Observable<Geoname[]>{
    return this.http.get<EstadosCiudades>("http://api.geonames.org/searchJSON?q="+nombre+"&username=fredymedina").
    pipe(
      map(this.filtrarDatos)
    )
}

filtrarDatos(data: EstadosCiudades): Geoname[]{
  const estCidList: Geoname[] = data.geonames.map( x => {
    return {
      toponymName:  x.toponymName,
      name:         x.name,
      adminName1:   x.adminName1
    }
  })
  return estCidList;
}



}

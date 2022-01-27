import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {

  constructor() { }

  getExperiencias() {
    return {
      "status": 200,
      "data": [
          {
            "tipo": "Experiencia Laboral",
              "fecha_inicio": "2016",
              "fecha_final": " la actualidad",
              "titulo": "Comunicación Gubernamental",
              "lugar": "Municipio de Tandil",
              "descripcion": "Creación de contenidos. Gestión de Redes Sociales. Comunicación institucional",
          },
          {
              "fecha_inicio": "2016",
              "fecha_final": " la actualidad",
              "titulo": "Locución Institucional",
              "lugar": "Municipio de Tandil",
              "descripcion": "Conducción de actos y eventos protocolares",
          },
          {
              "fecha_inicio": "2015",
              "fecha_final": "2016",
              "titulo": "Producción y Conducción Radial",
              "lugar": "AM Radio Tandil",
              "descripcion": "Producción radial de programas informativos y de interés general. Conducción",
          }
      ]
  }
  }
}

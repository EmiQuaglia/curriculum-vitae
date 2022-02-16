import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  constructor() { }


getFormacion () {
  return{ 
    "status": 200,
    "data": [
      

      {
         "tipo": "Formacion Profesional",
        "titulo": "Bachiller en Comunicación Social",
        "institucion": "EEM N° 8",
        "fechaEgreso": "2012",
        "img_src": "https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/"
      },
      
      {
        "titulo": "Técnica en Comunicación Social",
        "institucion": "ISFDyT 10",
        "fechaEgreso": "2017",
        "img_src": "https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/"
      }
    ]
  }
}

}
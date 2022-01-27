import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {

  constructor() { }


//*TERMINAR ESTO - hacer dos columnas (googlear)
getDatosPersonales() {
  return {
    "status": 200,
    "data": [
        {
          "tipo": "Datos Personales",
            "nombre": "Emiliana Quaglia",
            "fecha de nacimiento": "23/02/1995",
            "dni": "38.917.215",
            "pais": "Argentina",
       
        }
    ]
}

}
}
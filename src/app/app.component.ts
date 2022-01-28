import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from './experiencias.service';
import { FormacionService } from './formacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'curriculum-vitae';

  listaExperiencias: any[] = [];
  listaFormacion: any[] = [];
  listaDatosPersonales: any[] = [];

  constructor(private experienciasService: ExperienciasService, private formacionService: FormacionService) { }

  ngOnInit(): void {
    // este es un evento que se ejecuta cuando se inicia el componente
    this.getExperiencias();
    this.getFormacion();
  }

  private getExperiencias(): void {
    this.listaExperiencias = this.experienciasService.getExperiencias().data.map((item) => {
      return {
        ...item,
        duracion: "Desde el año " + item.fecha_inicio + " hasta " + item.fecha_final
      }
    })
  }
    

  private getFormacion (){
    this.listaFormacion = this.formacionService.getFormacion().data.map((item) => {
      return {
        ...item,
        anioEgreso: "Año de Egreso: " + item.fechaEgreso
      }
    
  })
  }

  

}

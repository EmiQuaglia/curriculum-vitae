import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from './experiencias.service';
import { FormacionService } from './formacion.service';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
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

  fbIcon = faFacebook;

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
        institucion: "En " + item.lugar,
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

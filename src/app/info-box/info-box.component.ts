import { Component, Input, OnInit } from '@angular/core';
import { ExperienciasService } from '../experiencias.service';
import { FormacionService } from '../formacion.service';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})

export class InfoBoxComponent {

  @Input() experiencias: any[] = [];
  @Input() formacion: any[] = [];

  showExperiencias = false
  showFormaciones = false

  constructor() {};

  
  toggleExperiencias() {
    this.showExperiencias = !this.showExperiencias;
  }

  toggleFormaciones (){
    this.showFormaciones = !this.showFormaciones;
  }





  
}





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

  constructor() {};
}





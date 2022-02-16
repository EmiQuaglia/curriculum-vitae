import { Component, Input } from '@angular/core';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

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
  arrowUp = faAngleUp;
  arrowDown = faAngleDown;

  constructor() {};

  
  toggleExperiencias() {
    this.showExperiencias = !this.showExperiencias;
  }

  toggleFormaciones (){
    this.showFormaciones = !this.showFormaciones;
  }
}





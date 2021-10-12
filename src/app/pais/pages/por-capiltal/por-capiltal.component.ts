import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capiltal',
  templateUrl: './por-capiltal.component.html',

})
export class PorCapiltalComponent {
  termino: string = "";
  paises: Country[] = [];
  error: boolean = false;
  placeholder: string = "Buscar Por Capital...";

  constructor(private ps: PaisService) { }

  buscar(termino: string) {
    this.error = false;
    this.termino = termino;
    this.ps.buscarCaptial(termino).subscribe(res => {
      this.paises = res;

    }, err => {
      this.error = true;

    })

  }

}

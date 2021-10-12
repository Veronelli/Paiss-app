import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = "";
  error: boolean = false;

  paises: Country[] = [];
  placeholder: string = "Buscar Por Pais";

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.error = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(res => {
      console.log(res);
      this.paises = res;

    }, err => {
      this.error = true;

    });

  }
}



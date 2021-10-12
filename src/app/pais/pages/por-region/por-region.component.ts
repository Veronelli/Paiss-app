import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
})
export class PorRegionComponent {

  regiones: string[] = ['eu', 'efta', 'caricom', 'pa', 'au', 'usan', 'eeu', 'al', 'asean', 'cias', 'cefta', 'nafta', 'saarc'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getRegion(region: string): string {

    return region === this.regionActiva ? 'btn btn-primary' : ' btn btn-outline-primary'

  }

  buscar(region: string) {
    this.paises = [];
    this.regionActiva = region;
    this.paisService.buscarPorRegion(region).subscribe(
      res => this.paises = res);
  }

}

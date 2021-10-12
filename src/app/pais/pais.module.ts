import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapiltalComponent } from './pages/por-capiltal/por-capiltal.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { PaisTableComponent } from './components/pais-table/pais-table.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    PorCapiltalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTableComponent,
    PaisInputComponent
  ],
  exports: [
    PorCapiltalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaisModule { }

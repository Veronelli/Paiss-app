import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapiltalComponent } from './pais/pages/por-capiltal/por-capiltal.component';
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'

    },
    {
        path: 'region',
        component: PorRegionComponent

    },
    {
        path: 'capital',
        component: PorCapiltalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }
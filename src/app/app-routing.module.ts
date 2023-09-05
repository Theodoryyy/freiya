import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './comps/sobre/sobre.component';
import { StreamingsComponent } from './comps/streamings/streamings.component';
import { IntegrantesComponent } from './comps/integrantes/integrantes.component';

const routes: Routes = [
  { path: 'sobre', component: SobreComponent },
  { path: 'streaming', component: StreamingsComponent },
  { path: 'integrantes', component: IntegrantesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentaComponent } from './cuenta/cuenta.component';
import { SoporteComponent } from './soporte/soporte.component';
import { TiendaComponent } from './tienda/tienda.component';
import { Tienda2Component } from './tienda2/tienda2.component';
import { Tienda3Component } from './tienda3/tienda3.component';

const routes: Routes = [
  {path: 'ropa', component: Tienda2Component},
  {path:'inicio', component: TiendaComponent},
  { path: 'coleccionables', component: Tienda3Component },
  { path: 'cuenta', component: CuentaComponent },
  { path: 'soporte', component: SoporteComponent },  
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { VentasComponent } from './components/ventas/ventas.component';
// Importamos los nuevos componentes hijos (que crearemos en el paso 2)
import { VentasListadoComponent } from './components/ventas/ventas-listado/ventas-listado.component';
import { VentasCrearComponent } from './components/ventas/ventas-crear/ventas-crear.component';
import { InventarioComponent } from './components/inventario/inventario.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'inventario', component: InventarioComponent },
  { 
    path: 'ventas', 
    component: VentasComponent, 
    children: [
      { path: '', redirectTo: 'listado', pathMatch: 'full' },
      
      { path: 'listado', component: VentasListadoComponent },
      
      { path: 'crear', component: VentasCrearComponent }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/inicio/inicio.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { InventarioDialogComponent } from './components/inventario/inventario-dialog.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { MaterialModule } from './shared/material/material.module';
import { VentasListadoComponent } from './components/ventas/ventas-listado/ventas-listado.component';
import { VentasCrearComponent } from './components/ventas/ventas-crear/ventas-crear.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    VentasComponent,
    InventarioComponent,
    InventarioDialogComponent,
    UsuariosComponent,
    VentasListadoComponent,
    VentasCrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

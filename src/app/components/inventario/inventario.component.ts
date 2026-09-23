import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InventarioDialogComponent } from './inventario-dialog.component';

// 1. Definimos cómo luce un dato de ejemplo
export interface ElementoEjemplo {
  id: number;
  nombre: string;
  categoria: string;
  estado: boolean;
}

// 2. Creamos un arreglo estático con datos
const DATOS_EJEMPLO: ElementoEjemplo[] = [
  { id: 1, nombre: 'Monitor 24"', categoria: 'Hardware', estado: true },
  { id: 2, nombre: 'Teclado Mecánico', categoria: 'Periféricos', estado: true },
  { id: 3, nombre: 'Licencia Office', categoria: 'Software', estado: false },
  { id: 4, nombre: 'Ratón Inalámbrico', categoria: 'Periféricos', estado: true },
];

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements AfterViewInit {
  columnasMostrar: string[] = ['id', 'nombre', 'categoria', 'estado', 'acciones'];
  fuenteDatos = new MatTableDataSource<ElementoEjemplo>(DATOS_EJEMPLO);
  categorias = ['Hardware', 'Periféricos', 'Software'];
  categoriaSeleccionada = 'Todas';
  porcentajeInventario = 75;
  textoFiltro = '';

  @ViewChild(MatPaginator) paginador!: MatPaginator;
  @ViewChild(MatSort) ordenamiento!: MatSort;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.fuenteDatos.paginator = this.paginador;
    this.fuenteDatos.sort = this.ordenamiento;
  }

  aplicarFiltro(evento: Event) {
    this.textoFiltro = (evento.target as HTMLInputElement).value.trim().toLowerCase();
    this.actualizarFiltro();
  }

  filtrarPorCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
    this.actualizarFiltro();
  }

  private actualizarFiltro() {
    this.fuenteDatos.filterPredicate = (elemento, filtro) => {
      const [categoria, texto] = filtro.split('|');
      const coincideCategoria = categoria === 'todas' ||
        elemento.categoria.toLowerCase() === categoria;
      const coincideTexto = !texto ||
        `${elemento.id} ${elemento.nombre} ${elemento.categoria}`.toLowerCase().includes(texto);
      return coincideCategoria && coincideTexto;
    };
    this.fuenteDatos.filter = `${this.categoriaSeleccionada.toLowerCase()}|${this.textoFiltro}`;
    this.fuenteDatos.paginator?.firstPage();
  }

  ejecutarAccion(nombre: string) {
    this.dialog.open(InventarioDialogComponent, {
      width: '420px',
      data: {
        titulo: 'Editar producto',
        mensaje: `Puedes revisar o editar la información de «${nombre}».`,
        accion: 'Guardar cambios'
      }
    });
  }

  abrirDialogoReporte() {
    this.dialog.open(InventarioDialogComponent, {
      width: '420px',
      data: {
        titulo: 'Reporte de inventario',
        mensaje: 'El reporte se generará con los productos y filtros actuales.',
        accion: 'Generar reporte'
      }
    });
  }

  cambiarEstado(elemento: ElementoEjemplo) {
    elemento.estado = !elemento.estado;
    this.fuenteDatos.data = [...this.fuenteDatos.data];
  }

  cambiarProgreso(valor: number) {
    this.porcentajeInventario = valor;
  }
}
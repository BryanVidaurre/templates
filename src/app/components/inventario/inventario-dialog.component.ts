import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface InventarioDialogData {
  titulo: string;
  mensaje: string;
  accion: string;
}

@Component({
  selector: 'app-inventario-dialog',
  templateUrl: './inventario-dialog.component.html',
  styleUrls: ['./inventario-dialog.component.css']
})
export class InventarioDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<InventarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InventarioDialogData
  ) {}

  cerrar(confirmado: boolean) {
    this.dialogRef.close(confirmado);
  }
}

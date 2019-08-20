import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent {
  qtde: number;

  constructor(public dialogRef: MatDialogRef<ProductDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

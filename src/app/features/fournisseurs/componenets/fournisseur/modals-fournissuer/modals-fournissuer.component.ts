import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Fournisseur } from '../../../../../models/Fournisseur/fournisseur';

@Component({
  selector: 'app-modals-fournissuer',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './modals-fournissuer.component.html',
  styleUrls: ['./modals-fournissuer.component.css']
})
export class ModalsFournissuerComponent implements OnInit {
  fournisseurForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalsFournissuerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Fournisseur,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fournisseurForm = this.fb.group({
      id: [this.data.id || null], // L'ID est nul pour un ajout
      name: [this.data.name || '', Validators.required]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.fournisseurForm.valid) {
      this.dialogRef.close(this.fournisseurForm.value);
    }
  }
}

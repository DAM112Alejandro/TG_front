import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClaseService } from '../services/clase.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {

  usuarioForm: FormGroup;

  tipoUser: any = "";
  tipoSub: any = "";

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tipoUsuarioService: UserService,
    private tipoSubService: UserService,
  ) {
    this.usuarioForm = this.fb.group({
      _id: [data._id],
      nombre: [data.nombre, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      telefono: [data.telefono, Validators.required],
      contraseña: [data.contraseña],
      tipo_usuario: ['', Validators.required], // Inicialmente vacío
      tipo_sub: ['', Validators.required] // Inicialmente vacío
    });
  }

  ngOnInit(): void {
    // Obtener y establecer el tipo de usuario
    this.tipoUsuarioService.getTipoUser(this.data.tipo_usuario).subscribe({
      next: (user) => {
        this.tipoUser = user;
        this.usuarioForm.patchValue({ tipo_usuario: this.tipoUser._id });
        console.log(this.tipoUser._id);
      },
      error: (err) => {
        console.error('Error fetching user type:', err);
      }
    });

    // Obtener y establecer el tipo de suscripción
    this.tipoSubService.getTipoSub(this.data.tipo_sub).subscribe({
      next: (sub) => {
        this.tipoSub = sub;
        this.usuarioForm.patchValue({ tipo_sub: this.tipoSub._id });
        console.log(this.tipoSub._id);
      },
      error: (err) => {
        console.error('Error fetching subscription type:', err);
      }
    });
  }

  save(): void {
    if (this.usuarioForm.valid) {
      this.dialogRef.close(this.usuarioForm.value);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}

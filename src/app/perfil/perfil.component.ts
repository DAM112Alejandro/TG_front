import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ROL } from '../environments/consts';
import { ReservasService } from '../services/reservas.service';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  user : any;
  isAdmin : boolean = false;
  usuarios : any = {};
  displayedColumns: string[] = ['nombre', 'email', 'telefono','tipo subcripción','tipo usuario' ,   'acciones'];

  reservas: any = {}
  constructor(private authService: AuthService, private reservasService: ReservasService,
    private userService: UserService, private fb: FormBuilder, private dialog: MatDialog,
    
  ) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }


  getCurrentUser(){
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user;
      if(this.user.rol == ROL.ADMIN) {
        this.isAdmin = true;
        this.getUsers();
      }
      else{
        this.isAdmin = false;
        this.getReservasByUser(this.user.id);
      }
    });
  }

  getReservasByUser(id: any){
    this.reservasService.getReservaByUser(id).subscribe(reservas => {
      this.reservas = reservas;
      console.log(reservas)
      
    });
  }

  getUsers(){
    this.userService.getUsers().subscribe(users =>{
      this.usuarios = users;
    });
  }

  editUser(user: any): void {
    
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '300px',
      data: { ...user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result, "result");
        
        this.updateUser(result);
      }
    });
  }

  deleteUser(userId: string): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.removeUser(userId);
      }
    });
  }

  deleteReserva(reserva_id: string) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.removeReserva(reserva_id);
      }
    });
  }
  updateUser(user: any) {
    this.userService.updateUser(user).subscribe(() => {
      this.getUsers();
    });
  }

  removeUser(userId: string) {
    this.userService.deleteUser(userId).subscribe(() => {
       this.getUsers();
    });
   
  }

  removeReserva(id: string) {
    this.reservasService.deleteReserva(id).subscribe(() => {
      this.getReservasByUser(this.user.id);
    });
   
  }


}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClasesComponent } from './clases/clases.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReservasComponent } from './reservas/reservas.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { InterceptorService } from './services/interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ClaseService } from './services/clase.service';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { ReservasService } from './services/reservas.service';
import { UserService } from './services/user.service';
import { MatDialogModule } from '@angular/material/dialog';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClasesComponent,
    PerfilComponent,
    ReservasComponent,
    LoginComponent,
    RegisterComponent,
    EditUserDialogComponent,
    ConfirmDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [
    AuthService,
    {provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    ClaseService,
    {provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    ReservasService,
    {provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    UserService,
    {provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

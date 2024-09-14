import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClasesComponent } from './clases/clases.component';
import { ReservasComponent } from './reservas/reservas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clases', component: ClasesComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'register' , component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

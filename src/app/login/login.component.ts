import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SESION } from '../environments/consts';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe((res) => {
        if (res.success) {
          sessionStorage.setItem(SESION.TOKEN, JSON.stringify(res.access_token));
          this.router.navigateByUrl('');
        } else {
          this.errorMessage = 'Nombre de usuario o contraseña incorrectos.';
          sessionStorage.removeItem(SESION.TOKEN);
        }
      }, (err) => {
        this.errorMessage = 'Error al iniciar sesión. Por favor, intenta de nuevo.';
      });
    } else {
      this.errorMessage = 'Por favor, completa todos los campos.';
    }
  }
}

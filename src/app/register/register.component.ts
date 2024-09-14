import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  register(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe((res) => {
        if (res.success) {
          this.router.navigateByUrl('login');
        } else {
          this.errorMessage = res.message;
        }
      }, (err) => {
        this.errorMessage = 'Error al registrarse. Por favor, intenta de nuevo.';
      });
    } else {
      this.errorMessage = 'Por favor, completa todos los campos correctamente.';
    }
  }

}

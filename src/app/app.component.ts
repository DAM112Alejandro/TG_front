import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SESION } from './environments/consts';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  title = 'FRONT_TG';
  isLoggedIn = false;

  constructor(private router: Router,private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateLoginStatus();
      }
    });
    this.updateLoginStatus();
  }
  private updateLoginStatus(): void {
    this.isLoggedIn = this.authService.isAuthenticated;
  }

  logout(): void {
    sessionStorage.removeItem(SESION.TOKEN);
    this.updateLoginStatus();
    this.router.navigate(['']);
  }
}

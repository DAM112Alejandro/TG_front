import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  clases = [
    { nombre: 'Yoga', descripcion: 'Relájate y fortalece tu cuerpo con sesiones de Yoga.' },
    { nombre: 'Pilates', descripcion: 'Mejora tu flexibilidad y tonifica tus músculos con Pilates.' },
    { nombre: 'Entrenamiento en Intervalos', descripcion: 'Quema calorías con entrenamientos de alta intensidad.' }
  ];
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClaseService } from '../services/clase.service';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  reservaForm: FormGroup;
  errorMessage: string | null = null;
  clases: any[] = [];


  constructor( private fb: FormBuilder , private claseService: ClaseService, private reservasService: ReservasService){
    this.reservaForm = this.fb.group({
      clase: ['', Validators.required],
      fecha: ['', Validators.required],
      
    });
  }
  ngOnInit(): void {
    this.cargarClases();
  }

  formatDate(fecha: Date): string {
    const day = fecha.getDate().toString().padStart(2, '0');
    const month = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const year = fecha.getFullYear();
    return `${day}/${month}/${year}`;
  }

  cargarClases() {
    this.claseService.getClases().subscribe((res) => {
      this.clases = res;
    });
  }

  isWeekend(dateString: string): boolean {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }

  reservarClase(): void {
    if (this.reservaForm.valid) {
      const formData = this.reservaForm.value;
      if (this.isWeekend(formData.fecha)) {
        this.errorMessage = 'No se puede reservar en fin de semana.';
        return;
      }
      formData.fecha = this.formatDate(new Date(formData.fecha));
      this.reservasService.addReserva(formData).subscribe(
        (res) => {
          console.log('Reserva creada correctamente.');
          this.reservaForm.reset();
          this.errorMessage = null; // Limpiar mensaje de error
        },
        (err) => {
          console.error('Error al crear la reserva.', err);
          this.errorMessage = 'Error al crear la reserva. Inténtalo de nuevo más tarde.';
        }
      );
    } else {
      this.errorMessage = 'Por favor, completa todos los campos requeridos.';
    }
  }
}
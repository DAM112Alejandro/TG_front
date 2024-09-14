import { Component, OnInit } from '@angular/core';
import { ClaseService } from '../services/clase.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  clases : any = {}

  displayedColumns: string[] = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
  horario = [
    { dia: 'Lunes', clase: 'BJJ (Brazilian Jiu-Jitsu)', horario: '9:00 - 10:30'},
    { dia: 'Lunes', clase: 'Boxeo', horario: '10:30 - 12:00'},
    { dia: 'Lunes', clase: 'MMA (Mixed Martials Arts)', horario: '12:00 - 13:30'},
    { dia: 'Lunes', clase: 'BJJ (Brazilian Jiu-Jitsu)', horario: '16:00 - 17:30'},
    { dia: 'Lunes', clase: 'Boxeo', horario: '17:30 - 19:00'},
    { dia: 'Lunes', clase: 'MMA (Mixed Martials Arts)', horario: '19:30 - 21:00'},

    { dia: 'Martes', clase: 'BJJ (Brazilian Jiu-Jitsu)', horario: '9:00 - 10:30'},
    { dia: 'Martes', clase: 'Boxeo', horario: '10:30 - 12:00'},
    { dia: 'Martes', clase: 'MMA (Mixed Martials Arts)', horario: '12:00 - 13:30'},
    { dia: 'Martes', clase: 'BJJ (Brazilian Jiu-Jitsu)', horario: '16:00 - 17:30'},
    { dia: 'Martes', clase: 'Boxeo', horario: '17:30 - 19:00'},
    { dia: 'Martes', clase: 'MMA (Mixed Martials Arts)', horario: '19:30 - 21:00'},

    { dia: 'Miercoles', clase: 'BJJ (Brazilian Jiu-Jitsu)', horario: '9:00 - 10:30'},
    { dia: 'Miercoles', clase: 'Boxeo', horario: '10:30 - 12:00'},
    { dia: 'Miercoles', clase: 'MMA (Mixed Martials Arts)', horario: '12:00 - 13:30'},
    { dia: 'Miercoles', clase: 'BJJ (Brazilian Jiu-Jitsu)', horario: '16:00 - 17:30'},
    { dia: 'Miercoles', clase: 'Boxeo', horario: '17:30 - 19:00'},
    { dia: 'Miercoles', clase: 'MMA (Mixed Martials Arts)', horario: '19:30 - 21:00'},

    { dia: 'Jueves', clase: 'BJJ (Brazilian Jiu-Jitsu)', horario: '9:00 - 10:30'},
    { dia: 'Jueves', clase: 'Boxeo', horario: '10:30 - 12:00'},
    { dia: 'Jueves', clase: 'MMA (Mixed Martials Arts)', horario: '12:00 - 13:30'},
    { dia: 'Jueves', clase: 'BJJ (Brazilian Jiu-Jitsu)', horario: '16:00 - 17:30'},
    { dia: 'Jueves', clase: 'Boxeo', horario: '17:30 - 19:00'},
    { dia: 'Jueves', clase: 'MMA (Mixed Martials Arts)', horario: '19:30 - 21:00'},

    { dia: 'Viernes', clase: 'BJJ (Brazilian Jiu-Jitsu)', horario: '9:00 - 10:30'},
    { dia: 'Viernes', clase: 'Boxeo', horario: '10:30 - 12:00'},
    { dia: 'Viernes', clase: 'MMA (Mixed Martials Arts)', horario: '12:00 - 13:30'},
    { dia: 'Viernes', clase: 'BJJ (Brazilian Jiu-Jitsu)', horario: '16:00 - 17:30'},
    { dia: 'Viernes', clase: 'Boxeo', horario: '17:30 - 19:00'},
    { dia: 'Viernes', clase: 'MMA (Mixed Martials Arts)', horario: '19:30 - 21:00'},

  ];

  transformedHorario = this.transformHorario(this.horario);
  
  constructor(private claseService: ClaseService){ }

  ngOnInit(): void {
    this.getClases();
  }

  getClases(){
    this.claseService.getClases().subscribe(response => {
      this.clases = response;
    });
  }

  transformHorario(horario: any[]): any[] {
    const groupedByHora = horario.reduce((acc, curr) => {
      const hora = curr.horario;
      if (!acc[hora]) {
        acc[hora] = { hora };
      }
      acc[hora][curr.dia.toLowerCase()] = curr.clase;
      return acc;
    }, {});

    return Object.values(groupedByHora);
  }

}

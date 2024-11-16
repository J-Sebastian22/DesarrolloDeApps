import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.page.html',
  styleUrls: ['./final.page.scss'],
})
export class FinalPage implements OnInit {

  resultados2: string[] = [];
  ganador: string[] = [];
  todosSeleccionados: boolean = false;
  constructor() { 
    // Cargar participantes desde localStorage
    const storedresultados2 = localStorage.getItem('resultados2');
    if (storedresultados2) {
      this.resultados2 = JSON.parse(storedresultados2);
    } else {
      alert('No hay participantes registrados');
    }
  }

  seleccionarGanador(index: number, event: any): void {
    this.ganador[index] = event.detail.value; // Guardar ganador seleccionado

    // Verificar si todos los combates han sido decididos
    this.todosSeleccionados = this.ganador.length === 1 && this.ganador.every((resultado) => resultado !== undefined);
  }

  guardarResultados(): void {
    localStorage.setItem('resultados2', JSON.stringify(this.resultados2));
    alert(`Felicidades ${this.ganador} por ganar el torneo.`);
    console.log(this.ganador)
  }

  ngOnInit() {
  }

}

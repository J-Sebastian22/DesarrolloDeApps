import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.page.html',
  styleUrls: ['./torneo.page.scss'],
})
export class TorneoPage implements OnInit {

  participantes: string[] = [];
  resultados4: string[] = new Array(4).fill(undefined);
  todosSeleccionados: boolean = false;

  constructor(private navCtrl: NavController,) {
    // Cargar participantes desde localStorage
    const storedParticipantes = localStorage.getItem('participantes');
    if (storedParticipantes) {
      this.participantes = JSON.parse(storedParticipantes);
    } else {
      alert('No hay participantes registrados');
    }
  }

  seleccionarGanador(index: number, event: any): void {
    this.resultados4[index] = event.detail.value; // Guardar ganador seleccionado
    console.log(this.resultados4)
    // Verificar si todos los combates han sido decididos
    this.todosSeleccionados = this.resultados4.every((resultado) => resultado !== undefined);

  }

  guardarResultados(): void {
    localStorage.setItem('resultados4', JSON.stringify(this.resultados4));
    alert('Resultados guardados exitosamente');
    this.navCtrl.navigateForward(['/semi']);
  }
  ngOnInit() {
  }
}

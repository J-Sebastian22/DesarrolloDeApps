import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-semi',
  templateUrl: './semi.page.html',
  styleUrls: ['./semi.page.scss'],
})
export class SemiPage implements OnInit {

  resultados4: string[] = [];
  resultados2: string[] = new Array(2).fill(undefined);
  todosSeleccionados: boolean = false;

  constructor(private navCtrl: NavController,) { 
    // Cargar participantes desde localStorage
    const storedresultados4 = localStorage.getItem('resultados4');
    if (storedresultados4) {
      this.resultados4 = JSON.parse(storedresultados4);
    } else {
      alert('No hay participantes registrados');
    }
  }

  seleccionarGanador(index: number, event: any): void {
    this.resultados2[index] = event.detail.value; // Guardar ganador seleccionado

    // Verificar si todos los combates han sido decididos
    this.todosSeleccionados = this.resultados2.every((resultado) => resultado !== undefined);
  }

  guardarResultados(): void {
    localStorage.setItem('resultados2', JSON.stringify(this.resultados2));
    alert('Resultados guardados exitosamente');
    this.navCtrl.navigateForward(['/final']);
  }

  ngOnInit() {
  }

}

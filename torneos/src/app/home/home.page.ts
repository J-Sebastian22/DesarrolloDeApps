import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController,) {
    this.formGroup = this.fb.group({
      participante1: ['', Validators.required],
      participante2: ['', Validators.required],
      participante3: ['', Validators.required],
      participante4: ['', Validators.required],
      participante5: ['', Validators.required],
      participante6: ['', Validators.required],
      participante7: ['', Validators.required],
      participante8: ['', Validators.required],
    });
  }

  guardarDatos(): void {
    const participantes = Object.values(this.formGroup.value);
    localStorage.setItem('participantes', JSON.stringify(participantes));
    alert('Participantes guardados exitosamente');
    this.navCtrl.navigateForward(['/torneo']);
    console.log(participantes);
  }
}
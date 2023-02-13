import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proyect } from 'src/app/pages/proyect/proyect.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() proyect!: Proyect;

  @Output() openModalEvent = new EventEmitter<boolean>();

  openModal() {
    console.log('openModal');
    this.openModalEvent.emit(true);
  }
  goto(link : string) {
    window.open(link);
  }
}

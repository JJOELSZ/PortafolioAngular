import { Component } from '@angular/core';

export interface Proyect {
  title: string;
  subtitle: string;
  description: string;
  link: string;
}
@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.scss'],
})
export class ProyectComponent {
  proyects: Proyect[] = [
    {
      title: 'Shopping crud (React JS)',
      subtitle: 'Proyecto #1',
      description: 'lorem ipsum dolor sit amet, consectetur adip  lorem ipsum dolor sit amet, consectetur adip  occ lorem ipsum dolor sit amet, consectetur adip  occ lorem ipsum dolor sit amet, consectetur adip  occ lorem ipsum dolor sit amet, consectetur adip  occ occ',
      link:'http://www.youtube.com/'
    },
    {
      title: 'Restorant sitio web',
      subtitle : 'Proyecto #2',
      description: 'lorem ipsum dolor sit amet, consectetur adip  lorem ipsum dolor sit amet, consectetur adip  occ lorem ipsum dolor sit amet, consectetur adip  occ lorem ipsum dolor sit amet, consectetur adip  occ lorem ipsum dolor sit amet, consectetur adip  occ occ ',
      link:'http://www.youtube.com/'
    },
    {
      title: 'Movie Cinema (React JS)',
      subtitle : 'Proyecto #3',
      description: 'lorem ipsum dolor sit amet, consectetur adip  lorem ipsum dolor sit amet, consectetur adip  occ lorem ipsum dolor sit amet, consectetur adip  occ lorem ipsum dolor sit amet, consectetur adip  occ lorem ipsum dolor sit amet, consectetur adip  occ occ ',
      link:'http://www.youtube.com/'
    }
  ];
  showModal = false;

  constructor() {}

  open(event: boolean) {
    this.showModal = event;
    console.log('aea');
  }
  close(event: boolean) {
    this.showModal = event;
  }
}

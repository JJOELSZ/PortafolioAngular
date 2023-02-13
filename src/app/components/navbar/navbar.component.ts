import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  option = true;
  showMenu = false;

  get theme() {
    return this.themeService.getTheme;
  }
  menu = [
    { name: 'Inicio', active: false, path: 'home' },
    { name: 'Trabajos', active: false, path: 'proyect' },
    { name: 'Contáctame', active: false, path: 'contact' },
  ];

  constructor(
    private readonly themeService: ThemeService,

  ) {}

  move(item: any) {
    this.showMenu = false;
    this.menu = this.menu.map((option) =>
      option.name == item.name
        ? { ...option, active: true }
        : { ...option, active: false }
    );
  }
  changeTheme() {
    this.option = !this.option;
    this.themeService.changueTheme(this.option ? 0 : 1);
  }

  goto(link: string) {
    window.open(link);
  }
  toogleMenu() {
    this.showMenu = !this.showMenu;
  }
}

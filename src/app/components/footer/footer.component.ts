import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  get theme () {
    return this.themeService.getTheme;
  }
  constructor( private readonly themeService : ThemeService){
  }
}

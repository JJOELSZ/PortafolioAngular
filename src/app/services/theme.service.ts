import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
themes = ["primary", ""] 
theme = this.themes[0];

  constructor() { }
  
  get getTheme(){
    return this.theme;
  }
  changueTheme(code:number){
    this.theme=this.themes[code];
  }
}

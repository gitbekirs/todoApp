import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  //sayfada yapılacak işler ve veri çekme işlemleri vs.. sayfayı dinamik hale getirmek için yapılacaklar burada 
  // user = 'Çınar';
  // items = [
  //   { description: "Kahvaltı", action: "No" },
  //   { description: "Sinema", action: "No" },
  //   { description: "Spor", action: "No" },
  //   { description: "Ders Çalışma", action: "No" },
  //   { description: "Alışveriş", action: "No" },
  // ];

  model = new Model();

  getName(){
    return this.model.user;
  };

  getItemList(){
    return this.model.items;
  }
}

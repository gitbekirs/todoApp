import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  //sayfada yapılacak işler ve veri çekme işlemleri vs.. sayfayı dinamik hale getirmek için yapılacaklar burada 
  user = 'Çınar';
  items = [
    { description: "Kahvaltı", action: "No" },
    { description: "Sinema", action: "No" },
    { description: "Spor", action: "No" },
    { description: "Ders Çalışma", action: "No" },
    { description: "Alışveriş", action: "No" },
  ];
}

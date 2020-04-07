import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  produits = [
    {
      nom: "Masque N95 lot * 24",
      prix: 50
    },
    {
      nom: "Masque N95 lot * 50",
      prix: 100
    },
    {
      nom: "Masque N95 lot * 150",
      prix: 150
    }
  ];
}
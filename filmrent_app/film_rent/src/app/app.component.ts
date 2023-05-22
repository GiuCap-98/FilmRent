import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onLoginSuccess() {
    // Dopo il login avvenuto con successo, abilita il bottone nella toolbar
    // Chiamando il metodo enableButton() della componente ToolbarComponent
  }

}

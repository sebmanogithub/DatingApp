import { Component } from '@angular/core';
// importe le décorateur Component d'angular nécessaire pour créer un composant Angular.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Ce composant AppComponent est le composant principal d'une application 
// Angular (selector: 'app-root') et sert de point d'entrée.
export class AppComponent {
  title = 'The Dating App';
}

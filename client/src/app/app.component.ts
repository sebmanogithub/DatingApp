import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// importe le décorateur Component d'angular nécessaire pour créer un composant Angular.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Ce composant AppComponent est le composant principal d'une application 
// Angular (selector: 'app-root') et sert de point d'entrée.
export class AppComponent implements OnInit
{
  title = 'The Dating App';
  users: any; // No type safety

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.getUsers();
  };

  getUsers() {
    // return an observable
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }
}

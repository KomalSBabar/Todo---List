import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
  constructor(){

    //This changed the Title of page without reloading.

    // setTimeout(() => {
    //     this.title = "Changed Title";
    // },2000);
  }
}

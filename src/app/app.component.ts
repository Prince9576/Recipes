import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';
  home = true;
  shoppingList = false;
  constructor(private http: HttpClient) {}

  selectHome() {
    this.home = true;
    this.shoppingList = false;
  }

  selectShopping() {
    this.shoppingList = true;
    this.home = false;
  }

}

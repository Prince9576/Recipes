import { Component, OnInit } from '@angular/core';
import { Ingredients } from './ingredients.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor( private shoppingListService: ShoppingListService ) { }
  ingredients: Ingredients[];
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  addIngredient(event) {
    if ( event.name && event.amount )
      this.shoppingListService.addIngredient(event);
  }

}

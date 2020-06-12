import { Ingredients } from '../shopping-list/ingredients.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
    ingredients: Ingredients[] = [
        new Ingredients('Carrots', '3'),
        new Ingredients('Kale', '5')
    ];
    getIngredients(): Ingredients[] {
        return this.ingredients;
    }

    addIngredient(ingredient) {
        this.ingredients.push(new Ingredients(ingredient.name, ingredient.amount));
    }
}

import { Recipe } from '../recipes/recipes.model';
import { Output, EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shopping-list/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipeSelected = new Subject();

    constructor( private shoppingListService: ShoppingListService ) {
    }
    recipes: Recipe[] = [
        new Recipe( 'Chowmin',
                    'A dish which enightens your soul.',
                    './assets/images/dummy_recipe_1.jpg',
                    [
                      new Ingredients('Noodles', '2'),
                      new Ingredients('Soya sauce', '1'),
                      new Ingredients('Ketchup', '3'),
                      new Ingredients('Onion', '2'), 
                    ]
                  ),
        new Recipe('Pizza',
                   'Made with flour and love.',
                   './assets/images/dummy_recipe_2.jpg',
                   [
                    new Ingredients('Flour', '1'),
                    new Ingredients('Vegetables', '5'),
                    new Ingredients('Oregano', '3'),
                    new Ingredients('Cheese', '5'),
                  ]
                  ),
        new Recipe('Burger',
                   'Made specially for you.',
                   './assets/images/dummy_recipe_3.jpg',
                   [
                    new Ingredients('Bun', '1'),
                    new Ingredients('Vegetables', '3'),
                    new Ingredients('Ketchup', '6'),
                    new Ingredients('Cheese', '5'),
                  ]
                  )
    ];

    public getRecipe() {
        return this.recipes.slice();
    }

    public getARecipe(index) {
        return this.recipes[index]; 
    }

    public addIngredientsToList(ingredients) {
        console.log(ingredients);
        const originalIngredients = this.shoppingListService.getIngredients();
        ingredients.forEach(ingredient => {
            originalIngredients.push(ingredient);
        });
    }
}

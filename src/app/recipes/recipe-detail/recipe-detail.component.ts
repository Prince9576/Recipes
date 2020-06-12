import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: Number;
  constructor( private recipeService: RecipeService, 
               private activatedRoute: ActivatedRoute,
               private route: Router ) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      console.log(param);
      this.id = +param.id;
      this.recipe = this.recipeService.getARecipe(param.id);
    })
  }
  sendToShoppingList(): void {
    this.recipeService.addIngredientsToList(this.recipe.ingredients);
  }
  navigateToEdit(): void {
    this.route.navigate(['edit'], { relativeTo: this.activatedRoute });
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipes.model';
import { Subscription } from 'rxjs';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipeSubscription: Subscription;
  recipe: Recipe;
  constructor( private recipeService: RecipeService ) { }

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe((recipe) => {
    //   this.recipe = recipe;
    // });
  }

  ngOnDestroy(): void {
    if ( this.recipeSubscription ) {
      this.recipeSubscription.unsubscribe();
    }
  }

}

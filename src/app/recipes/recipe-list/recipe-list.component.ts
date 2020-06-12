import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import {  } from 'events';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor( private recipeService: RecipeService,
               private route: Router, private activatedRoute: ActivatedRoute ) { }


  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }

  recipeSelected(i) {
    const options: NavigationExtras = {
      relativeTo: this.activatedRoute
    };
    this.route.navigate([i], options);
  }

  navigateToNew(): void {
    this.route.navigate(['new'], { relativeTo: this.activatedRoute });
  }

}

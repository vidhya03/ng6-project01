import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeSelected: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(event: Recipe) {
    console.log('At onSelectRecipe' + event);
    this.recipeSelected = event;

  }
}

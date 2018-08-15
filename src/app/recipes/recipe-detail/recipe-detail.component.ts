import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, Data, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipeByIndex(+params['id']);
      console.log(params['id']);
      console.log(this.recipe);
    });

  }
  onAddToShoppingList() {
    this.recipeService.addIncredients(this.recipe.ingredients);
  }
}

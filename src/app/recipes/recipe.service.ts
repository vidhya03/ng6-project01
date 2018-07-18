import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Baked garlic and chilli quail',
      'Serve this spicy, sticky baked quail for a mouth-watering starter or light meal.',
      // tslint:disable-next-line:max-line-length
      'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/03/20/602ad8653ba345099724bc6e98e2babf/baked-garlic-and-chilli-quail.jpg'
    ),
    new Recipe(
      'Fish Grill',
      'BBQ Fish with soya sauce ',
      'https://media.istockphoto.com/photos/fish-grill-clamp-on-bbq-picture-id592027452'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

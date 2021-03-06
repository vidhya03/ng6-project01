import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {

  ingredientAdded = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Bananna', 12)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIncredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.getIngredients());
  }

  addIncredients(ingredients: Ingredient[]) {

    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.getIngredients());

  }
}

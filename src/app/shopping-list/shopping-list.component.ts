import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Bananna', 12)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingreditentFromEvent: Ingredient) {
    console.log(ingreditentFromEvent);
    this.ingredients.push(ingreditentFromEvent);
  }

}

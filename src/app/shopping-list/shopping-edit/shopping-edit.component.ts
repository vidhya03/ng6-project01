import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngreditent(nameInputEl: HTMLInputElement, amountInputEl: HTMLInputElement) {

    this.shoppingListService.addIncredient(new Ingredient(nameInputEl.value, Number(amountInputEl.value)));

  }

}

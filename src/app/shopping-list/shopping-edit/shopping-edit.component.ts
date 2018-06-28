import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngreditent(nameInputEl: HTMLInputElement, amountInputEl: HTMLInputElement) {

    this.ingredientAdded.emit(new Ingredient(nameInputEl.value, Number(amountInputEl.value)));

  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() selectedRecipe: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    console.log('Emitting selected recipe');
    this.selectedRecipe.emit();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() {}

  ngOnInit() {
    this.recipe = new Recipe(
      'Fish Grill',
      'BBQ Fish with soya sauce ',
      'https://media.istockphoto.com/photos/fish-grill-clamp-on-bbq-picture-id592027452'
    );
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Baked garlic and chilli quail', 'Serve this spicy, sticky baked quail for a mouth-watering starter or light meal.',
    // tslint:disable-next-line:max-line-length
'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/03/20/602ad8653ba345099724bc6e98e2babf/baked-garlic-and-chilli-quail.jpg'),
    new Recipe('Fish Grill', 'BBQ Fish with soya sauce ',
    'https://media.istockphoto.com/photos/fish-grill-clamp-on-bbq-picture-id592027452')


  ];

  @Output() selectedRecipeProxy: EventEmitter<Recipe> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSelect(recipeSecected: Recipe) {
    this.selectedRecipeProxy.emit(recipeSecected);
    console.log('Emitting @ recipe-list component ' + JSON.stringify(recipeSecected));
    console.log('Emitting @ recipe-list component ' + JSON.stringify(recipeSecected));
  }

}

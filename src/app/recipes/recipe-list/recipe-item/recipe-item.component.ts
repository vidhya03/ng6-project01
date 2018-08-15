import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipe: Recipe;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      const id = data['id'];
      console.log('the id is ' + id);
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinksService } from '../../../service/drinks.service';

@Component({
  selector: 'app-drink-ingredients',
  templateUrl: './drink-ingredients.page.html',
  styleUrls: ['./drink-ingredients.page.scss'],
})
export class DrinkIngredientsPage {

  id: string;
  drink: any;
  search: string;

  constructor(private route: ActivatedRoute, private ingredients: DrinksService) { }

  ionViewWillEnter() {
    this.id = this.route.snapshot.paramMap.get('drinkId');
    this.ingredients.getDrinkIngredients(this.id).subscribe(data => {
      this.drink = data['drinks'][0];
    });
  }
}

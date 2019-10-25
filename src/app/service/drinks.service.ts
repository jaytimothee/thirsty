import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  drinksUrl: string;
  ingredientsUrl: string;
  glassListUrl: string;
  drinkingGlassUrl: string;
  categoryList: string;

  constructor(private http: HttpClient) {
    this.drinksUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
    this.ingredientsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    this.glassListUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';
    this.drinkingGlassUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=';
    this.categoryList = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  }

  getDrinks() {
    return this.http.get(this.drinksUrl);
  }

  getDrinkIngredients(drinkId: string) {
    return this.http.get(this.ingredientsUrl + drinkId);
  }

  getGlassList() {
    return this.http.get(this.glassListUrl);
  }

  getDrinkingGlassList(glassType: string) {
    return this.http.get(this.drinkingGlassUrl + glassType);
  }

  getCategoryList() {
    return this.http.get(this.categoryList);
  }

}

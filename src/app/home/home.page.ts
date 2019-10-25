import { Component } from '@angular/core';
import { DrinksService } from '../service/drinks.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private drinksService: DrinksService, private router: Router) { }

  drinks: any;
  searchTerm: string;

  ionViewWillEnter() {
    this.drinksService.getDrinks().subscribe(data => {
      this.drinks = data['drinks'];
    });
  }

  navigate(id: string) {
    this.router.navigateByUrl(`home/${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../../../service/drinks.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.page.html',
  styleUrls: ['./categories-list.page.scss'],
})
export class CategoriesListPage implements OnInit {

  constructor(private drinksService: DrinksService) { }

  ngOnInit() {
  }

}

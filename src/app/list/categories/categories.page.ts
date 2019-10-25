import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../../service/drinks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categoryList: any;
  constructor(private router: Router, private drinksService: DrinksService) { }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.drinksService.getCategoryList().subscribe(data => {
      if (data) {
        this.categoryList = data['drinks'];
      }
    });
  }

  navigate(catId: string) {
    this.router.navigateByUrl('list/categories/' + catId);
  }
}

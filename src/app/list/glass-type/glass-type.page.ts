import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../../service/drinks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-glass-type',
  templateUrl: './glass-type.page.html',
  styleUrls: ['./glass-type.page.scss'],
})
export class GlassTypePage {

  constructor(private drinksService: DrinksService, private router: Router) { }
  glassType: any;

  ionViewWillEnter() {
    this.drinksService.getGlassList().subscribe(data => {
      if (data) {
        this.glassType = data['drinks'];
      }
    });
  }

  navigate(glassId: string) {
    this.router.navigateByUrl('list/glass-type/' + glassId);
  }

}

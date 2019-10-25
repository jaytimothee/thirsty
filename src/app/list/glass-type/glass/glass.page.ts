import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DrinksService } from '../../../service/drinks.service';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.page.html',
  styleUrls: ['./glass.page.scss'],
})
export class GlassPage implements OnInit {

  glassId: string;
  drinks: any;

  constructor(private router: Router, private routerActive: ActivatedRoute, private drinkService: DrinksService) { }

  ngOnInit() {
    this.glassId = this.routerActive.snapshot.paramMap.get('glassId');
    this.drinkService.getDrinkingGlassList(this.glassId).subscribe(data => {
      this.drinks = data['drinks'];
    });
  }

  navigate(drinkId: string) {
    this.router.navigateByUrl('home/' + drinkId);
  }

}

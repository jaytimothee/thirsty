import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public categories: Array<{ cat: string, icon: string, desc: string, nav: string }> = [];
  constructor(private router: Router) {
    this.categories = [
      {
        nav: 'glass-type',
        cat: 'Glass Type',
        icon: 'wine',
        desc: 'List of drinks by glass type. Jar, Pitcher, Mug, Wine Glass, etc....'
      },
      {
        nav: 'categories',
        cat: 'Categories',
        icon: 'keypad',
        desc: 'View drinks by a list of categories'
      },
      {
        nav: 'ingredients',
        cat: 'Ingredients',
        icon: 'basket',
        desc: 'Looking for a certain tase? Look up drinks by ingredients'
      },
      {
        nav: 'alcohol-level',
        cat: 'Alcohol Level',
        icon: 'beer',
        desc: 'Wether you want to relax or forget Henny thing is possible List drinks by alcohol level'
      },
    ];
  }

  navigete(nav: string){
    this.router.navigateByUrl(`list/${nav}`)
  }

  ngOnInit() {
  }
}

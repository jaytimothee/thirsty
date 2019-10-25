import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DrinkIngredientsPage } from './drink-ingredients.page';

const routes: Routes = [
  {
    path: '',
    component: DrinkIngredientsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DrinkIngredientsPage]
})
export class DrinkIngredientsPageModule {}

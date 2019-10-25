import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlcoholLevelPage } from './alcohol-level.page';

const routes: Routes = [
  {
    path: '',
    component: AlcoholLevelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlcoholLevelPage]
})
export class AlcoholLevelPageModule {}

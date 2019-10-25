import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: ':drinkId',
        loadChildren: './home/drinkDetails/drink-ingredients/drink-ingredients.module#DrinkIngredientsPageModule',
      }
    ]

  },
  {
    path: 'list',
    children: [
      {
        path: '',
        loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: './list/categories/categories.module#CategoriesPageModule'
          },
          {
            path: ':catId',
            loadChildren: './list/categories/categories-list/categories-list.module#CategoriesListPageModule'
          }
        ]
      },
      {
        path: 'glass-type',
        children: [
          {
            path: '',
            loadChildren: './list/glass-type/glass-type.module#GlassTypePageModule'
          },
          {
            path: ':glassId',
            loadChildren: './list/glass-type/glass/glass.module#GlassPageModule'
          }
        ]
      },
      { path: 'ingredients', loadChildren: './list/ingredients/ingredients.module#IngredientsPageModule' },
      { path: 'alcohol-level', loadChildren: './list/alcohol-level/alcohol-level.module#AlcoholLevelPageModule' },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

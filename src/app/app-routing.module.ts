import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupplyPageComponent }  from '../../src/app/supply-page/supply-page.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
  {
    path: 'supply',
    component: SupplyPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }

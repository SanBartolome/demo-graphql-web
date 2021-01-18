import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create-product-first-step',
    loadChildren: () =>
      import(
        './products/screens/create-product-first-step/create-product-first-step.module'
      ).then((m) => m.CreateProductFirstStepModule),
  },
  {
    path: 'create-product-second-step',
    loadChildren: () =>
      import(
        './products/screens/create-product-second-step/create-product-second-step.module'
      ).then((m) => m.CreateProductSecondStepModule),
  },
  {
    path: 'edit-product-first-step/:id',
    loadChildren: () =>
      import(
        './products/screens/edit-product-first-step/edit-product-first-step.module'
      ).then((m) => m.EditProductFirstStepModule),
  },
  {
    path: 'edit-product-second-step/:id',
    loadChildren: () =>
      import(
        './products/screens/edit-product-second-step/edit-product-second-step.module'
      ).then((m) => m.EditProductSecondStepModule),
  },
  {
    path: 'list-products',
    loadChildren: () =>
      import('./products/screens/list-products/list-products.module').then(
        (m) => m.ListProductsModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list-products',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

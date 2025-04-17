import { Routes } from '@angular/router';

import { RootComponent } from './root/root.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

export const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'product-list', component: ProductListComponent },
      {
        path: 'product-details/:productId',
        component: ProductDetailsComponent,
      },
      { path: 'cart', component: CartComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Fallback route
    ],
  },
  { path: 'apple', component: RootComponent },
  { path: 'apple-pie', component: RootComponent },
];

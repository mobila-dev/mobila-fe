import { Routes } from '@angular/router';

import { RootComponent } from './root/root.component';

export const routes: Routes = [
    { path: '', component: RootComponent },
    { path: 'apple', component: RootComponent },
    { path: 'apple-pie', component: RootComponent },
];

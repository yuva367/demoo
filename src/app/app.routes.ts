import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path:'', redirectTo:"/home",pathMatch:'full'
    },
       {
        path: 'about',
        component: About
    }
];

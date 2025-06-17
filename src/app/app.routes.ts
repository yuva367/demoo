import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Feature } from './feature/feature';
import { Featuree } from './featuree/featuree';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path:'', redirectTo:"/home", pathMatch:'full'
    },
       {
        path: 'about/:id',
        component: About
    },
    {
        path:'feature',
        component: Feature
    },
     {
        path:'featuree',
        component: Featuree
    },
];

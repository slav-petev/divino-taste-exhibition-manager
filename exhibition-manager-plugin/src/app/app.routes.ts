import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'exhibition-data',
        loadChildren: () => import('./modules/exhibition-data/exhibition-data.routes').then(m => m.exhibitionDataRoutes)
    },
    {
        path: '',
        redirectTo: 'exhibition-data',
        pathMatch: 'full'
    },
];

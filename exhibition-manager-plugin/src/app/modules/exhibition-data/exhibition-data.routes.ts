import { Routes } from "@angular/router";
import { RegionsListComponent } from "./components/regions/list/regions-list.component";

export const exhibitionDataRoutes: Routes = [
    { 
        path: 'regions',
        component: RegionsListComponent 
    },
    {
        path: '',
        redirectTo: 'regions',
        pathMatch: 'full'
    },
];
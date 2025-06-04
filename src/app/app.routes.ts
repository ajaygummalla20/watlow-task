import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        title: 'Home'
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        title: 'Home'
    },
    {
        path: 'cocktails',
        loadComponent: () => import('./cocktail-info/cocktail-info.component').then(m => m.CocktailInfoComponent),
        title: 'Cocktails'
    },
    {
        path: 'ingredeaints',
        loadComponent: () => import('./ingrediants/ingrediants.component').then(m => m.IngrediantsComponent),
        title: 'Ingredeaints'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

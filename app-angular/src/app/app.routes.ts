import { Routes } from '@angular/router';
import { Movies } from './features/movies/movies';
import { Ejercicios } from './features/ejercicios/ejercicios';
import { Episodios } from './features/episodios/episodios';

export const routes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'movies', component: Movies },
    { path: 'ejercicios', component: Ejercicios },
    { path: 'episodios', component: Episodios },
    { path: '**', redirectTo: '/movies' }
];

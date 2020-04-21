import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { PeliculasComponent } from './Components/peliculas/peliculas.component';
import {Episodio1Component} from './Components/episodio1/episodio1.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'peliculas',
        component: PeliculasComponent
    },
    {
        path: 'episodio1',
        component: Episodio1Component
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders =  RouterModule.forRoot(appRoutes);

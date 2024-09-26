import { Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { ReccommendationsComponent } from './components/reccommendations/reccommendations.component';
import { ClipsComponent } from './components/clips/clips.component';

export const routes: Routes = [
    {
        path: "", component:CharactersComponent
    },
    {
        path: "recommendation", component:ReccommendationsComponent
    },
    {
        path: "clips", component:ClipsComponent
    },
];

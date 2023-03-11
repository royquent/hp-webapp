import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListResolver } from './resolvers/character-list.resolver';

const routes: Routes = [
  { 
    path: "", 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "house/:name",
    loadChildren: () => import('./modules/list/list.module').then(m => m.ListModule),
    resolve: { characters: CharacterListResolver }
  },
  {
    path: "character/:name",
    loadChildren: () => import('./modules/detail/detail.module').then(m => m.DetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

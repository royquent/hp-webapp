import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMainComponent } from './detail-main/detail-main.component';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPropertyComponent } from './character-property/character-property.component';

const routes: Routes = [
  { path: "", component: DetailMainComponent },
];

@NgModule({
  declarations: [
    DetailMainComponent,
    CharacterPropertyComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class DetailModule { }

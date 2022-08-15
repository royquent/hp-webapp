import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeMainComponent },
];

@NgModule({
  declarations: [
    HomeMainComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilModule } from '../util/util.module';

const routes: Routes = [
  { path: "", component: HomeMainComponent },
];

@NgModule({
  declarations: [
    HomeMainComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    UtilModule
  ]
})
export class HomeModule { }

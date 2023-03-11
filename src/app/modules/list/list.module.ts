import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMainComponent } from './list-main/list-main.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilModule } from '../util/util.module';


const routes: Routes = [
  { path: "", component: ListMainComponent },
];

@NgModule({
  declarations: [
    ListMainComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    UtilModule
  ]
})
export class ListModule { }

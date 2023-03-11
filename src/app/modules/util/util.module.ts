import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';



@NgModule({
  exports:[
    BreadcrumbComponent
  ],
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class UtilModule { }

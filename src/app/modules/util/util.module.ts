import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { CapitalizeFirstLetterPipe } from 'src/app/pipes/capitalize-first-letter.pipe';



@NgModule({
  exports:[
    BreadcrumbComponent,
    CapitalizeFirstLetterPipe
  ],
  declarations: [
    BreadcrumbComponent,
    CapitalizeFirstLetterPipe
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class UtilModule { }

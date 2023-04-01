import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { CapitalizeFirstLetterPipe } from 'src/app/pipes/capitalize-first-letter.pipe';
import { ToLowerCasePipe } from 'src/app/pipes/to-lower-case.pipe';
import { NoDataComponent } from './components/no-data/no-data.component';



@NgModule({
  exports:[
    BreadcrumbComponent,
    CapitalizeFirstLetterPipe,
    ToLowerCasePipe,
    NoDataComponent
  ],
  declarations: [
    BreadcrumbComponent,
    CapitalizeFirstLetterPipe,
    ToLowerCasePipe,
    NoDataComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class UtilModule { }

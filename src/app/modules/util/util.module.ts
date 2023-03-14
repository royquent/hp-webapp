import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { CapitalizeFirstLetterPipe } from 'src/app/pipes/capitalize-first-letter.pipe';
import { ToLowerCasePipe } from 'src/app/pipes/to-lower-case.pipe';



@NgModule({
  exports:[
    BreadcrumbComponent,
    CapitalizeFirstLetterPipe,
    ToLowerCasePipe
  ],
  declarations: [
    BreadcrumbComponent,
    CapitalizeFirstLetterPipe,
    ToLowerCasePipe
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class UtilModule { }

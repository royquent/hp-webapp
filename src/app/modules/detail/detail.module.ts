import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMainComponent } from './detail-main/detail-main.component';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPropertyComponent } from './character-property/character-property.component';
import { RoundedIconComponent } from './rounded-icon/rounded-icon.component';
import { HouseColoredLineComponent } from './house-colored-line/house-colored-line.component';
import { UtilModule } from '../util/util.module';
import { CharPictureHouseComponent } from './char-picture-house/char-picture-house.component';

const routes: Routes = [
  { path: "", component: DetailMainComponent },
];

@NgModule({
  declarations: [
    DetailMainComponent,
    CharacterPropertyComponent,
    RoundedIconComponent,
    HouseColoredLineComponent,
    CharPictureHouseComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    UtilModule
  ]
})
export class DetailModule { }

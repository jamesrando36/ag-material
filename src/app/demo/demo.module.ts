import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsComponent } from './buttons/buttons.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'flexbox', component: FlexboxComponent },
  { path: '**', redirectTo: 'buttons' },
];

@NgModule({
  declarations: [
    ButtonsComponent,
    FlexboxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DemoModule { }

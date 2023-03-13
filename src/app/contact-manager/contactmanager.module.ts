import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contact-manager-app/contactmanager-app.component';
import { ToolbarComponent } from './components/tool-bar/toolbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactmanagerAppComponent,
    children: [{ path: '', component: MainContentComponent }],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    SideNavComponent,
    MainContentComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ContactmanagerModule {}

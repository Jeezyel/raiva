import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidadeRoutingModule } from './cidade-routing.module';
import { CidadeFormComponent } from './components/cidade-form/cidade-form.component';
import { CidadeListComponent } from './components/cidade-list/cidade-list.component';
import { MatSelectModule } from '@angular/material/select';


import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    CidadeFormComponent,
    CidadeListComponent
  ],
  imports: [
    MatSelectModule,
    MatButtonModule,
    CommonModule,
    CidadeRoutingModule
  ]
})
export class CidadeModule { }

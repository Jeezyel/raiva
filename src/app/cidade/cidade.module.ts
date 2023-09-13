import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidadeRoutingModule } from './cidade-routing.module';
import { CidadeFormComponent } from './components/cidade-form/cidade-form.component';
import { CidadeListComponent } from './components/cidade-list/cidade-list.component';
import { MatSelectModule } from '@angular/material/select';


import {MatButtonModule} from '@angular/material/button';
import { MatTable, MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    CidadeFormComponent,
    CidadeListComponent
  ],
  imports: [
    MatSelectModule,
    MatButtonModule,
    CommonModule,
    CidadeRoutingModule,
    MatTableModule
  ]
})
export class CidadeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginUserComponent } from './components/login-user/login-user.component';


@NgModule({
  declarations: [
    LoginAdminComponent,
    LoginUserComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }

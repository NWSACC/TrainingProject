import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestRoutingModule } from './test-routing.module';

import { TestLoginComponent } from './login/test-login.component';
import { TestHomeComponent } from './home/test-home.component';

import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    TestLoginComponent,
    TestHomeComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class TestModule { }
